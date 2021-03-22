import React, { Component } from "react";
import queryMember from "../api/queryId";

class Value extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      mostRecentSearchId: "",
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
    const { id } = this.state;
    this.setState({
      id: "",
      mostRecentSearchId: this.state.id,
      value: "loading...",
    });
    console.log("submitting");
    const amount = await queryMember(id);
    this.setState({
      value: amount,
    });
  };

  render() {
    return (
      <div class="box">
        <p class="subtitle">Get Value By Id</p>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            class="input"
            placeholder="Accound ID"
            value={this.state.id}
            onChange={this.inputHandler}
          />
          <input type="submit" class="button is-primary" />
        </form>
        <div class="columns">
          <div class="column is-1">Account ID: </div>
          <div class="column is-2">{this.state.mostRecentSearchId}</div>
          <div class="column is-1">Balance: </div>
          <div class="column is-2">{this.state.value}</div>
        </div>
      </div>
    );
  }
}

export default Value;
