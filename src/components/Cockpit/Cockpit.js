import React, { useEffect, useRef, useContext } from 'react';
import AuthContext from '../../context/auth-context';
import classes from './Cockpit.css';

const cockpit = (props) => {
    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);

    useEffect(() => {
        console.log('Cockpit.js useEffect');
        // setTimeout(() => {
        //     alert('Saved data to cloud!');
        // }, 1000);
        toggleBtnRef.current.click();
        return () => {
            console.log('Cockpit.js cleanup work in useEffect');
        }
    }, []);

    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>Dis is rly wrkng, keke</p>
            <button className={btnClass}
                    ref={toggleBtnRef}
                    onClick={props.clicked}>Toggle Persons
            </button>
            <button onClick={authContext.login}>Log In</button>
        </div>
    );
};

export default React.memo(cockpit);
