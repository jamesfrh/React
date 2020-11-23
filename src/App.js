import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import Person2 from "./Person/Person2";
//test commit
class App extends Component {
  state = {
    persons: [
      { name: "james", age: 28 },
      { name: "sherm", age: 20 },
      { name: "bob", age: 15 },
    ],
    name: "johnson",
    age: 50,  
    house: "pasir ris",
    counter: 1,
  };  

  addCounterHandler = (event) => {
    console.log("was clicked");
    //Dont directly change the state like this
    //this.state.counter = 10;

    //instead do this
    this.setState({
      persons: [
        { name: event, age: 28 },
        { name: "sherm", age: 20 },
        { name: "bob", age: 15 },
      ],
      counter: 10,
      name: "johnsonNamechanged",
    });
    console.log(this.state.counter);
  };

  nameChangedHandler = (event) =>{
    this.setState({
      persons: [
        { name: "james", age: 28 },
        { name: event.target.value, age: 20 },
        { name: "bob", age: 15 },
      ],
      counter: 1,
      name: "johnson",
    });
    console.log(this.state.counter);
  };

  

  render() { 
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age} 
          click={this.addCounterHandler.bind(this,'rob')}
          changed={this.nameChangedHandler}
        />
        <Person 
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />

        <Person2 varone={this.state.name} vartwo={this.state.counter}>
          child prop{" "}
        </Person2>
        <button
         style={style}
         onClick={() =>this.addCounterHandler("james!")}>add counter</button>
      </div>
    );
  }
}

export default App;
