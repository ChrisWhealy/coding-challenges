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
        case thisRow < 0: thisRow = rowCount - 1; break // Wrap to bottom row
        case thisRow >= rowCount: thisRow = 0; break    // Wrap to top roww
        default:
      }

      // Check previous, current and next columns
      for (let c = -1; c < 2; c++) {
        // You are not your own neighbour...
        if (r === 0 && c === 0) continue

        let thisCol = this.colIdx + c

        // Check for column underflow or overflow
        switch (true) {
          case thisCol < 0: thisCol = colCount - 1; break // Wrap to righthand column
          case thisCol >= colCount: thisCol = 0; break    // Wrap to lefthand column
          default:
        }

        neighbourStateCount += board.cells[thisRow][thisCol].state
      }
    }

    return neighbourStateCount
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  // Return a new cell whose state is based on the state of its surrounding neighbours
  newState(board) {
    let nCount = this.countNeighbours(board)
    let newCell = new Cell(this.rowIdx, this.colIdx)

    if (this.state === 1 && (nCount < 2 || nCount > 3)) {
      // Cell dies either from loneliness or over-crowding
      newCell.state = 0
    } else if (this.state === 0 && nCount === 3) {
      // Cell comes to life
      newCell.state = 1
    } else {
      // Cell's current state is preserved
      newCell.state = this.state
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
