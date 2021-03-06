import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Person2 from "../components/Persons/Person/Person2";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Radium from 'radium';

class App extends Component { 
  constructor(props) {
    super(props);
    console.log('App.js constructor')
  }

  state = {
    persons: [
      { id: "1", name: "james", age: 28 },
      { id: "2", name: "sherm", age: 20 },
      { id: "3", name: "bob", age: 15 },
    ],
    name: "johnson",
    age: 50,
    house: "pasir ris",
    counter: 1,
    showPeople: false,
  };

  static getDerivedStateFromProps(props, state){
    console.log('App.js getDerivedStateFromProps', props)
    return state;
  }

  //can make https request here
  componentDidMount() {
    console.log('App.js componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState) {
    //should use conditionss here
    //false will prevent the update
    console.log("App.js, shouldComponentUpdate");
    return true;
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log("Apps.js, componentDidUpdate");
    console.log(snapshot);
  }

  nameChangedHandler = (event, id) => {
    //find if the id of the person exist in the array and get the id
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };
    //or
    // const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;
    //update the array correctly
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    //when updating the latest state and depending on old state (eg: counter),
    //can pass function with prevState.
    this.setState((prevState, props) => {
      return {
      persons: persons,
      counter: prevState.counter + 1
    };
  });
};
  

  deletePersonHandler = (personId) => {
    //const persons = this.state.persons.slice();
    //or
    const persons = [...this.state.persons];
    persons.splice(personId, 1);
    this.setState({
      persons: persons,
    });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPeople;
    this.setState({
      showPeople: !doesShow,
    });
  };

  render() {
    let persons = null;
    let btnClass = [classes.Button];

    if (this.state.showPeople) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={(this, this.nameChangedHandler)}
          />
        </div>
      );

      btnClass.push(classes.Red);
    }

    const assignedClasses = [];
    if(this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); //classes =['red']
    }

    if(this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); //classes =['red', 'bold']
    }
    

    return (
      <div className={classes.App}>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        {persons}
        <button className={btnClass.join(' ')} onClick={this.togglePersonHandler}>
          Toggle button
        </button>
      </div>  
    );
  }
}

export default Radium(App);
