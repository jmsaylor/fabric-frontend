import React, { Component } from "react";
import queryMember from "../api/queryId";

class Value extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "a",
      value: 0,
    };

    this.inputHandler = this.inputHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  inputHandler = (event) => {
    this.setState({
      id: event.target.value,
    });
  };

  submitHandler = async (event) => {
    event.preventDefault();
    console.log("submitting");
    const amount = await queryMember(this.state.id);
    this.setState({
      value: amount,
    });
  };

  render() {
    return (
      <div>
        Get Value By Id
        <form onSubmit={this.submitHandler}>
          <input type="text" onChange={this.inputHandler} />
          <input type="submit" />
        </form>
        <div>{this.state.id}</div>
        <div>{this.state.value}</div>
      </div>
    );
  }
}

export default Value;
