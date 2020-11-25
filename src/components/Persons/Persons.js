import React, { Component } from "react";
import Person from "./Person/Person";
//if just one line, can use () instead of {}
//to return
class Persons extends Component {
  static getDerivedStateFromProps(props, state) {
    console.log("Persons.js, getDerivedStateFromProps");
    return state;
  }

  shouldComponentUpdate(nextProps, nextState) {
    //should use conditionss here
    console.log("Persons.js, shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Persons.js, getSnapshotBeforeUpdate");
    return {message: 'snapshot!'};
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log("Persons.js, componentDidUpdate");
    console.log(snapshot);
  }

  render() {
    console.log("Persons.js, rendering...");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          name={person.name}
          age={person.age}
          click={() => this.props.clicked(index)}
          key={person.id}
          changed={(event) => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;