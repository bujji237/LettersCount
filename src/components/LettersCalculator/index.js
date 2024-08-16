import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onKeyDownTriggered = event => {
    if (event.key === 'Enter') {
      const text = event.target.value
      this.setState({
        count: text.length,
      })
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="letters-calculator-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label>
            Enter the phrase
            <input
              type="text"
              className="input-phrase"
              placeholder="Enter the phrase"
              onKeyDown={this.onKeyDownTriggered}
              id="inputEl"
            />
          </label>
          <p className="letters-count-container">No.of letters: {count}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="image"
        />
      </div>
    )
  }
}

export default LettersCalculator
