import { Component } from "react";

class Translator extends Component {
  constructor() {
    super();
    this.state = { content: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ content: e.target.value });
    if (e.target.value.includes("fruit")) {
      this.setState({
        content: e.target.value.replaceAll("fruit", "🍇 🍊 🍎 🍒"),
      });
    }
  }
  render() {
    return (
      <div className="box">
        <input type="text" onChange={this.handleChange} />
        <p>{this.state.content}</p>
      </div>
    );
  }
}

export default Translator;
