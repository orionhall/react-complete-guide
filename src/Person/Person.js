import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>My name is {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed}
                   /* Setting value to props.name will show the initial value
                      in the field -- having no onChange would mean you could
                      never change the value, but since the onChange function
                      changes the value of props.name it works.
                      This is two-way binding
                    */
                   value={props.name}/>
        </div>
    );
};

export default person;
