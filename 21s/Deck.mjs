import Card from "./Card.mjs"

const suits = ["♣︎", "♥︎", "♦︎", "♠︎"]
const faces = ["2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K", "A"]

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Create a new, unshuffled deck
let deck = suits.reduce((d, suit) => {
  faces.reduce((_, face) => d.push(new Card(suit, face)), d)
  return d
}, [])

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Remove a random card from the deck and return it
export const take1 = () => {
  let idx = Math.floor(Math.random() * deck.length)
  let card = deck[idx]

  deck.splice(idx, 1)
  return card
}
