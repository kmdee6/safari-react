import React from 'react';
import classes from './Person.css';
import Radium from 'radium';

const person = (props) => {

    const personStyle = {
      '@media (min-width:500px)': {
          width: '70%',
          height: '130px'
      }
    };

    return (
        <div className={classes.Person} style={personStyle}>
            <h1 onClick={props.click}>My name is {props.name} and I'm {props.age} years old.</h1>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default Radium(person);