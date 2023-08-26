import { FunctionalGameBoard } from './FunctionalGameBoard';
import { FunctionalScoreBoard } from './FunctionalScoreBoard';
import { FunctionalFinalScore } from './FunctionalFinalScore';

import { useState } from 'react';
import { initialFishes } from '../../assets/initialFishes.ts';

export function FunctionalApp() {
  const [correctScore, setCorrectScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0);

  const fishNames = initialFishes.slice(totalScore).map((fish) => fish.name);

  const gameOver = fishNames.length < 1 ? true : false;

  const handleGuess = (guess: string) => {
    const currentFish = initialFishes[totalScore];

    if (guess.toLowerCase().trim() === currentFish.name.toLowerCase()) {
      setCorrectScore(correctScore + 1);
    }

    setTotalScore(totalScore + 1);
  };

  return (
    <>
      {!gameOver && (
        <FunctionalScoreBoard
          remainingFish={fishNames}
          totalScore={totalScore}
          correctScore={correctScore}
        />
      )}
      {!gameOver && (
        <FunctionalGameBoard
          handleGuess={handleGuess}
          fishArray={initialFishes}
        />
      )}

      {gameOver && (
        <FunctionalFinalScore
          totalScore={totalScore}
          correctScore={correctScore}
        />
      )}
    </>
  );
}
