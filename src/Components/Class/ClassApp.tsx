import { Component } from 'react';
import { ClassScoreBoard } from './ClassScoreBoard';
import { ClassGameBoard } from './ClassGameBoard';
import { ClassFinalScore } from './ClassFinalScore';
import { initialFishes } from '../../assets/initialFishes.ts';

type ClassAppState = {
  totalCount: number;
  correctCount: number;
};

const remainingFish: string[] = initialFishes.map((fish) => fish.name);

export class ClassApp extends Component<ClassAppState> {
  state: ClassAppState = {
    totalCount: 0,
    correctCount: 0,
  };

  handleGuess = (guess: string) => {
    const currentFish = initialFishes[this.state.totalCount];

    if (guess.toLowerCase().trim() === currentFish.name.toLowerCase()) {
      this.setState({ correctCount: this.state.correctCount + 1 });
    }
    this.setState({ totalCount: this.state.totalCount + 1 });

    remainingFish.splice(0, 1);
  };
  render() {
    return (
      <>
        <>
          {remainingFish.length > 0 && (
            <ClassScoreBoard
              totalCount={this.state.totalCount}
              correctCount={this.state.correctCount}
              remainingFish={remainingFish}
            />
          )}
          {remainingFish.length > 0 && (
            <ClassGameBoard
              handleGuess={this.handleGuess}
              fishArray={initialFishes}
            />
          )}
        </>
        {remainingFish.length < 1 && (
          <ClassFinalScore
            totalCount={this.state.totalCount}
            correctCount={this.state.correctCount}
          />
        )}
      </>
    );
  }
}
