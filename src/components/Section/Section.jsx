import { Component } from 'react';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';

import PropTypes from 'prop-types';

class Section extends Component {
    state = {
            good: 0,
            neutral: 0,
            bad: 0
        }
    



    handleIncrement = () => {
        this.setState({good: good + 1})
    }

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>

        <div>
          <button type="button" onClick={this.handleIncrement}>Good</button>
          <button type="button">Neutral</button>
          <button type="button">Bad</button>
        </div>

        {/* <FeedbackOptions /> */}

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
            <span>0</span>
          </li>
          <li>
            <span>Positive feedback:</span>
            <span>0%</span>
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
