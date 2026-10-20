# Rock Paper Scissors

A simple browser-based Rock Paper Scissors game. Choose a move to play against the computer and keep track of your wins, losses, and ties.

## Play the game

Open `index.html` in a web browser. No installation or build step is required.

## How to play

1. Select Rock, Paper, or Scissors using the matching button.
2. The computer picks a move at random.
3. The result and both moves are displayed, and the score is updated.
4. Select **Reset Score** to clear the saved score.

The score is saved in the browser's `localStorage`, so it remains available when you return using the same browser. Resetting the score clears the saved score.

## Project files

```text
rock-paper-scissors/
├── index.html       # Game page and move buttons
├── styles.css       # Layout and visual styles
├── game.js          # Game logic and saved score
├── images/          # Rock, paper, and scissors images
└── README.md        # Project information
```

The page loads the Asap Sharp font from Google Fonts, so an internet connection is needed to use that font. The game itself runs locally in the browser.
