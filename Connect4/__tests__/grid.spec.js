const { playConnect4OnGrid, EX, OH } = require('../connect4')
const { DIR_UP, DIR_DIAG_UP, DIR_RIGHT, DIR_DIAG_DOWN } = require('../grid')

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Vertical winners
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
test('should stop when we have a vertical winner in row 1 column 1', () => {
  let moves = [
    [0, EX], [1, OH],
    [0, EX], [1, OH],
    [0, EX], [1, OH],
    [0, EX], // Winning move
    [1, OH], // Move not played
  ]
  let result = playConnect4OnGrid(7, 6)(moves)

  expect(result.winner).toEqual({ player: EX, direction: DIR_UP, row: 1, column: 1 })
  expect(result.grid.cells[1][3]).toBeUndefined()
})

test('should stop when we have a vertical winner in row 2 column 1', () => {
  let moves = [
    [0, OH], [0, EX],
    [1, OH], [0, EX],
    [1, OH], [0, EX],
    [1, OH], [0, EX], // Winning move
    [2, OH]           // Move not played
  ]
  let result = playConnect4OnGrid(7, 6)(moves)

  expect(result.winner).toEqual({ player: EX, direction: DIR_UP, row: 2, column: 1 })
  expect(result.grid.cells[2][0]).toBeUndefined()
})

test('should stop when we have a vertical winner in row 3 column 1', () => {
  let moves = [
    [0, OH], [1, EX],
    [0, OH], [0, EX],
    [1, OH], [0, EX],
    [1, OH], [0, EX],
    [1, OH], [0, EX], // Winning move
    [2, OH]           // Move not played
  ]
  let result = playConnect4OnGrid(7, 6)(moves)

  expect(result.winner).toEqual({ player: EX, direction: DIR_UP, row: 3, column: 1 })
  expect(result.grid.cells[2][0]).toBeUndefined()
})

test('should stop when we have a vertical winner in row 1 column 7', () => {
  let moves = [
    [6, EX], [1, OH],
    [6, EX], [1, OH],
    [6, EX], [1, OH],
    [6, EX], /* Winning move */[2, OH] // Move not played
  ]
  let result = playConnect4OnGrid(7, 6)(moves)

  expect(result.winner).toEqual({ player: EX, direction: DIR_UP, row: 1, column: 7 })
  expect(result.grid.cells[2][0]).toBeUndefined()
})

test('should stop when we have a vertical winner in row 2 column 7', () => {
  let moves = [
    [6, OH], [6, EX],
    [1, OH], [6, EX],
    [1, OH], [6, EX],
    [1, OH], [6, EX], // Winning move
    [2, OH]           // Move not played
  ]
  let result = playConnect4OnGrid(7, 6)(moves)

  expect(result.winner).toEqual({ player: EX, direction: DIR_UP, row: 2, column: 7 })
  expect(result.grid.cells[2][0]).toBeUndefined()
})

test('should stop when we have a vertical winner in row 3 column 7', () => {
  let moves = [
    [6, OH], [1, EX],
    [6, OH], [6, EX],
    [1, OH], [6, EX],
    [1, OH], [6, EX],
    [1, OH], [6, EX], // Winning move
    [2, OH]           // Move not played
  ]
  let result = playConnect4OnGrid(7, 6)(moves)

  expect(result.winner).toEqual({ player: EX, direction: DIR_UP, row: 3, column: 7 })
  expect(result.grid.cells[2][0]).toBeUndefined()
})

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Horizontal winners
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
test('should stop when we have a horizontal winner in row 1 column 1', () => {
  let moves = [
    [0, EX], [0, OH],
    [1, EX], [1, OH],
    [2, EX], [1, OH],
    [3, EX], /* Winning move*/[1, OH]
  ]
  let result = playConnect4OnGrid(7, 6)(moves)

  expect(result.winner).toEqual({ player: EX, direction: DIR_RIGHT, row: 1, column: 1 })
  expect(result.grid.cells[0][3]).toBeUndefined()
})

test('should stop when we have a horizontal winner in row 1 column 2', () => {
  let moves = [
    [0, OH], [1, EX],
    [1, OH], [2, EX],
    [1, OH], [3, EX],
    [1, OH], [4, EX], // Winning move
    [2, OH]           // Move not played
  ]
  let result = playConnect4OnGrid(7, 6)(moves)

  expect(result.winner).toEqual({ player: EX, direction: DIR_RIGHT, row: 1, column: 2 })
  expect(result.grid.cells[2][1]).toBeUndefined()
})

test('should stop when we have a horizontal winner in row 1 column 3', () => {
  let moves = [
    [0, OH], [2, EX],
    [1, OH], [2, EX],
    [0, OH], [3, EX],
    [1, OH], [4, EX],
    [1, OH], [5, EX], // Winning move
    [0, OH]           // Move not played
  ]
  let result = playConnect4OnGrid(7, 6)(moves)

  expect(result.winner).toEqual({ player: EX, direction: DIR_RIGHT, row: 1, column: 3 })
  expect(result.grid.cells[0][2]).toBeUndefined()
})

test('should stop when we have a horizontal winner in row 2 column 4', () => {
  let moves = [
    [0, OH], [1, EX],
    [2, OH], [3, EX],
    [4, OH], [5, EX],
    [6, OH], [6, EX],
    [0, OH], [5, EX],
    [1, OH], [4, EX],
    [2, OH], [3, EX], // Winning move
    [0, OH]           // Move not played
  ]
  let result = playConnect4OnGrid(7, 6)(moves)

  expect(result.winner).toEqual({ player: EX, direction: DIR_RIGHT, row: 2, column: 4 })
  expect(result.grid.cells[0][2]).toBeUndefined()
})

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Diagonal winners
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
test('should stop when we have an upwards diagonal winner in row 1 column 1', () => {
  let moves = [
    [0, OH], [1, EX],
    [2, OH], [3, EX],
    [1, OH], [0, EX],
    [2, OH], [3, EX],
    [2, OH], [1, EX],
    [3, OH], [0, EX],
    [0, OH], [1, EX],
    [3, OH], [2, EX], // Winning move
    [0, OH]           // Move not played
  ]
  let result = playConnect4OnGrid(7, 6)(moves)

  expect(result.winner).toEqual({ player: OH, direction: DIR_DIAG_UP, row: 1, column: 1 })
  expect(result.grid.cells[0][4]).toBeUndefined()
})

test('should stop when we have a downwards diagonal winner in row 4 column 1', () => {
  let moves = [
    [0, EX], [2, OH],
    [1, EX], [3, OH],
    [1, EX], [0, OH],
    [3, EX], [2, OH],
    [3, EX], [2, OH],
    [0, EX], [1, OH],
    [2, EX], [1, OH],
    [3, EX], [0, OH], // Winning move
    [0, OH]           // Move not played
  ]
  let result = playConnect4OnGrid(7, 6)(moves)

  expect(result.winner).toEqual({ player: OH, direction: DIR_DIAG_DOWN, row: 4, column: 1 })
  expect(result.grid.cells[0][4]).toBeUndefined()
})
