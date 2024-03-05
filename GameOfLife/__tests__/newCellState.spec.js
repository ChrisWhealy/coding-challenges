const { Board } = require("../board")

// Conduct all tests on a 5x5 grid
const ROWS = 5
const COLS = 5

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Living cell state transitions
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
test('live cell with zero neighbours should die', () => {
  let board = new Board(ROWS, COLS)

  board.cells[2][2].state = 1

  expect(board.cells[2][2].newState(board).state).toBe(0)
})

test('live cell with one neighbour should die', () => {
  let board = new Board(ROWS, COLS)

  board.cells[1][1].state = 1  // Neighbour
  board.cells[2][2].state = 1

  expect(board.cells[2][2].newState(board).state).toBe(0)
})

test('live cell with two neighbours should stay alive', () => {
  let board = new Board(ROWS, COLS)

  board.cells[1][1].state = 1  // Neighbour
  board.cells[2][2].state = 1
  board.cells[3][3].state = 1  // Neighbour

  expect(board.cells[2][2].newState(board).state).toBe(1)
})

test('live cell with three neighbours should stay alive', () => {
  let board = new Board(ROWS, COLS)

  board.cells[1][1].state = 1  // Neighbour
  board.cells[2][2].state = 1
  board.cells[3][1].state = 1  // Neighbour
  board.cells[3][3].state = 1  // Neighbour

  expect(board.cells[2][2].newState(board).state).toBe(1)
})

test('live cell with four neighbours should die', () => {
  let board = new Board(ROWS, COLS)

  board.cells[1][1].state = 1  // Neighbour
  board.cells[1][3].state = 1  // Neighbour
  board.cells[2][2].state = 1
  board.cells[3][1].state = 1  // Neighbour
  board.cells[3][3].state = 1  // Neighbour

  expect(board.cells[2][2].newState(board).state).toBe(0)
})

test('live cell with five neighbours should die', () => {
  let board = new Board(ROWS, COLS)

  board.cells[1][1].state = 1  // Neighbour
  board.cells[1][2].state = 1  // Neighbour
  board.cells[1][3].state = 1  // Neighbour
  board.cells[2][2].state = 1
  board.cells[3][1].state = 1  // Neighbour
  board.cells[3][3].state = 1  // Neighbour

  expect(board.cells[2][2].newState(board).state).toBe(0)
})

test('live cell with six neighbours should die', () => {
  let board = new Board(ROWS, COLS)

  board.cells[1][1].state = 1  // Neighbour
  board.cells[1][2].state = 1  // Neighbour
  board.cells[1][3].state = 1  // Neighbour
  board.cells[2][2].state = 1
  board.cells[3][1].state = 1  // Neighbour
  board.cells[3][2].state = 1  // Neighbour
  board.cells[3][3].state = 1  // Neighbour

  expect(board.cells[2][2].newState(board).state).toBe(0)
})

test('live cell with seven neighbours should die', () => {
  let board = new Board(ROWS, COLS)

  board.cells[1][1].state = 1  // Neighbour
  board.cells[1][2].state = 1  // Neighbour
  board.cells[1][3].state = 1  // Neighbour
  board.cells[2][1].state = 1  // Neighbour
  board.cells[2][2].state = 1
  board.cells[3][1].state = 1  // Neighbour
  board.cells[3][2].state = 1  // Neighbour
  board.cells[3][3].state = 1  // Neighbour

  expect(board.cells[2][2].newState(board).state).toBe(0)
})

test('live cell with eight neighbours should die', () => {
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

  expect(board.cells[2][2].newState(board).state).toBe(0)
})

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Dead cell state transitions
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
test('dead cell with zero neighbours should stay dead', () => {
  let board = new Board(ROWS, COLS)

  expect(board.cells[2][2].newState(board).state).toBe(0)
})

test('dead cell with one neighbour should stay dead', () => {
  let board = new Board(ROWS, COLS)

  board.cells[1][1].state = 1  // Neighbour
  board.cells[2][2].state = 0

  expect(board.cells[2][2].newState(board).state).toBe(0)
})

test('dead cell with two neighbours should stay dead', () => {
  let board = new Board(ROWS, COLS)

  board.cells[1][1].state = 1  // Neighbour
  board.cells[2][2].state = 0
  board.cells[3][3].state = 1  // Neighbour

  expect(board.cells[2][2].newState(board).state).toBe(0)
})

test('dead cell with three neighbours should come alive', () => {
  let board = new Board(ROWS, COLS)

  board.cells[1][1].state = 1  // Neighbour
  board.cells[2][2].state = 0
  board.cells[3][1].state = 1  // Neighbour
  board.cells[3][3].state = 1  // Neighbour

  expect(board.cells[2][2].newState(board).state).toBe(1)
})

test('dead cell with four neighbours should stay dead', () => {
  let board = new Board(ROWS, COLS)

  board.cells[1][1].state = 1  // Neighbour
  board.cells[1][3].state = 1  // Neighbour
  board.cells[2][2].state = 0
  board.cells[3][1].state = 1  // Neighbour
  board.cells[3][3].state = 1  // Neighbour

  expect(board.cells[2][2].newState(board).state).toBe(0)
})

test('dead cell with five neighbours should stay dead', () => {
  let board = new Board(ROWS, COLS)

  board.cells[1][1].state = 1  // Neighbour
  board.cells[1][3].state = 1  // Neighbour
  board.cells[2][2].state = 0
  board.cells[3][1].state = 1  // Neighbour
  board.cells[3][2].state = 1  // Neighbour
  board.cells[3][3].state = 1  // Neighbour

  expect(board.cells[2][2].newState(board).state).toBe(0)
})

test('dead cell with six neighbours should stay dead', () => {
  let board = new Board(ROWS, COLS)

  board.cells[1][1].state = 1  // Neighbour
  board.cells[1][2].state = 1  // Neighbour
  board.cells[1][3].state = 1  // Neighbour
  board.cells[2][2].state = 0
  board.cells[3][1].state = 1  // Neighbour
  board.cells[3][2].state = 1  // Neighbour
  board.cells[3][3].state = 1  // Neighbour

  expect(board.cells[2][2].newState(board).state).toBe(0)
})

test('dead cell with seven neighbours should stay dead', () => {
  let board = new Board(ROWS, COLS)

  board.cells[1][1].state = 1  // Neighbour
  board.cells[1][2].state = 1  // Neighbour
  board.cells[1][3].state = 1  // Neighbour
  board.cells[2][2].state = 0
  board.cells[2][3].state = 1  // Neighbour
  board.cells[3][1].state = 1  // Neighbour
  board.cells[3][2].state = 1  // Neighbour
  board.cells[3][3].state = 1  // Neighbour

  expect(board.cells[2][2].newState(board).state).toBe(0)
})

test('dead cell with eight neighbours should stay dead', () => {
  let board = new Board(ROWS, COLS)

  board.cells[1][1].state = 1  // Neighbour
  board.cells[1][2].state = 1  // Neighbour
  board.cells[1][3].state = 1  // Neighbour
  board.cells[2][1].state = 1  // Neighbour
  board.cells[2][2].state = 0
  board.cells[2][3].state = 1  // Neighbour
  board.cells[3][1].state = 1  // Neighbour
  board.cells[3][2].state = 1  // Neighbour
  board.cells[3][3].state = 1  // Neighbour

  expect(board.cells[2][2].newState(board).state).toBe(0)
})
