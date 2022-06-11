import { useState, useEffect } from 'react';
import FeedbackOptions from '../FeedbackOptions';
import Statistics from '../Statistics';
import Section from '../Section';
import s from './App.module.css';

function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [netural, setNetural] = useState(0);

  useEffect(() => {}, []);

  const onLeaveFeedback = name => {
    switch (name) {
      case 'good':
        setGood(p => p + 1);
        break;

      case 'bad':
        setBad(p => p + 1);
        break;

      case 'netural':
        setNetural(p => p + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + bad + netural;
  };

  const PositiveFeedbackPercentage = () => {
    const count = countTotalFeedback();
    const countPositiv = Math.round((100 / count) * good);
    return countPositiv;
  };

  const options = { good, netural, bad };

  const total = countTotalFeedback();
  const percent = PositiveFeedbackPercentage();
  return (
    <div className={s.app}>
      <Section title="Plese leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>

      <Section title="Statistics">
        <Statistics
          names={options}
          total="Total"
          feedback="Positive Feedback"
          countTotalFeedback={total}
          countPositiveFeedbackPercentage={percent}
        />
      </Section>
    </div>
  );
}

export default App;
