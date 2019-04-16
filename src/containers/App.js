import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';

class App extends Component {
    state = {
        persons: [
            { id: 'dlkfa', name: 'Orion Hall', age: 28 },
            { id: 'dlkfb', name: 'Jaron Popko', age: 29 },
            { id: 'dlkfc', name: 'Molly Ritter', age: 30 }
        ],
        showPersons: false
    };

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex((p) => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({ persons });
    };


    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow });
    };

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({ persons });
    };

    render () {
        let persons = null;
        let btnClass = '';

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            change={(event) => this.nameChangedHandler(event, person.id)}/>;
                    })}
                </div>
            );
            btnClass = classes.Red;
        }

        const assignedClasses = [];
        if (this.state.persons.length <= 2) {
            assignedClasses.push(classes.red);
        }
        if (this.state.persons.length <= 1) {
            assignedClasses.push(classes.bold);
        }

        return (
            <div className={classes.App}>
                <h1>I'm a React app</h1>
                <p className={assignedClasses.join(' ')}>Dis is rly wrkng, keke</p>
                <button className={btnClass}
                    onClick={this.togglePersonsHandler}>Toggle Persons
                </button>
                <div>
                    {persons}
                </div>
            </div>
        );
    }
}

export default App;
