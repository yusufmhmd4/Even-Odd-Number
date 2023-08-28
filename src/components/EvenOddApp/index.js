import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, isEvenOdd: 'Even'}

  getRandomNumber = () => {
    const number = Math.ceil(Math.random() * 100)
    const evenOdd = number % 2 === 0 ? 'Even' : 'Odd'
    this.setState({count: number, isEvenOdd: evenOdd})
    console.log(number)
  }

  render() {
    const {count, isEvenOdd} = this.state
    return (
      <div className="app-container">
        <div className="container">
          <h1 className="count">Count {count}</h1>
          <p className="even-odd">Count is {isEvenOdd}</p>
          <button
            className="increament"
            type="button"
            onClick={this.getRandomNumber}
          >
            Increment
          </button>
          <p className="tip">*Increase By Random Number Between 0 To 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
