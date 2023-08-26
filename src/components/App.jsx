import React, { useState } from 'react';
import { Container } from './Statistics/Statistic.styled';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import Section from './Section';
import { Notification } from './Notification';

export const App = () => {
  const [feedbackCounts, setFeedbackCounts] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setFeedbackCounts(prevCounts => ({
          ...prevCounts,
          good: prevCounts.good + 1,
        }));
        break;
      case 'neutral':
        setFeedbackCounts(prevCounts => ({
          ...prevCounts,
          neutral: prevCounts.neutral + 1,
        }));
        break;
      case 'bad':
        setFeedbackCounts(prevCounts => ({
          ...prevCounts,
          bad: prevCounts.bad + 1,
        }));
        break;
      default:
        break;
    }
  };

  const total =
    feedbackCounts.good + feedbackCounts.neutral + feedbackCounts.bad;
  const positivePercentage = Math.round(
    total > 0 ? (feedbackCounts.good / total) * 100 : 0
  );
  const hasFeedback = total > 0;

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {hasFeedback ? (
          <Statistics
            good={feedbackCounts.good}
            neutral={feedbackCounts.neutral}
            bad={feedbackCounts.bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
};
