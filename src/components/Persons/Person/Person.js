import React, { Component } from "react";
import "./Person.css";
import Aux from "../../../hoc/Auxiliary";
import Radium from 'radium';

class Person extends Component {
  render() {
    return (
      <Aux>
        <p onClick={this.props.click}>
          I am {this.props.name} and I am {this.props.age} years old
        </p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

export default Radium(Person);
