import { useState } from 'react';

import Statistic from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';
import Notification from 'components/Notification';

const options = ['good', 'neutral', 'bad'];

function Feedback() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleClick = item => {
    setState(prevState => ({
      ...prevState,
      [item]: prevState[item] + 1,
    }));
  };

  const items = Object.values(state);
  const total = items.reduce((item, acc) => (acc += item), 0);

  const goodFeedback = state.good;
  const positiveFeedback = Math.ceil((goodFeedback / total) * 100);

  const { good, neutral, bad } = state;
  return (
    <>
      <Section title={'Please Live Feedback'}>
        <FeedbackOptions options={options} onLeaveFeedback={handleClick} />
      </Section>

      <Section title={'Statistics'}>
        {total ? (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positiveFeedback}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </>
  );
}

export default Feedback;
