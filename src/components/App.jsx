import React, { useState } from 'react';
import { Container } from './Statistics/Statistic.styled';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import Section from './Section';
import { Notification } from './Notification';

export const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickGood = () => {
    setGood(prevState => prevState + 1)
  }

  const handleClickNeutral = () => {
    setNeutral(prevState => prevState + 1)
  }

  const handleClickBad = () => {
    setBad(prevState => prevState + 1)
  }

 const handleLeaveFeedback = option => {
    if (option === 'good') {
      handleClickGood();
    } else if (option === 'neutral') {
      handleClickNeutral();
    } else if (option === 'bad') {
      handleClickBad();
    }
  };

  const total = good + neutral + bad;
  const positivePercentage = Math.round(total > 0 ? (good / total) * 100 : 0);
  const hasFeedback = total > 0;

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleLeaveFeedback}
          onLeaveFeedbackGood={handleClickGood}
          onLeaveFeedbackNeutral={handleClickNeutral}
          onLeaveFeedbackBad={handleClickBad}
        />
      </Section>

      <Section title="Statistics">
        {hasFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
}