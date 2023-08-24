import React, { Component } from 'react';
import { Container } from './Statistics/Statistic.styled';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import Section from './Section';
import { Notification } from './Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  handleClickNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  handleClickBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const allFeedback = good + neutral + bad;
    return allFeedback;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const positiveFeedback = good;
    const totalFeedback = good + neutral + bad;

    if (totalFeedback === 0) {
      return 0;
    }

    const positivePercentage = (positiveFeedback / totalFeedback) * 100;
    return Math.round(positivePercentage);
  };

  handleLeaveFeedback = option => {
    if (option === 'good') {
      this.handleClickGood();
    } else if (option === 'neutral') {
      this.handleClickNeutral();
    } else if (option === 'bad') {
      this.handleClickBad();
    }
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const hasFeedback = good + neutral + bad > 0;

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleLeaveFeedback}
            onLeaveFeedbackGood={this.handleClickGood}
            onLeaveFeedbackNeutral={this.handleClickNeutral}
            onLeaveFeedbackBad={this.handleClickBad}
          />
        </Section>

        {/* блок статистики */}
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
}
