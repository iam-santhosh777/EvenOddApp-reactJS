// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: null}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const randomNum = this.getRandomNumber()
    this.setState(prevState => ({
      count: prevState.count + randomNum,
    }))
  }

  render() {
    const {count} = this.state
    const result = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="container">
        <div className="card">
          <h1>Count {count}</h1>
          <h2>Count is {result}</h2>
          <button type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p>*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
