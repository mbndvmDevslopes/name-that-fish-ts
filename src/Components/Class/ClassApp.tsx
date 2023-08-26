import { Component } from 'react';
import { ClassScoreBoard } from './ClassScoreBoard';
import { ClassGameBoard } from './ClassGameBoard';
import { ClassFinalScore } from './ClassFinalScore';
import { initialFishes } from '../../assets/initialFishes.ts';

type ClassAppState = {
  totalCount: number;
  correctCount: number;
};

export class ClassApp extends Component<Record<string, never>, ClassAppState> {
  state: ClassAppState = {
    totalCount: 0,
    correctCount: 0,
  };

  fishNames = initialFishes.map((fish) => fish.name);

  gameOver = false;

  handleGuess = (guess: string) => {
    const currentFish = initialFishes[this.state.totalCount];

    if (guess.toLowerCase().trim() === currentFish.name.toLowerCase()) {
      this.setState({ correctCount: this.state.correctCount + 1 });
      this.setState({ totalCount: this.state.totalCount + 1 });
    } else {
      this.setState({ totalCount: this.state.totalCount + 1 });
    }

    this.gameOver = this.state.totalCount === 3 ? true : false;
  };

  render() {
    return (
      <>
        <>
          {!this.gameOver && (
            <ClassScoreBoard
              totalCount={this.state.totalCount}
              correctCount={this.state.correctCount}
              fish={this.fishNames}
            />
          )}
          {!this.gameOver && (
            <ClassGameBoard
              handleGuess={this.handleGuess}
              fishArray={initialFishes}
            />
          )}
        </>
        {this.gameOver && (
          <ClassFinalScore
            totalCount={this.state.totalCount}
            correctCount={this.state.correctCount}
          />
        )}
      </>
    );
  }
}
