import React from 'react';

const cockpit = (props) => {
    return (
        <div>
            <p className={props.classes.join(' ')}>This is the text.</p>
            <button className={props.buttonClass} onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
}

export default cockpit;