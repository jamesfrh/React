import React, { Component } from "react";
import Validation from './Component2/Validation';
import Char from './Component2/Char';

class Assignment2 extends Component {
    state = {
        userInput: ''   
    }

    inputChangedHandler = (event) => {
        this.setState({
            userInput: event.target.value
        });

    }
    deleteCharHandler = (index) => {
        const text = this.state.userInput.split('');
        text.splice(index, 1);
        const updatedText = text.join('');
        this.setState({
            userInput:updatedText
        });
    }
    render() {
        const charList = this.state.userInput.split("").map((ch, index) => {
            return <Char 
            character={ch} 
            key={index}
            clicked={() => this.deleteCharHandler(index)}/>;
        });

        return (
            <div>
                <input type="text"
                    onChange={this.inputChangedHandler}
                    value={this.state.userInput} />
                    <p>{this.state.userInput}</p>
                    <Validation inputLength={this.state.userInput.length}/>
                    {charList}
            </div>

        );
    }

}
export default Assignment2;