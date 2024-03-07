const { ElectionResult } = require('./election')
const { getPartyName, NOT_FOUND, maxPartyNameLength } = require('./parties')

// Round percentage to 2dp
const asPercentageOf = total => someValue => Math.floor((someValue / total) * 10000) / 100

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
const parse = line => {
  let parsedLine

  let fragments = line.split(",").map(f => f.trim())
  let constituencyName = fragments[0]

  // If the first field contains either an integer or a party abbreviation, then bail out early because the constituency
  // name is missing: we have no idea where these votes were cast
  if (Number.isInteger(parseInt(constituencyName)) || getPartyName(constituencyName) !== NOT_FOUND) {
    parsedLine = new ElectionResult("Unknown")
    parsedLine.errorMessages.push("Missing constituency name")

    return parsedLine
  } else {
    parsedLine = new ElectionResult(constituencyName)
  }

  parsedLine.maxPartyNameLength = maxPartyNameLength

  // Parse the remaining fragments
  for (let i = 1; i < fragments.length; i++) {
    // We should find a pair of values: total votes cast, party abbreviation
    let maybeVoteCount = parseInt(fragments[i])
    let maybePartyName = getPartyName(fragments[i + 1])

    // Is the first field a vote count?
    if (isNaN(maybeVoteCount)) {
      // Nope, so we got a value we assume to be a party abbreviation
      parsedLine.errorMessages.push(`Vote count for ${getPartyName(fragments[i])} missing`)
      continue
    }

    // Is the second field a party abbreviation?
    if (maybePartyName === NOT_FOUND) {
      // Nope, so we got a vote count, but for an unknown party
      parsedLine.errorMessages.push(`Vote count of ${maybeVoteCount} found for unknown party`)
      continue
    }

    parsedLine.addResult(maybePartyName, maybeVoteCount)
    i++
  }

  let asPercentage = asPercentageOf(parsedLine.totalVotes)

  // Now that the total number of votes is known, go back and fill in the percentage votes per party
  parsedLine.results.forEach(party => party.percentage = asPercentage(party.totalVotes))

  return parsedLine
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
module.exports = {
  parse
}
