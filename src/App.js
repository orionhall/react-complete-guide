import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        people: [
            { name: 'Orion Hall', age: 28 },
            { name: 'Jaron Popko', age: 29 },
            { name: 'Molly Ritter', age: 30 }
        ],
        showPersons: false
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

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow });
    };

    nameChangedHandler = (event) => {
        this.setState({
            people: [
                { name: 'Orion Hall', age: 28 },
                { name: event.target.value, age: 29 },
                { name: 'Molly Ritter', age: 30 }
            ]
        });
    };

    render () {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.people.map((person) => {
                        return <Person
                            name={person.name}
                            age={person.age}/>;
                    })};
                </div>
            )
        }

        return (
            <div className="App">
                <div>
                    I'm a React app
                </div>
                <button
                    style={style}
                    // Use an arrow function to pass switchNameHandler with a parameter
                    // This can cause performance implications because a new function is made each time the component
                    // renders
                    onClick={this.togglePersonsHandler}>Toggle Persons
                </button>
                {persons}
            </div>
        );
    }
}

export default App;
