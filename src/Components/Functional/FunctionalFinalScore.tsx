
import './styles/final-score.css';

type FinalScoreProps = {
 correctScore: number;
 totalScore: number;
}

export const FunctionalFinalScore:React.FC<FinalScoreProps> = ({ correctScore, totalScore }) => (
  <div id="final-score">
    <h1>Your Final Score Was</h1>
    <div id="score">
      <p>{correctScore}</p>
      <hr />
      <p>{totalScore}</p>
    </div>
  </div>
);
