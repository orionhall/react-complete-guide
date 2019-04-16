import React from 'react';
import classes from 'src/components/Persons/Person/Person.css';

const person = (props) => {
    return (
        <div className={classes.Person}>
            <p onClick={props.click}>My name is {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text"
                   value={props.name}
                   onChange={props.change}/>
        </div>
    );
};

export default person;