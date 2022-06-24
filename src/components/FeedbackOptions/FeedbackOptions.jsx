import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const allOptions = Object.entries(options);
  return (
    <div className={s.buttonsList}>
      {allOptions.map(([name, value]) => {
        return (
          <button
            key={name}
            className={s.btn}
            onClick={() => onLeaveFeedback(name)}
          >
            {name}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propType = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
