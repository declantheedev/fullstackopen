import StatisticLine from "./StatisticLine";
const Statistics = ({ good, bad, neutral }) => {
    let sum = good + bad + neutral;
    return (
        sum === 0 ? <p>No feedback given</p> :
            <div>

                <table>
                    <tbody>
                        <StatisticLine name={"Good"} value={good} />
                        <StatisticLine name={"Neutral"} value={neutral} />
                        <StatisticLine name={"Bad"} value={bad} />
                        <StatisticLine name={"Total"} value={sum} />
                        <StatisticLine name={"Average"} value={(good - bad) / sum} />
                        <StatisticLine name={"Percenatge of Postive Feedback"} value={(good / sum) * 100 + "%"} />
                    </tbody>
                </table>

            </div>
    )
}

export default Statistics;