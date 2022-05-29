import { memo } from 'react';
import PropTypes from 'prop-types';

import s from './feedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  const elements = options.map(option => (
    <button
      key={option}
      type="button"
      className={s.btn}
      onClick={() => onLeaveFeedback(option)}
    >
      {option}
    </button>
  ));
  return <div className={s.btnBox}>{elements}</div>;
}

FeedbackOptions.defaultProps = {
  options: [],
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default memo(FeedbackOptions);
