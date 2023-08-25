import { ChangeEvent, Component, FormEvent } from 'react';
import './styles/game-board.css';

type Fish = {
  name: string;
  url: string;
};
type GameBoardProps = {
  handleGuess: (param: string) => void;
  fishArray: Fish[];
};

export class ClassGameBoard extends Component<GameBoardProps> {
  state = {
    guess: '',
    currentFishIndex: 0,
  };
  handleGuessChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ guess: e.target.value });
  };

  handleGuessSubmit = (e: FormEvent) => {
    e.preventDefault();
    this.props.handleGuess(this.state.guess);

    this.setState({ currentFishIndex: this.state.currentFishIndex + 1 });
    this.setState({ guess: '' });
  };
  render() {
    const { fishArray } = this.props;
    const currentFish = fishArray[this.state.currentFishIndex];

    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={currentFish.url} alt={currentFish.name} />
        </div>
        <form id="fish-guess-form" onSubmit={this.handleGuessSubmit}>
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            type="text"
            name="fish-guess"
            value={this.state.guess}
            onChange={this.handleGuessChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
