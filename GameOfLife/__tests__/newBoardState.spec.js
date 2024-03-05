const { Board } = require("../board")

// Conduct all tests on a 5x5 grid
const ROWS = 5
const COLS = 5

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Board transition 1
// - - - - -       - - - - -
// - 1 - 1 -       - - 1 - -
// - - 1 - -  -->  - 1 - 1 -
// - 1 - 1 -       - - 1 - -
// - - - - -       - - - - -
//
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
test('board transition 1', () => {
  let oldBoard = new Board(ROWS, COLS)

  oldBoard.cells[1][1].state = 1
  oldBoard.cells[1][3].state = 1
  oldBoard.cells[2][2].state = 1
  oldBoard.cells[3][1].state = 1
  oldBoard.cells[3][3].state = 1

  let newBoard = oldBoard.nextBoardState()

  expect(newBoard.cells[1][2].state).toBe(1)
  expect(newBoard.cells[2][1].state).toBe(1)
  expect(newBoard.cells[2][3].state).toBe(1)
  expect(newBoard.cells[3][2].state).toBe(1)
})

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Board transition 2
// - - - - -       - - - - -
// - - 1 - -       - - 1 - -
// - 1 - 1 -  -->  - 1 - 1 -
// - - 1 - -       - - 1 - -
// - - - - -       - - - - -
//
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
test('board transition 2', () => {
  let oldBoard = new Board(ROWS, COLS)

  oldBoard.cells[1][2].state = 1
  oldBoard.cells[2][1].state = 1
  oldBoard.cells[2][3].state = 1
  oldBoard.cells[3][2].state = 1

  let newBoard = oldBoard.nextBoardState()

  expect(newBoard.cells[1][2].state).toBe(1)
  expect(newBoard.cells[2][1].state).toBe(1)
  expect(newBoard.cells[2][3].state).toBe(1)
  expect(newBoard.cells[3][2].state).toBe(1)
})
