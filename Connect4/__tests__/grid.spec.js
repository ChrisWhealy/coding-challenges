const { Grid } = require('../grid')

const COLS = 7
const ROWS = 6

const EX = " X "
const OH = " O "

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Vertical winners
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
test('should have a vertical winner in row 1 column 1', () => {
  grid = new Grid(COLS, ROWS)

  maybeWinner = grid.addCounter(0, EX)
  maybeWinner = grid.addCounter(0, EX)
  maybeWinner = grid.addCounter(0, EX)
  maybeWinner = grid.addCounter(0, EX)

  expect(maybeWinner).toEqual({ player: EX, winDirection: "Up", row: 1, column: 1 })
})

test('should have a vertical winner in row 2 column 1', () => {
  grid = new Grid(COLS, ROWS)

  maybeWinner = grid.addCounter(0, OH)
  maybeWinner = grid.addCounter(0, EX)
  maybeWinner = grid.addCounter(0, EX)
  maybeWinner = grid.addCounter(0, EX)
  maybeWinner = grid.addCounter(0, EX)

  expect(maybeWinner).toEqual({ player: EX, winDirection: "Up", row: 2, column: 1 })
})

test('should have a vertical winner in row 3 column 1', () => {
  grid = new Grid(COLS, ROWS)

  maybeWinner = grid.addCounter(0, OH)
  maybeWinner = grid.addCounter(0, OH)
  maybeWinner = grid.addCounter(0, EX)
  maybeWinner = grid.addCounter(0, EX)
  maybeWinner = grid.addCounter(0, EX)
  maybeWinner = grid.addCounter(0, EX)

  expect(maybeWinner).toEqual({ player: EX, winDirection: "Up", row: 3, column: 1 })
})

test('should have a vertical winner in row 1 column 7', () => {
  grid = new Grid(COLS, ROWS)

  maybeWinner = grid.addCounter(6, EX)
  maybeWinner = grid.addCounter(6, EX)
  maybeWinner = grid.addCounter(6, EX)
  maybeWinner = grid.addCounter(6, EX)

  expect(maybeWinner).toEqual({ player: EX, winDirection: "Up", row: 1, column: 7 })
})

test('should have a vertical winner in row 2 column 7', () => {
  grid = new Grid(COLS, ROWS)

  maybeWinner = grid.addCounter(6, OH)
  maybeWinner = grid.addCounter(6, EX)
  maybeWinner = grid.addCounter(6, EX)
  maybeWinner = grid.addCounter(6, EX)
  maybeWinner = grid.addCounter(6, EX)

  expect(maybeWinner).toEqual({ player: EX, winDirection: "Up", row: 2, column: 7 })
})

test('should have a vertical winner in row 3 column 7', () => {
  grid = new Grid(COLS, ROWS)

  maybeWinner = grid.addCounter(6, OH)
  maybeWinner = grid.addCounter(6, OH)
  maybeWinner = grid.addCounter(6, EX)
  maybeWinner = grid.addCounter(6, EX)
  maybeWinner = grid.addCounter(6, EX)
  maybeWinner = grid.addCounter(6, EX)

  expect(maybeWinner).toEqual({ player: EX, winDirection: "Up", row: 3, column: 7 })
})

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Horizontal winners
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
test('should have a horizontal winner in row 1 column 1', () => {
  grid = new Grid(COLS, ROWS)

  maybeWinner = grid.addCounter(0, EX)
  maybeWinner = grid.addCounter(1, EX)
  maybeWinner = grid.addCounter(2, EX)
  maybeWinner = grid.addCounter(3, EX)

  expect(maybeWinner).toEqual({ player: EX, winDirection: "Right", row: 1, column: 1 })
})

test('should have a horizontal winner in row 1 column 2', () => {
  grid = new Grid(COLS, ROWS)

  maybeWinner = grid.addCounter(0, OH)
  maybeWinner = grid.addCounter(1, EX)
  maybeWinner = grid.addCounter(2, EX)
  maybeWinner = grid.addCounter(3, EX)
  maybeWinner = grid.addCounter(4, EX)

  expect(maybeWinner).toEqual({ player: EX, winDirection: "Right", row: 1, column: 2 })
})

