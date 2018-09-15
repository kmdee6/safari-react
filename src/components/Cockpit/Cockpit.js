import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

    const assignedClasses = [];
    let buttonClass = '';
    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }
    if(props.showPersons) {
        buttonClass = classes.Red;
    }

    return (
        <div className={classes.Cockpit}>
            <p className={assignedClasses.join(' ')}>This is the text.</p>
            <button className={buttonClass} onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
}

export default cockpit;