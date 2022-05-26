import { Component } from 'react';

import Statistic from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';
import Notification from 'components/Notification';

const options = ['good', 'neutral', 'bad'];

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = item => {
    this.setState(prevState => ({
      [item]: prevState[item] + 1,
    }));
  };

  countTotalFeedback() {
    const items = Object.values(this.state);
    const total = items.reduce((item, acc) => (acc += item), 0);
    return total;
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    const goodFeedback = this.state.good;
    return Math.ceil((goodFeedback / total) * 100);
  }

  render() {
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();
    const positivePercentage = percentage ? percentage : 0;
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title={'Please Live Feedback'}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleClick}
          />
        </Section>

        <Section title={'Statistics'}>
          {total ? (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </Section>
      </>
    );
  }
}

export default Feedback;
