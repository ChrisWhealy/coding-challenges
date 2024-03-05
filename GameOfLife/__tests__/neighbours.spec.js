const { Board } = require("../board")

// Conduct all tests on a 5x5 grid
const ROWS = 5
const COLS = 5

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Test neighbour count without wrapping
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
test('centre cell has zero neighbours', () => {
  let board = new Board(ROWS, COLS)

  board.cells[2][2].state = 1

  expect(board.cells[2][2].countNeighbours(board)).toBe(0)
})

test('centre cell has one neighbour', () => {
  let board = new Board(ROWS, COLS)

  board.cells[1][1].state = 1  // Neighbour
  board.cells[2][2].state = 1

  expect(board.cells[2][2].countNeighbours(board)).toBe(1)
})

test('centre cell has two neighbours', () => {
  let board = new Board(ROWS, COLS)

  board.cells[1][1].state = 1  // Neighbour
  board.cells[2][2].state = 1
  board.cells[3][3].state = 1  // Neighbour

  expect(board.cells[2][2].countNeighbours(board)).toBe(2)
})

test('centre cell has three neighbours', () => {
  let board = new Board(ROWS, COLS)

  board.cells[1][1].state = 1  // Neighbour
  board.cells[1][3].state = 1  // Neighbour
  board.cells[2][2].state = 1
  board.cells[3][3].state = 1  // Neighbour

  expect(board.cells[2][2].countNeighbours(board)).toBe(3)
})

test('centre cell has four neighbours', () => {
  let board = new Board(ROWS, COLS)

  board.cells[1][1].state = 1  // Neighbour
  board.cells[1][3].state = 1  // Neighbour
  board.cells[2][2].state = 1
  board.cells[3][1].state = 1  // Neighbour
  board.cells[3][3].state = 1  // Neighbour

  expect(board.cells[2][2].countNeighbours(board)).toBe(4)
})

test('centre cell has five neighbours', () => {
  let board = new Board(ROWS, COLS)

  board.cells[1][1].state = 1  // Neighbour
  board.cells[1][3].state = 1  // Neighbour
  board.cells[2][2].state = 1
  board.cells[3][1].state = 1  // Neighbour
  board.cells[3][2].state = 1  // Neighbour
  board.cells[3][3].state = 1  // Neighbour

  expect(board.cells[2][2].countNeighbours(board)).toBe(5)
})

test('centre cell has six neighbours', () => {
  let board = new Board(ROWS, COLS)

  board.cells[1][1].state = 1  // Neighbour
  board.cells[1][2].state = 1  // Neighbour
  board.cells[1][3].state = 1  // Neighbour
  board.cells[2][2].state = 1
  board.cells[3][1].state = 1  // Neighbour
  board.cells[3][2].state = 1  // Neighbour
  board.cells[3][3].state = 1  // Neighbour

  expect(board.cells[2][2].countNeighbours(board)).toBe(6)
})

test('centre cell has seven neighbours', () => {
  let board = new Board(ROWS, COLS)

  board.cells[1][1].state = 1  // Neighbour
  board.cells[1][2].state = 1  // Neighbour
  board.cells[1][3].state = 1  // Neighbour
  board.cells[2][1].state = 1  // Neighbour
  board.cells[2][2].state = 1
  board.cells[3][1].state = 1  // Neighbour
  board.cells[3][2].state = 1  // Neighbour
  board.cells[3][3].state = 1  // Neighbour

  expect(board.cells[2][2].countNeighbours(board)).toBe(7)
})

test('centre cell has eight neighbours', () => {
  let board = new Board(ROWS, COLS)

  board.cells[1][1].state = 1  // Neighbour
  board.cells[1][2].state = 1  // Neighbour
  board.cells[1][3].state = 1  // Neighbour
  board.cells[2][1].state = 1  // Neighbour
  board.cells[2][2].state = 1
  board.cells[2][3].state = 1  // Neighbour
  board.cells[3][1].state = 1  // Neighbour
  board.cells[3][2].state = 1  // Neighbour
  board.cells[3][3].state = 1  // Neighbour

  expect(board.cells[2][2].countNeighbours(board)).toBe(8)
})

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Test neighbour count with wrapping
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
test('edge cell has zero neighbours', () => {
  let board = new Board(ROWS, COLS)

  board.cells[4][4].state = 1

  expect(board.cells[4][4].countNeighbours(board)).toBe(0)
})

