import React, {Component} from 'react';
import classes from './App.css';
import Radium, {StyleRoot} from 'radium';
import Person from './Person/Person';

class App extends Component {

    state = {
        persons: [
            {id: "name1", name: "Dinesh", age: 28, partyName: ''},
            {id: "name2", name: "Direwolf", age: 128, partyName: ''},
            {id: "name3", name: "Razor", age: 20, partyName: ''}
        ],
        showPersons: false
    };

    render() {

        let persons = null;
        let buttonClass = null;
        if (this.state.showPersons) {

            persons = (
                <StyleRoot>
                    <div>
                        {this.state.persons.map((person, index) => {
                                return (
                                    <div key={person.id}>
                                        <Person
                                            name={person.name}
                                            click={() => this.showDetailsHandler(person.id)}
                                            age={person.age}
                                            changed={(event) => this.nameChangeHandler(event, person.id)}
                                        />
                                        {person.partyName ? <p onClick={() => this.removePartyName(index)}
                                                               className={classes.partey}>{person.partyName} is a party
                                            going freak!</p> : null}
                                    </div>
                                );

                            }
                        )}
                    </div>
                </StyleRoot>
            );

            buttonClass = classes.Red;

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
                <p className={assignedClasses.join(' ')}>This is the text.</p>
                <button className={buttonClass} onClick={this.togglePersonsHandler}>Toggle Persons</button>
                {persons}
            </div>
        )
    };

    nameChangeHandler = (event, id) => {

        const personsCopy = [...this.state.persons];
        const foundPersonId = this.state.persons.findIndex(person => {
            return person.id === id;
        });

        const latestPerson = {...this.state.persons[foundPersonId]};
        latestPerson.name = event.target.value;
        personsCopy[foundPersonId] = latestPerson;


        this.setState({
            persons: personsCopy
        });
    }

    deletePersonHandler = (personIndex) => {
        const personsCopy = [...this.state.persons];
        personsCopy.splice(personIndex, 1);
        this.setState({persons: personsCopy});
    }

    togglePersonsHandler = () => {
        const togglePersons = this.state.showPersons;
        this.setState({showPersons: !togglePersons});
    }

    removePartyName = (index) => {
        const personsCopy = [...this.state.persons];
        personsCopy[index].partyName = null;
        this.setState({persons: personsCopy});
    }

    showDetailsHandler = (id) => {
        const personsCopy = [...this.state.persons];
        const personIndex = this.state.persons.findIndex(personItem => {
            return personItem.id === id;
        });
        const person = personsCopy[personIndex];
        person.partyName = person.name + ' PartyGoer'
        personsCopy[personIndex] = person;
        this.setState({
            persons: personsCopy
        });
    }
}

export default Radium(App);