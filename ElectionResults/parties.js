const PARTIES = [
  { "abbreviation": "C", "partyName": "Conservative Party" },
  { "abbreviation": "L", "partyName": "Labour Party" },
  { "abbreviation": "UKIP", "partyName": "UK Independence Party" },
  { "abbreviation": "LD", "partyName": "Liberal Democrats" },
  { "abbreviation": "G", "partyName": "Green Party" },
  { "abbreviation": "Ind", "partyName": "Independent" },
  { "abbreviation": "SNP", "partyName": "Scottish National Party" },
]

const NOT_FOUND = "Not found"

module.exports = {
  PARTIES,
  NOT_FOUND,

  getPartyName: abbrev => {
    PARTIES.find(p => p.abbreviation === abbrev)
    for (let i = 0; i < PARTIES.length; i++) {
      if (PARTIES[i].abbreviation === abbrev) return PARTIES[i].partyName
    }

    return NOT_FOUND
  }

}
