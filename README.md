# hangman

## Purpose

To develop a dockerized, Springboot based web application.

Basically, experimentation of different technologies, and testing GitHub's project management tools.

## Design

The overall design of hangman is 2 parts. The UI and the REST service. The REST service is designed to return the game in GameStates to prevent cheating.

## REST Service
The REST service provides the following calls:

### GET /getGames

Returns an array of game states

### GET /getGame/{id}

Returns the game state for a specific game id

### POST /newGame/{word to guess}

Creates a new game in the database using "word to guess" as the game's puzzle, and returns the new game's game states

### PUT /guessLetter/{id}/{letter}

Accepts the game id, and the letter to guess. If letter is passed as more than one character, the application will attempt to validate if this is the full answer. Returns the game state after guessing the letter or word.
