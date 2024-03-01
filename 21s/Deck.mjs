import Card from "./Card.mjs"

const suits = ["♣︎", "♥︎", "♦︎", "♠︎"]
const faces = ["2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K", "A"]

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Create a new, unshuffled deck
let deck = suits.reduce((deck, suit) => {
  faces.reduce((_, face) => deck.push(new Card(suit, face)), deck)
  return deck
}, [])

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Remove a random card from the deck and return it
export const take1 = () => {
  let idx = Math.floor(Math.random() * deck.length)
  let card = deck[idx]

  deck.splice(idx, 1)
  return card
}
