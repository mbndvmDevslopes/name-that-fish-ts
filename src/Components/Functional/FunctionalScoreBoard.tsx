import React from 'react';
import './styles/score-board.css';

type ScoreBoardProps = {
  remainingFish: string[];
  totalScore: number;
  correctScore: number;
};

const FunctionalScoreBoard: React.FC<ScoreBoardProps> = ({
  remainingFish,
  totalScore,
  correctScore,
}) => {
  const incorrectCount = totalScore - correctScore;

  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectCount}</div>
      <div id="choices-left">
        {remainingFish.map((answer) => (
          <div key={answer} className="choice">
            {answer}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correctScore}</div>
    </div>
  );
};

export { FunctionalScoreBoard };
