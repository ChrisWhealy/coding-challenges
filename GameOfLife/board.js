const { Cell } = require('./cell')

class Board {
  cells = []
  rowCount = 0
  colCount = 0

  // Create a new board initialised with empty cells
  constructor(rows, cols) {
    this.rowCount = rows
    this.colCount = cols

    this.cells = [...new Array(rows)].map(
      (_, rowIdx) => [...new Array(cols)].map(
        (_, colIdx) => new Cell(rowIdx, colIdx)
      )
    )
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  // Calculate the next state of the board
  nextBoardState() {
    // Create a new board
    let newBoard = this.cells.reduce(
      (newBoard, oldRow) => {
        newBoard.push(oldRow.reduce(
          (newCellRow, oldCell) => {
            newCellRow.push(oldCell.newState(this))
            return newCellRow
          }, [])
        )
        return newBoard
      }, [])

    // Replace existing board with new one
    this.cells = newBoard

    return this
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  toString() {
    return this.cells.reduce((boardStr, row) => {
      boardStr += row.reduce((rowStr, cell) => {
        rowStr += `${cell}`
        return rowStr
      }, "\n")

      return boardStr
    }, "")
  }
}

module.exports = {
  Board
}
