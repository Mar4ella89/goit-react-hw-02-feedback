import { Component } from 'react';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import css from './Section.module.css';

class Section extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
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
      <div className={css.section}>
        <h2>Please leave feedback</h2>

        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          handleIncrement={this.handleIncrement}
        />

        <h2>Statistics</h2>

        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          voits={totalVoits}
          percent={percentPositiveFeedback}
        />
      </div>
    );
  }
}

export default Section;
