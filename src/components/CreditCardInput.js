import { Component } from "react";

class CreditCardInput extends Component {
  constructor() {
    super();
    this.state = { creditcard: "" };
    this.handleCardNumber = this.handleCardNumber.bind(this);
  }

  handleCardNumber(e) {
    this.setState({ creditcard: e.target.value });
    if (e.target.value.startsWith("34") || e.target.value.startsWith("37")) {
      this.setState({
        creditcard: "AMEX",
      });
    } else if (e.target.value.startsWith("6011")) {
      this.setState({
        creditcard: "Discover",
      });
    } else if (
      e.target.value.startsWith("51") ||
      e.target.value.startsWith("52") ||
      e.target.value.startsWith("53") ||
      e.target.value.startsWith("54") ||
      e.target.value.startsWith("55")
    ) {
      this.setState({
        creditcard: "MasterCard",
      });
    } else if (e.target.value.startsWith("4")) {
      this.setState({
        creditcard: "Visa",
      });
    }
  }

  render() {
    return (
      <div className="creditcard">
        <input
          type="number"
          onChange={this.handleCardNumber}
          placeholder="Credit card number"
        />
        <p>{this.state.creditcard}</p>
      </div>
    );
  }
}
export default CreditCardInput;
