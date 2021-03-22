import React, { Component } from "react";
import transfer from "../api/transfer";

class Transfer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: "",
      to: "",
      amount: "",
      status: "",
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
    this.setState({
      status: "Pending...",
    });
    const { from, to, amount } = this.state;
    console.log(from, to, amount);
    await transfer(from, to, amount);
    this.setState({
      status: "TRANSACTION SUCCESS!",
    });
  };

  resetForm = () => {
    this.setState({
      from: "",
      to: "",
      amount: "",
      status: "",
    });
  };

  render() {
    return (
      <div class="box">
        <p class="subtitle">Transfer</p>
        <form onSubmit={this.submitTransaction}>
          <input
            type="text"
            class="input"
            placeholder="From: Account ID"
            value={this.state.from}
            onChange={this.changeFrom}
          />
          <input
            type="text"
            class="input"
            placeholder="Destination: Account ID"
            value={this.state.to}
            onChange={this.changeTo}
          />
          <input
            type="text"
            class="input"
            placeholder="Transaction Amount"
            value={this.state.amount}
            onChange={this.changeAmount}
          />
          <br />
          <br />
          <div class="columns">
            <input type="submit" class="button is-primary" />
            <button class="button is-danger" action={this.resetForm}>
              {" "}
              Reset{" "}
            </button>
          </div>
        </form>
        <div>{this.state.status}</div>
      </div>
    );
  }
}

export default Transfer;
