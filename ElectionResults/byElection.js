// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
class ByElectionResult {
  maxPartyNameLength = 0

  constituencyName
  totalVotes
  errorMessages
  results

  constructor(consName) {
    this.constituencyName = consName
    this.totalVotes = 0
    this.errorMessages = []
    this.results = []

  }

  addResult(pName, votes) {
    this.results.push(new PartyResult(pName, votes, this.maxPartyNameLength))
    this.totalVotes += votes
  }

  toString() {
    return this.results.reduce((str, result) => {
      str += `${result}\n`
      return str
    }, `${this.constituencyName}:\n`)
  }

}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
class PartyResult {
  #padName
  partyName
  votes
  percentage

  constructor(pName, votes, padName) {
    this.partyName = pName
    this.totalVotes = votes
    this.#padName = padName
    this.percentage = 0
  }

  toString() {
    let percentStr = (this.percentage * 100) % 10 === 0 ? `${this.percentage}0` : `${this.percentage}`
    return `  ${this.partyName.padEnd(this.#padName, " ")}: ${percentStr.padStart(5, " ")}% (${this.totalVotes})`
  }

}

module.exports = {
  ByElectionResult,
  PartyResult
}
