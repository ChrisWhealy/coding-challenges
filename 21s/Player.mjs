import * as Deck from './Deck.mjs'

export default class Player {
  name = ""
  hand = []

  constructor(someName) {
    this.name = someName
    this.hand[0] = Deck.take1()
    this.hand[1] = Deck.take1()
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  // Getter properties
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  get score() { return this.hand.reduce((s, card) => s += card.faceValue, 0) }
  get isBust() { return this.score > 21 }

  get handStr() {
    return this.hand.reduce(
      (handStr, card) => {
        handStr.push(`${card}`)
        return handStr
      }, [])
      .join(",")
  }

  get currentState() {
    let s = this.score
    return s > 21 ? "BUST" : s >= 17 ? "STICK" : "PLAY"
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  // Methods
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  showState() { console.log(`${this.name}: ${this.currentState}, Hand: ${this.handStr}, Score: ${this.score}`) }

  // The playUpTo method requires that the player has an initial hand containing only two cards
  playUpTo(target) {
    console.log(`${this.name} starts to play`)

    let idx = 2
    let thisScore = this.score

    while (thisScore < 21) {
      if (thisScore >= target) break
      else {
        this.hand[idx] = Deck.take1()
        thisScore += this.hand[idx].faceValue
        idx++
      }
    }

    this.showState()

    return thisScore
  }
}
