import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import Person2 from "./Person/Person2";

class App extends Component {
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
    showPeople: false
  };

  nameChangedHandler = (event, id) => {
    //find if the id of the person exist in the array and get the id
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    //or
    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    //update the array correctly
    const persons =[...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  deletePersonHandler = (personId) => {
    //const persons = this.state.persons.slice();
    //or
    const persons =[...this.state.persons];
    persons.splice(personId, 1);
    this.setState({
      persons: persons
    })


  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPeople;
    this.setState({
      showPeople: !doesShow
    });

  }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if(this.state.showPeople){
      persons = (
        <div >
          {this.state.persons.map((person, index) => {
            return <Person 
            name={person.name} 
            age={person.age}
            key={person.id} 
            click={this.deletePersonHandler.bind(this,index)}
            changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
      </div>
      )
    }

    return (
      <div className="App">
        {persons}
        <button
          style={style}
          onClick={this.togglePersonHandler}>a button</button>
      </div>
    );
  }
}

export default App;
