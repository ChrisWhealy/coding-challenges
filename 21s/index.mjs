import Player from "./Player.mjs"

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
const displayWinner = (player1, player2) => {
  let winner = ""

  if (player1.isBust) winner = player2.isBust ? "Both players went bust!" : player2.name
  else {
    if (player2.isBust) winner = player1.name
    else if (player1.score === player2.score) winner = "Its a tie!"
    else winner = player1.score > player2.score ? player1.name : player2.name
  }

  console.log(`\nWINNER: ${winner}`)
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Let's play black jack
const blackjack = () => {
  let player1 = new Player("Sam")
  let player2 = new Player("Dealer")

  player1.showState()
  player2.showState()

  // Do we have an immediate winner?
  if (player1.score === 21) {
    console.log(`\n${player2.score === 21 ? "Both players win" : `${player1.name} wins`} immediately with Black Jack`)
  } else if (player2.score === 21) {
    console.log(`\n${player2.name} wins immediately with Black Jack!`)
  } else {
    // Both players are < 21, but player 1 only needs to play if their score is < 17
    if (player1.score < 17) player1.playUpTo(17)

    // At this point player 1's score will be at least 17 (possibly bust)
    // Player 2 only needs to play if their initial hand scores < 17
    if (player2.score < 17) {
      // If player 1 is already bust, then player 2 only needs to play up to 17
      // However if player 1 has stuck, then player 2 needs to play up to at least player 1's score
      player2.playUpTo(player1.score > 21 ? 17 : player1.score)
    }
  }

  displayWinner(player1, player2)
}

blackjack()
