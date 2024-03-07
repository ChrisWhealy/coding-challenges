const { Grid } = require('./grid')

const COLS = 7
const ROWS = 6

const EX = "X"
const OH = "O"

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Returns a function that plays through a set of moves on a board of a given size
// Any supplied moves beyond the winning move are not played
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
const playConnect4OnGrid = (cols, rows) =>
  moves => {
    let grid = new Grid(cols, rows)
    let result = { winner: null, grid }

    for (let m = 0; m < moves.length; m++) {
      let maybeWinner = grid.addCounter.apply(grid, moves[m])

      if (maybeWinner) {
        result.winner = maybeWinner
        break
      }
    }

    return result
  }

const playConnect4 = playConnect4OnGrid(COLS, ROWS)

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Vertical winner
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
moves = [[0, EX], [1, OH], [0, EX], [2, OH], [0, EX], [3, OH], [0, EX]]
result = playConnect4(moves)

console.log(`${result.grid}`)
console.log(`${result.winner}`)

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Upwards diagonal winner
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
moves = [
  // First row
  [0, EX], [3, OH], [1, EX], [2, OH],
  // Second row
  [0, EX], [2, OH], [1, EX], [3, OH],
  // Third row
  [0, EX], [1, OH], [2, EX], [3, OH],
  // Fourth row
  [3, EX], [1, OH], [3, EX], [2, OH]
]
result = playConnect4(moves)

console.log(`${result.grid}`)
console.log(`${result.winner}`)

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Downwards diagonal winner
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
moves = [
  // First row
  [0, EX], [3, OH], [1, EX], [2, OH],
  // Second row
  [0, EX], [2, OH], [1, EX], [3, OH],
  // Third row
  [0, EX], [1, OH], [2, EX], [3, OH],
  // Fourth row
  [2, EX], [0, OH]
]
result = playConnect4(moves)

console.log(`${result.grid}`)
console.log(`${result.winner}`)

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
module.exports = {
  playConnect4OnGrid,
  EX, OH,
}
