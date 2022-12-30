// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {time: 0}

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  startTime = () => {
    this.timerId = setInterval(() => {
      this.setState(prevState => ({time: prevState.time + 1}))
    }, 1000)
  }

  stopTime = () => {
    clearInterval(this.timerId)

    this.setState(prevState => ({time: prevState.time}))
  }

  resetTime = () => {
    clearInterval(this.timerId)

    this.setState({time: 0})
  }

  renderSeconds = () => {
    const {time} = this.state
    const seconds = Math.floor(time % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {time} = this.state
    const minutes = Math.floor(time / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const time1 = `${this.renderMinutes()}:${this.renderSeconds()}`
    return (
      <div className="bg-container">
        <div>
          <h1 className="heading">Stopwatch</h1>
          <div className="container">
            <div className="card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="image"
              />
              <p className="paragraph">Timer</p>
            </div>
            <h1 className="heading">{time1}</h1>
            <div>
              <button type="button" className="button" onClick={this.startTime}>
                Start
              </button>
              <button type="button" className="button1" onClick={this.stopTime}>
                Stop
              </button>
              <button
                type="button"
                className="button2"
                onClick={this.resetTime}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
