import { useState } from 'react'

// let next = 0
const App = () => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({})
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const handleClick = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }


  const handleVotes = () => {
    const copy = { ...votes }
    copy[selected] = (copy[selected] || 0) + 1;
    setVotes(copy)
  }

  let winningindex = 0;
  let highestVote = 0;

  for (const key in votes) {
    if (votes[key] > highestVote) {
      highestVote = votes[key];
      winningindex = key

    }
  }

  return (
    <div>
      <div>
        {anecdotes[selected]} <br />
        has {votes[selected] || 0} votes <br />
        <button onClick={handleClick}>next anecdote</button>
        <button onClick={handleVotes}>vote</button>
      </div>

      <div>
        <h1>Anecdote with most votes:</h1>
        <p>{anecdotes[winningindex] + `With ${highestVote} votes`}</p>
      </div>
    </div>
  )
}

export default App