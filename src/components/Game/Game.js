import React from 'react';

import { WORDS } from '../../data';
import { sample } from '../../utils';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(tentativeGuess){
    const nextGuess = { id: Math.random(), value: tentativeGuess };
    const nextGuessResults = [...guesses, nextGuess];
    setGuesses(nextGuessResults);
  }

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
