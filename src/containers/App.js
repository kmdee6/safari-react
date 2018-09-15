import React, {Component} from 'react';
import classes from './App.css';
import Radium, {StyleRoot} from 'radium';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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
                        <Persons
                            persons={this.state.persons}
                            clicked={this.deletePersonHandler}
                            changed={this.nameChangeHandler}
                            removePartyName={this.removePartyName}
                        />
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
                <Cockpit
                    classes={assignedClasses}
                    buttonClass={buttonClass}
                    clicked={this.togglePersonsHandler}
                />
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