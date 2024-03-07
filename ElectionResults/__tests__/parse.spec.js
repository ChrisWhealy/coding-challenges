const { parse } = require('../parser')

const GOOD_RESULTS = [
  "Cardiff West, 11014, C, 17803, L, 4923, UKIP, 2069, LD",
  "Islington South & Finsbury, 22547, L, 9389, C, 4829, LD, 3375, UKIP, 3371, G, 309, Ind"
]

const BAD_RESULT_NO_CONS_NAME = "11014, C, 17803, L, 4923, UKIP, 2069, LD"
const BAD_RESULT_MISSING_VOTE_COUNT = "Islington South & Finsbury, 22547, L, 9389, C, 4829, LD, UKIP, 3371, G, 309, Ind"
const BAD_RESULT_MISSING_PARTY_NAME = "Islington South & Finsbury, 22547, L, 9389, C, 4829, 3375, UKIP, 3371, G, 309, Ind"

test('should parse a valid input line', () => {
  let parsedLine = parse(GOOD_RESULTS[0])

  expect(parsedLine.constituencyName).toBe("Cardiff West")
  expect(parsedLine.errorMessages.length).toBe(0)
  expect(parsedLine.results.length).toBe(4)

  expect(parsedLine.results[0].partyName).toBe("Conservative Party")
  expect(parsedLine.results[1].partyName).toBe("Labour Party")
})

test('should detect no constituency name', () => {
  let parsedLine = parse(BAD_RESULT_NO_CONS_NAME)

  expect(parsedLine.constituencyName).toBe("Unknown")
  expect(parsedLine.errorMessages[0]).toBe("Missing constituency name")
})

test('should detect missing vote count', () => {
  let parsedLine = parse(BAD_RESULT_MISSING_VOTE_COUNT)

  expect(parsedLine.constituencyName).toBe("Islington South & Finsbury")
  expect(parsedLine.errorMessages[0]).toBe("Vote count for UK Independence Party missing")
  expect(parsedLine.results[0].partyName).toBe("Labour Party")
})

test('should detect missing party name', () => {
  let parsedLine = parse(BAD_RESULT_MISSING_PARTY_NAME)

  expect(parsedLine.constituencyName).toBe("Islington South & Finsbury")
  expect(parsedLine.errorMessages[0]).toBe("Vote count of 4829 found for unknown party")
  expect(parsedLine.results[0].partyName).toBe("Labour Party")
})
