/* eslint-disable react/prop-types */
const Options = ({ options }) => {
  return (
    <div className='options'>
      {options.map((option, index) => (
        <button key={index} className='btn btn-option'>
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;
