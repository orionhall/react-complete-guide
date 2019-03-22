import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        people: [
            { name: 'Orion Hall', age: 28 },
            { name: 'Jaron Popko', age: 29 },
            { name: 'Molly Ritter', age: 30 }
        ]
    };

    switchNameHandler = (newName) => {
        // On clicking the button call the function provided by useState which will update the state
        this.setState({
            people: [
                { name: newName, age: 28 },
                { name: 'Madonna Ciccone', age: 29 },
                { name: 'Robyn Fenty', age: 35 }
            ]
        });
    };

    render () {
        return (
            <div className="App">
                <h1>Hi, I'm a your mom</h1>
                <p>Yes</p>
                <button
                    // Use an arrow function to pass switchNameHandler with a parameter
                    // This can cause performance implications because a new function is made each time the component renders
                    onClick={() => this.switchNameHandler('Maximilian')}>Switch Name
                </button>
                <Person
                    name={this.state.people[0].name}
                    age={this.state.people[0].age}/>
                <Person
                    name={this.state.people[1].name}
                    age={this.state.people[1].age}
                    // Pass in arguments by using .bind because you are passing the function itself, not running it
                    click={this.switchNameHandler.bind(this, 'Artemis')}/>
                <Person
                    name={this.state.people[2].name}
                    age={this.state.people[2].age}/>
            </div>
        );
    }
}

export default App;
