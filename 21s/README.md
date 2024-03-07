# Black Jack

## Model the game
* Create a single deck of playing cards
* The game is played between two players (called Sam and the Dealer)
* Each player is given two cards from the top of a shuffled deck of cards

## Rules to Implement

* Sam and the dealer are both dealt an initial hand of 2 cards
* If either (or both) of them holds 21, the winner(s) is/are immediately declared
* Sam plays first and keeps drawing cards until his total reaches at least 17
* If Sam's total exceeds 21, he is bust and the dealer now starts to play
* If Sam's total is between 17 and 21 inclusive, then he sticks and the dealer starts to play
* The Dealer only needs to draw a card if his initial total is less than 17
* The Dealer keeps drawing until either he goes bust or his total exceeds Sam's
* The winner is then declared, bearing in mind that there could be zero, one or two winners

## Execution

```shell
$ node index.mjs
```

Cards are then dealt randomly, and play could look like this

```shell
Sam: PLAY, Hand: 3♣︎,J♥︎, Score: 13
Dealer: PLAY, Hand: 6♦︎,6♣︎, Score: 12
Sam starts to play
Sam: STICK, Hand: 3♣︎,J♥︎,7♥︎, Score: 20
Dealer starts to play
Dealer: BUST, Hand: 6♦︎,6♣︎,J♦︎, Score: 22

WINNER: Sam
```

or this...

```shell
Sam: STICK, Hand: 9♣︎,9♦︎, Score: 18
Dealer: PLAY, Hand: 8♠︎,7♣︎, Score: 15
Dealer starts to play
Dealer: STICK, Hand: 8♠︎,7♣︎,4♣︎, Score: 19

WINNER: Dealer
```