test('edge cell has one neighbour', () => {
  let board = new Board(ROWS, COLS)

  board.cells[0][0].state = 1  // Neighbour
  board.cells[4][4].state = 1

  expect(board.cells[4][4].countNeighbours(board)).toBe(1)
})

test('edge cell has two neighbours', () => {
  let board = new Board(ROWS, COLS)

  board.cells[0][0].state = 1  // Neighbour
  board.cells[0][4].state = 1  // Neighbour
  board.cells[4][4].state = 1

  expect(board.cells[4][4].countNeighbours(board)).toBe(2)
})

test('edge cell has three neighbours', () => {
  let board = new Board(ROWS, COLS)

  board.cells[0][0].state = 1  // Neighbour
  board.cells[0][4].state = 1  // Neighbour
  board.cells[4][0].state = 1  // Neighbour
  board.cells[4][4].state = 1

  expect(board.cells[4][4].countNeighbours(board)).toBe(3)
})

test('edge cell has four neighbours', () => {
  let board = new Board(ROWS, COLS)

  board.cells[0][0].state = 1  // Neighbour
  board.cells[0][4].state = 1  // Neighbour
  board.cells[3][0].state = 1  // Neighbour
  board.cells[4][0].state = 1  // Neighbour
  board.cells[4][4].state = 1

  expect(board.cells[4][4].countNeighbours(board)).toBe(4)
})

test('edge cell has five neighbours', () => {
  let board = new Board(ROWS, COLS)

  board.cells[0][0].state = 1  // Neighbour
  board.cells[0][3].state = 1  // Neighbour
  board.cells[0][4].state = 1  // Neighbour
  board.cells[3][0].state = 1  // Neighbour
  board.cells[4][0].state = 1  // Neighbour
  board.cells[4][4].state = 1

  expect(board.cells[4][4].countNeighbours(board)).toBe(5)
})

test('edge cell has six neighbours', () => {
  let board = new Board(ROWS, COLS)

  board.cells[0][0].state = 1  // Neighbour
  board.cells[0][3].state = 1  // Neighbour
  board.cells[0][4].state = 1  // Neighbour
  board.cells[3][0].state = 1  // Neighbour
  board.cells[3][3].state = 1  // Neighbour
  board.cells[4][0].state = 1  // Neighbour
  board.cells[4][4].state = 1

  expect(board.cells[4][4].countNeighbours(board)).toBe(6)
})

test('edge cell has seven neighbours', () => {
  let board = new Board(ROWS, COLS)

  board.cells[0][0].state = 1  // Neighbour
  board.cells[0][3].state = 1  // Neighbour
  board.cells[0][4].state = 1  // Neighbour
  board.cells[3][0].state = 1  // Neighbour
  board.cells[3][3].state = 1  // Neighbour
  board.cells[3][4].state = 1  // Neighbour
  board.cells[4][0].state = 1  // Neighbour
  board.cells[4][4].state = 1

  expect(board.cells[4][4].countNeighbours(board)).toBe(7)
})

test('edge cell has eight neighbours', () => {
  let board = new Board(ROWS, COLS)

  board.cells[0][0].state = 1  // Neighbour
  board.cells[0][3].state = 1  // Neighbour
  board.cells[0][4].state = 1  // Neighbour
  board.cells[3][0].state = 1  // Neighbour
  board.cells[3][3].state = 1  // Neighbour
  board.cells[3][4].state = 1  // Neighbour
  board.cells[4][0].state = 1  // Neighbour
  board.cells[4][3].state = 1  // Neighbour
  board.cells[4][4].state = 1

  expect(board.cells[4][4].countNeighbours(board)).toBe(8)
})
