import Person from "./Person/Person";
import React from "react";
import Wrapr from '../../hoc/Wrapr';
import Radium from "radium";

const persons = (props) => (
    props.persons.map((person, index) => {
            return (
                <Wrapr>
                    <Person
                        key={person.id}
                        name={person.name}
                        ind={index}
                        click={() => props.clicked(person.id)}
                        age={person.age}
                        changed={(event) => props.changed(event, person.id)}
                    />
                </Wrapr>
            );

        }
    )
);

export default Radium(persons);