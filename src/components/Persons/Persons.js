import Person from "./Person/Person";
import React from "react";
import classes from './Persons.css'
import Radium from 'radium';

const persons = (props) => (
    props.persons.map((person, index) => {
            return (
                <div key={person.id}>
                    <Person
                        name={person.name}
                        click={() => props.clicked(person.id)}
                        age={person.age}
                        changed={(event) => props.changed(event, person.id)}
                    />
                    {person.partyName ? <p onClick={() => props.removePartyName(index)}
                                           className={classes.partey}>{person.partyName} is a party
                        going freak!</p> : null}
                </div>
            );

        }
    )
);

export default Radium(persons);