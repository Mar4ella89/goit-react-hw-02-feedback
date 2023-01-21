export const App = () => {
  return (
    <div>
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
    </div>
  );
};