test('should have a horizontal winner in row 1 column 3', () => {
  grid = new Grid(COLS, ROWS)

  maybeWinner = grid.addCounter(0, OH)
  maybeWinner = grid.addCounter(1, OH)
  maybeWinner = grid.addCounter(2, EX)
  maybeWinner = grid.addCounter(3, EX)
  maybeWinner = grid.addCounter(4, EX)
  maybeWinner = grid.addCounter(5, EX)

  expect(maybeWinner).toEqual({ player: EX, winDirection: "Right", row: 1, column: 3 })
})

test('should have a horizontal winner in row 2 column 1', () => {
  grid = new Grid(COLS, ROWS)

  // Non-winning first row
  maybeWinner = grid.addCounter(0, OH)
  maybeWinner = grid.addCounter(1, EX)
  maybeWinner = grid.addCounter(2, OH)
  maybeWinner = grid.addCounter(3, OH)
  maybeWinner = grid.addCounter(4, EX)
  maybeWinner = grid.addCounter(5, OH)
  maybeWinner = grid.addCounter(6, EX)

  // Winning second row
  maybeWinner = grid.addCounter(0, OH)
  maybeWinner = grid.addCounter(1, OH)
  maybeWinner = grid.addCounter(2, OH)
  maybeWinner = grid.addCounter(3, OH)

  expect(maybeWinner).toEqual({ player: OH, winDirection: "Right", row: 2, column: 1 })
})

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Diagonal winners
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
test('should have an upwards diagonal winner in row 1 column 1', () => {
  grid = new Grid(COLS, ROWS)

  // First row
  maybeWinner = grid.addCounter(0, OH)
  maybeWinner = grid.addCounter(1, EX)
  maybeWinner = grid.addCounter(2, EX)
  maybeWinner = grid.addCounter(3, EX)

  // Second row
  maybeWinner = grid.addCounter(0, EX)
  maybeWinner = grid.addCounter(1, OH)
  maybeWinner = grid.addCounter(2, EX)
  maybeWinner = grid.addCounter(3, EX)

  // Third row
  maybeWinner = grid.addCounter(0, EX)
  maybeWinner = grid.addCounter(1, EX)
  maybeWinner = grid.addCounter(2, OH)
  maybeWinner = grid.addCounter(3, EX)

  // Fourth row
  maybeWinner = grid.addCounter(0, EX)
  maybeWinner = grid.addCounter(1, EX)
  maybeWinner = grid.addCounter(2, EX)
  maybeWinner = grid.addCounter(3, OH)

  expect(maybeWinner).toEqual({ player: OH, winDirection: "DiagUp", row: 1, column: 1 })
})

test('should have a downwards diagonal winner in row 4 column 1', () => {
  grid = new Grid(COLS, ROWS)

  // First row
  maybeWinner = grid.addCounter(0, EX)
  maybeWinner = grid.addCounter(1, EX)
  maybeWinner = grid.addCounter(2, EX)
  maybeWinner = grid.addCounter(3, OH)

  // Second row
  maybeWinner = grid.addCounter(0, EX)
  maybeWinner = grid.addCounter(1, EX)
  maybeWinner = grid.addCounter(2, OH)
  maybeWinner = grid.addCounter(3, EX)

  // Third row
  maybeWinner = grid.addCounter(0, EX)
  maybeWinner = grid.addCounter(1, OH)
  maybeWinner = grid.addCounter(2, EX)
  maybeWinner = grid.addCounter(3, EX)

  // Fourth row
  maybeWinner = grid.addCounter(0, OH)
  maybeWinner = grid.addCounter(1, EX)
  maybeWinner = grid.addCounter(2, EX)
  maybeWinner = grid.addCounter(3, OH)

  expect(maybeWinner).toEqual({ player: OH, winDirection: "DiagDown", row: 4, column: 1 })
})
