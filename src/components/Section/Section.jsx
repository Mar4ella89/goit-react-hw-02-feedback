import { Component } from 'react';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';

import PropTypes from 'prop-types';

class Section extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  // static PropTypes = {};

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  handleIncrementGood = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };

  handleIncrementNeutral = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };

  handleIncrementBad = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
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
      <div>
        <h2>Please leave feedback</h2>

        <FeedbackOptions
          onIncrementGood={this.handleIncrementGood}
          onIncrementNeutral={this.handleIncrementNeutral}
          onIncrementBad={this.handleIncrementBad}
        />

        <h2>Statistics</h2>
        <ul>
          <li>
            <span>Good:</span>
            <span>{this.state.good}</span>
          </li>
          <li>
            <span>Neutral:</span>
            <span>{this.state.neutral}</span>
          </li>
          <li>
            <span>Bad:</span>
            <span>{this.state.bad}</span>
          </li>
          <li>
            <span>Total:</span>
            <span>{totalVoits}</span>
          </li>
          <li>
            <span>Positive feedback:</span>
            <span>{percentPositiveFeedback}%</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Section;

{
  /* <div>
      <h2>Please leave feedback</h2>
      <button>Good</button>
      <button>Neutral</button>
      <button>Bad</button>

      <h2>Statistics</h2>
      <ul>
        <li>
          <span>Good</span>
          <span>0</span>
        </li>
        <li>
          <span>Neutral</span>
          <span>0</span>
        </li>
        <li>
          <span>Bad</span>
          <span>0</span>
        </li>
        <li>
          <span>Total</span>
          <span>0</span>
        </li>
        <li>
          <span>Positive feedback</span>
          <span>0%</span>
        </li>
      </ul>
    </div> */
}
