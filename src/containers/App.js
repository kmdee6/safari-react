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
        if (this.state.showPersons) {

            persons = (
                <Persons
                    persons={this.state.persons}
                    clicked={this.showDetailsHandler}
                    changed={this.nameChangeHandler}
                    removePartyName={this.removePartyName}
                />
            );

        }

        return (
            <StyleRoot>
                <div className={classes.App}>
                    <Cockpit
                        showPersons={this.state.showPersons}
                        persons={this.state.persons}
                        clicked={this.togglePersonsHandler}
                    />
                    {persons}
                </div>
            </StyleRoot>
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