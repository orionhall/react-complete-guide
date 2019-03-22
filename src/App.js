import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = (props) => {
    // useState allows us to give a functional component a "state"
    // this is part of React Hooks

    // useState will return an array with the state and a function which can be used to set the state
    // so use destructuring to get those into two separate variables
    // useState will NOT merge the state like setState would
    const [peopleState, setPeopleState] = useState({
        people: [
            { name: 'Orion Hall', age: 28 },
            { name: 'Jaron Popko', age: 29 },
            { name: 'Molly Ritter', age: 30 }
        ]
    });

    const [otherState, setOtherState] = useState('Hi I\'m otherState');
    console.log(otherState);

    const switchNameHandler = () => {
        // On clicking the button call the function provided by useState which will update the state
        setPeopleState({
            people: [
                { name: 'Britney Spears', age: 28 },
                { name: 'Madonna Ciccone', age: 29 },
                { name: 'Robyn Fenty', age: 35 }
            ]
        });
    };

    return (
        <div className="App">
            <h1>Hi, I'm a your mom</h1>
            <p>Yes</p>
            <button onClick={switchNameHandler}>Switch Name</button>
            <Person name={peopleState.people[0].name} age={peopleState.people[0].age}/>
            <Person name={peopleState.people[1].name} age={peopleState.people[1].age}/>
            <Person name={peopleState.people[2].name} age={peopleState.people[2].age}/>
        </div>
    );
};
export default app;
