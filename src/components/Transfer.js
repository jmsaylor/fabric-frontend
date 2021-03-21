import React, { Component } from "react";
import transfer from "../api/transfer";

class Transfer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: " ",
      to: " ",
      amount: 0,
    };

    this.changeFrom = this.changeFrom.bind(this);
    this.changeTo = this.changeTo.bind(this);
    this.changeAmount = this.changeAmount.bind(this);
    this.submitTransaction = this.submitTransaction.bind(this);
  }

  changeFrom = (event) => {
    this.setState({
      from: event.target.value,
    });
  };

  changeTo = (event) => {
    this.setState({
      to: event.target.value,
    });
  };

  changeAmount = (event) => {
    this.setState({
      amount: event.target.value,
    });
  };

  submitTransaction = async (event) => {
    event.preventDefault();
    console.log("submitting transaction");
    const { from, to, amount } = this.state;
    console.log(from, to, amount);
    await transfer(from, to, amount);
  };

  render() {
    return (
      <div>
        Transfer
        <form onSubmit={this.submitTransaction}>
          <input type="text" onChange={this.changeFrom} />
          <input type="text" onChange={this.changeTo} />
          <input type="text" onChange={this.changeAmount} />
          <br />
          <input type="submit" />
        </form>
        <div>{this.state.from}</div>
        <div>{this.state.to}</div>
        <div>{this.state.amount}</div>
      </div>
    );
  }
}

export default Transfer;
