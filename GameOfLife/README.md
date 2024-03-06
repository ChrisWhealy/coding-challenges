# Conway's Game of Life

Full details of how it this game works can be found in the [Wikipedia article](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)

## Outline of Requirements

The next state of the board is determined by examining its current state and applying the following rules:

1. A dead cell comes alive if it has exactly 3 living neighbours
2. A living cell remains alive if it has exactly 2 or 3 living neighbours
3. A living cell dies from loneliness if it has less than 2 living neighbours
4. A living cell dies from over-crowding if it has more than 3 living neighbours
5. The board must wrap

## Implementation

The game board is written to the console.

It shows a glider that moves diagonally down the screen, and a light-weight glider that moves from left to right across the screen.

## Execution

```shell
$ node game-of-life.js
```

This game will run continually until you press `Ctrl-c`
