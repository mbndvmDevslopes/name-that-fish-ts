
import './styles/game-board.css';
import { useState } from 'react';


type Fish = {
  name: string;
  url: string;
}
type GameBoardProps= {
  handleGuess: (param: string) => void;
  fishArray:Fish[];
}



const  FunctionalGameBoard: React.FC<GameBoardProps>=({ handleGuess, fishArray }) => {
  const [guess, setGuess] = useState('');
  const [currentFishIndex, setCurrentFishIndex] = useState(0);

  const currentFish = fishArray[currentFishIndex];

  const handleGuessChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setGuess(e.target.value);
  };

  const handleGuessSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    handleGuess(guess);

    setCurrentFishIndex(currentFishIndex + 1);

    setGuess('');
  };

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={currentFish?.url} alt={currentFish?.name} />
      </div>
      <form id="fish-guess-form" onSubmit={handleGuessSubmit}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          value={guess}
          name="fish-guess"
          onChange={handleGuessChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export {FunctionalGameBoard}