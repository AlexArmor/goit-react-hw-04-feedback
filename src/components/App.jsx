import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Section } from './Section';
import { Notification } from './Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = buttonName => {
    switch (buttonName) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = totalSum => {
    return Math.ceil((good / totalSum) * 100);
  };

  const options = Object.keys({ good, neutral, bad });
  const totalSum = countTotalFeedback(good, neutral, bad);
  const positivePercenteg = countPositiveFeedbackPercentage(totalSum);
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {totalSum ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalSum}
            positivePercentage={positivePercenteg}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
