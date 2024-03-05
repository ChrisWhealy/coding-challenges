const { Board } = require("./board")

const ROWS = 20
const COLS = 20

let currentBoard = new Board(ROWS, COLS)

// Create a glider
currentBoard.cells[1][2].state = 1
currentBoard.cells[2][3].state = 1
currentBoard.cells[3][1].state = 1
currentBoard.cells[3][2].state = 1
currentBoard.cells[3][3].state = 1

// Create a light-weight spaceship
currentBoard.cells[2][10].state = 1
currentBoard.cells[2][13].state = 1
currentBoard.cells[3][14].state = 1
currentBoard.cells[4][10].state = 1
currentBoard.cells[4][14].state = 1
currentBoard.cells[5][11].state = 1
currentBoard.cells[5][12].state = 1
currentBoard.cells[5][13].state = 1
currentBoard.cells[5][14].state = 1

// Run forever
setInterval(() => {
  console.log(`${currentBoard}`)
  currentBoard = currentBoard.nextBoardState()
}, 50)
