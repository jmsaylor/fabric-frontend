import React, { Component } from "react";
import queryMember from "../api/queryId";

class Value extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  async componentDidMount() {
    let amount = 0;
    try {
      amount = await queryMember("a");
    } catch (error) {
      console.error(error);
    }

    this.setState({
      value: amount,
    });
    console.log("TEST TEST TEST");
  }

  render() {
    return <div>{this.state.value}</div>;
  }
}

export default Value;
