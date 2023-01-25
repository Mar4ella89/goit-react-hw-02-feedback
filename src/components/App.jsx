import { Component } from 'react';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';

import css from './App.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = feedbackName => {
    this.setState(prevState => {
      return { [feedbackName]: prevState[feedbackName] + 1 };
    });
  };

  countTotalFeedback = () => {
    const voits = this.state;
    const values = Object.values(voits);
    return values.reduce((sum, prev) => prev + sum, 0);
  };

  countPositiveFeedbackPercentage = total => {
    const goodFeedback = this.state.good;
    if (total === 0) return 0;
    return Math.round((goodFeedback / total) * 100);
  };

  render() {
    const totalVoits = this.countTotalFeedback();
    const percentPositiveFeedback =
      this.countPositiveFeedbackPercentage(totalVoits);

    return (
      <>
        <div className={css.container}>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={Object.keys(this.state)}
              handleIncrement={this.handleIncrement}
            />
          </Section>
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              voits={totalVoits}
              percent={percentPositiveFeedback}
            />
          </Section>
        </div>
      </>
    );
  }
}

export default App;
