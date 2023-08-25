import { FunctionalGameBoard } from './FunctionalGameBoard';
import { FunctionalScoreBoard } from './FunctionalScoreBoard';
import { FunctionalFinalScore } from './FunctionalFinalScore';

import { useState } from 'react';
import { initialFishes } from '../../assets/initialFishes.ts';

const fishArray = initialFishes;
const remainingFish = initialFishes.map((fish) => fish.name);

export function FunctionalApp() {
  const [correctScore, setCorrectScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0);

  const handleGuess = (guess: string) => {
    const currentFish = fishArray[totalScore];

    if (guess.toLowerCase().trim() === currentFish.name.toLowerCase()) {
      setCorrectScore(correctScore + 1);
    }

    setTotalScore(totalScore + 1);

    remainingFish.splice(0, 1);
  };

  return (
    <>
      {remainingFish.length > 0 && (
        <FunctionalScoreBoard
          remainingFish={remainingFish}
          totalScore={totalScore}
          correctScore={correctScore}
        />
      )}
      {remainingFish.length > 0 && (
        <FunctionalGameBoard handleGuess={handleGuess} fishArray={fishArray} />
      )}

      {remainingFish.length < 1 && (
        <FunctionalFinalScore
          totalScore={totalScore}
          correctScore={correctScore}
        />
      )}
    </>
  );
}
