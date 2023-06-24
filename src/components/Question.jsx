import Options from "./Options";

/* eslint-disable react/prop-types */
const Question = ({ question }) => {
  return (
    <div>
      <h4>{question.question}</h4>

      <Options options={question.options} />
    </div>
  );
};

export default Question;
