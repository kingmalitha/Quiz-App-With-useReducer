/* eslint-disable react/prop-types */

const FinishScreen = ({ points, max, highScore, dispatch }) => {
  const percentage = Math.round((points / max) * 100);

  let emoji;
  if (percentage < 50) emoji = "😭";
  else if (percentage < 75) emoji = "😐";
  else if (percentage < 100) emoji = "😊";
  else emoji = "🥳";

  return (
    <>
      <p className='result'>
        <span>{emoji}</span>You scored <strong> {points}</strong>
        out of {max} ({percentage}%)
      </p>
      <p className='highscore'> (HighScore : {highScore} points)</p>

      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
};

export default FinishScreen;
