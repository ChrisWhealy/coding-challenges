const CRLF = "\n"
const DIR_UP = "upwards"
const DIR_DIAG_UP = "diagonally up"
const DIR_RIGHT = "to the right"
const DIR_DIAG_DOWN = "diagonally down"

class Winner {
  player
  direction
  column
  row

  constructor(player, rowIdx, colIdx, direction) {
    this.player = player
    this.direction = direction
    this.column = colIdx + 1
    this.row = rowIdx + 1

  }

  toString() {
    return `${this.player}'s win ${this.direction} starting at column ${this.column}, row ${this.row}`
  }
}

class Grid {
  #emptyCell = "."

  // Offset multipliers used to derive the location of a neighbour lying in a particular direction
  // [<column multiplier>, <row multiplier>]
  #up = [1, 0]
  #right = [0, 1]
  #diagUp = [1, 1]
  #diagDown = [-1, 1]

  // How many counters make a winning line?
  #winCount = 4

  rowCount
  columnCount
  cells = []

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  #neighbour(row, col, rowOffset, colOffset) {
    let targetRow = row + rowOffset
    let targetCol = col + colOffset

    // Return the value of the neighbour after first avoiding under- or overflow
    return (targetRow < this.rowCount && targetRow >= 0 && targetCol < this.columnCount && targetCol >= 0)
      ? this.cells[targetCol][targetRow]
      : null
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  // Check for a wining line in the direction determined by the values in the offsetMultiplier array
  #checkDirection(col, row, offsetMultiplier) {
    // Should we bail out early due to empty row?
    if (row >= this.cells[col].length) {
      return false
    }

    let first = this.cells[col][row]
    let winningLine = [first]

    for (let offset = 1; offset < this.#winCount; offset++) {
      winningLine.push(this.#neighbour(row, col, offset * offsetMultiplier[0], offset * offsetMultiplier[1]))
    }

    return winningLine.every(v => v === first)
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  #checkForWinner() {
    let direction = ""
    let c = -1
    let r = -1

    outer: for (c = 0; c < this.columnCount; c++) {
      for (r = 0; r < this.rowCount; r++) {
        if (this.#checkDirection(c, r, this.#up)) { direction = DIR_UP; break outer }
        if (this.#checkDirection(c, r, this.#diagUp)) { direction = DIR_DIAG_UP; break outer }
        if (this.#checkDirection(c, r, this.#right)) { direction = DIR_RIGHT; break outer }
        if (this.#checkDirection(c, r, this.#diagDown)) { direction = DIR_DIAG_DOWN; break outer }
      }
    }

    return direction !== "" ? new Winner(this.cells[c][r], r, c, direction) : null
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  constructor(cols, rows) {
    this.rowCount = rows
    this.columnCount = cols
    this.cells = [...new Array(cols)].map(() => [])
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  addCounter(col, counterType) {
    // No range checks are made for the column number or the number of counters added to a particular column
    this.cells[col].push(counterType)

    return this.#checkForWinner()
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  toString() {
    let gridStr = []

    for (let r = 0; r < this.rowCount; r++) {
      let thisRow = CRLF

      for (let c = 0; c < this.columnCount; c++) {
        thisRow += ` ${this.cells[c][r] === undefined ? this.#emptyCell : this.cells[c][r]} `
      }

      gridStr.unshift(thisRow)
    }

    gridStr.push(CRLF)
    return gridStr.join("")
  }
}

module.exports = {
  Grid,
  DIR_UP,
  DIR_DIAG_UP,
  DIR_RIGHT,
  DIR_DIAG_DOWN
}
