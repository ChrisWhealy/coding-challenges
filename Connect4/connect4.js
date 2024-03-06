const { Grid } = require('./grid')

const COLS = 7
const ROWS = 6

const EX = " X "
const OH = " O "

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Vertical winner in column 1
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
let grid = new Grid(COLS, ROWS)
let maybeWinner = null

maybeWinner = grid.addCounter(0, OH)
maybeWinner = grid.addCounter(0, OH)
maybeWinner = grid.addCounter(0, EX)
maybeWinner = grid.addCounter(0, EX)
maybeWinner = grid.addCounter(0, EX)
maybeWinner = grid.addCounter(0, EX)

console.log(`${grid}`)
console.log(JSON.stringify(maybeWinner))

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
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

console.log(`${grid}`)
console.log(JSON.stringify(maybeWinner))
