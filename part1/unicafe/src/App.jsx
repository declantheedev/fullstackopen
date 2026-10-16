import Button from './Button'
import { useState } from 'react'
import Statistics from './Statistics'


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  let sum = good + neutral + bad;

  return (
    <div>
      <h1>Give Us Feedback</h1>
      <div>
        <Button title={"good"} onClick={() => setGood(good + 1)} />
        <Button title={"neutral"} onClick={() => setNeutral(neutral + 1)} />
        <Button title={"bad"} onClick={() => setBad(bad + 1)} />

      </div>
      <div>
        <h1>Statistics</h1>
        {/* <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {good + neutral + bad}</p>
        <p>Average: {sum / 3}</p> */}
        <Statistics name={"Good"} value={good} />
        <Statistics name={"Bad"} value={bad} />
        <Statistics name={"Neutral"} value={neutral} />
        <Statistics name={"Average"} value={(sum / 3)} />
      </div>
    </div>
  )
}

export default App