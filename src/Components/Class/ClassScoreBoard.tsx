import { Component } from 'react';
import './styles/score-board.css';

type ScoreBoardProps = {
  remainingFish: string[];
  correctCount: number;
  totalCount: number;
};

class ClassScoreBoard extends Component<ScoreBoardProps> {
  render() {
    const incorrectCount = this.props.totalCount - this.props.correctCount;

    return (
      <div id="score-board">
        <div>Incorrect 🔻: {incorrectCount}</div>
        <div id="choices-left">
          {this.props.remainingFish.map((answer) => (
            <div key={answer} className="choice">
              {answer}
            </div>
          ))}
        </div>
        <div>Correct ✅: {this.props.correctCount}</div>
      </div>
    );
  }
}

export { ClassScoreBoard };
