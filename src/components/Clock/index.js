import {Component} from 'react'
import './index.css'

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()}
    console.log('constructor first calls')
  }

  componentDidMount() {
    console.log('component did mount calling')
    this.timerId = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    console.log('component will unmount calling')
    clearInterval(this.timerId)
  }

  tick = () => {
    console.log('tick will trigger')
    this.setState({date: new Date()})
  }

  render() {
    const {date} = this.state
    console.log('render calling', date)
    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className="time">{date.toLocaleTimeString()}</p>
      </div>
    )
  }
}
export default Clock
