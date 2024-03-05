class Cell {
  state
  rowIdx
  colIdx

  constructor(rowIdx, colIdx) {
    this.state = 0
    this.rowIdx = rowIdx
    this.colIdx = colIdx
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  // Given a particular board, count how many living neighbours this cell has
  countNeighbours(board) {
    let neighbourStateCount = 0
    let rowCount = board.cells.length
    let colCount = board.cells[0].length

    // Check previous, current and next rows
    for (let r = -1; r < 2; r++) {
      let thisRow = this.rowIdx + r

      // Check for row underflow or overflow
      switch (true) {
        case thisRow < 0: thisRow = rowCount - 1; break
        case thisRow >= rowCount: thisRow = 0; break
        default:
      }

      // Check previous, current and next columns
      for (let c = -1; c < 2; c++) {
        // You are not your own neighbour...
        if (r === 0 && c === 0) continue

        let thisCol = this.colIdx + c

        // Check for column underflow or overflow
        switch (true) {
          case thisCol < 0: thisCol = colCount - 1; break
          case thisCol >= colCount: thisCol = 0; break
          default:
        }

        neighbourStateCount += board.cells[thisRow][thisCol].state
      }
    }

    return neighbourStateCount
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  // Return a new cell whose state is based on the state of its old neighbours
  newState(board) {
    let nCount = this.countNeighbours(board)
    let newCell = new Cell(this.rowIdx, this.colIdx)

    newCell.state = this.state   // Assume the cell's current state will be preserved

    if (this.state === 1 && (nCount < 2 || nCount > 3)) {
      newCell.state = 0   // Cell dies either from loneliness or over-crowding
    } else if (this.state === 0 && nCount === 3) {
      newCell.state = 1   // Cell comes to life
    }

    return newCell
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  toString() {
    return this.state === 0 ? " - " : " ⧭ "
  }
}

module.exports = {
  Cell
}
