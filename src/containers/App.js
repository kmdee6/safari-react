import React, {Component} from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Wrapr from "../hoc/Wrapr";

export const AuthContext = React.createContext(false);

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            persons: [
                {id: "name1", name: "Dinesh", age: 28, partyName: ''},
                {id: "name2", name: "Direwolf", age: 128, partyName: ''},
                {id: "name3", name: "Razor", age: 20, partyName: ''}
            ],
            showPersons: false,
            toggleCount: 0,
            authenticated: false
        };

    }

    componentDidUpdate() {
        console.log('[App.js] componentDidUpdate');
    }

    componentDidMount() {
        console.log('[App.js] componentDidMount');
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('[App.js] getDeriveStateFromProps', prevState, nextProps);
        return prevState;
    }

    getSnapshotBeforeUpdate() {
        console.log('[App.js] getSnapshotBeforeUpdate');
    }

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
    };

    deletePersonHandler = (personIndex) => {
        const personsCopy = [...this.state.persons];
        personsCopy.splice(personIndex, 1);
        this.setState({persons: personsCopy});
    };

    togglePersonsHandler = () => {

        this.setState((prevState, props) => {
            return {
                showPersons: !prevState.showPersons,
                toggleCount: prevState.toggleCount + 1
            }
        });

        console.log(this.state.toggleCount);
    };

    loginHandler = () => {
        this.setState({authenticated: true})
    };

    render() {
        console.log('[App.js] render()');
        let persons = null;
        if (this.state.showPersons) {

            persons = (
                <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangeHandler}
                />
            );

        }

        return (
            <Wrapr>
                <Cockpit
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    login={this.loginHandler}
                    clicked={this.togglePersonsHandler}
                />
                <AuthContext.Provider value={this.state.authenticated}>{persons}</AuthContext.Provider>
            </Wrapr>
        )
    };

}

export default withClass(App, classes.App);