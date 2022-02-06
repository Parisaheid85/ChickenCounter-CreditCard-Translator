import { Component } from "react";
import "./ChickenCounter.css";

class ChickenCounter extends Component {
  constructor() {
    super();
    this.state = { counter: 0 };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  decrement() {
    this.setState({
      counter: this.state.counter - 1,
    });
  }

  reset() {
    this.setState({
      counter: 0,
    });
  }

  render() {
    const isDisabled = this.state.counter === 0;
    return (
      <div className="box">
        <h1>Chicken Counter</h1>
        <button className="inc" onClick={this.increment}>
          +
        </button>
        code <div className=""></div>
        <span>{this.state.counter}</span>
        <button className="dec" onClick={this.decrement} disabled={isDisabled}>
          -
        </button>
        <button className="reset" onClick={this.reset}>
          Reset
        </button>
      </div>
    );
  }
}
export default ChickenCounter;
