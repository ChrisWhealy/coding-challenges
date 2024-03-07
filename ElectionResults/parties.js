class Party {
  abbreviation
  partyName

  constructor(pName, abbrev) {
    this.partyName = pName
    this.abbreviation = abbrev
  }
}

const PARTIES = [
  new Party("Conservative Party", "C"),
  new Party("Labour Party", "L"),
  new Party("UK Independence Party", "UKIP"),
  new Party("Liberal Democrats", "LD"),
  new Party("Green Party", "G"),
  new Party("Independent", "Ind"),
  new Party("Scottish National Party", "SNP"),
]

const NOT_FOUND = "Not found"

module.exports = {
  PARTIES,
  NOT_FOUND,

  getPartyName: abbrev => {
    let party = PARTIES.find(p => p.abbreviation === abbrev)
    return !!party ? party.partyName : NOT_FOUND
  },

  maxPartyNameLength: PARTIES.reduce((acc, p) => Math.max(acc, p.partyName.length), 0)
}
