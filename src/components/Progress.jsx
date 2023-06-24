/* eslint-disable react/prop-types */

const Progress = ({ index, numQuestions, points, max, answer }) => {
  return (
    <header className='progress'>
      <progress
        value={index + Number(answer !== null)}
        max={numQuestions}
      ></progress>

      <p>
        Question <strong>{index + 1}</strong> /{numQuestions}
      </p>

      <p>
        <strong>{points}</strong> /{max} points
      </p>
    </header>
  );
};

export default Progress;
