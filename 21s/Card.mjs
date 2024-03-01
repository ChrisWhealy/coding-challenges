export default class Card {
  suit
  face
  faceValue

  constructor(suit, face) {
    this.suit = suit
    this.face = face

    switch (face) {
      case "2": case "3": case "4": case "5": case "6": case "7": case "8": case "9":
        this.faceValue = parseInt(face)
        break

      case "J": case "Q": case "K":
        this.faceValue = 10
        break

      case "A":
        this.faceValue = 11
        break

      default:
        this.face = "?"
        this.faceValue = 0
    }
  }

  toString() {
    return `${this.face}${this.suit}`
  }
}
