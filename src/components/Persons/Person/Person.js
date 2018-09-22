import React, {Component} from 'react';
import classes from './Person.css';
import PropTypes from 'prop-types';
import withClass from '../../../hoc/withClass';
import Wrapr from "../../../hoc/Wrapr";
import { AuthContext } from "../../../containers/App";

class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElement = React.createRef();
    }

    componentDidMount() {
        console.log('[Person] Inside componentDidMount');
        if (this.props.ind === 0) {
            this.inputElement.current.focus();
        }


    }

    render() {
        return (
            <Wrapr>
                <AuthContext.Consumer>{(authenticated) => authenticated ? <p>I'm authenticated!</p> : null }</AuthContext.Consumer>
                <h1 onClick={this.props.click}>My name is {this.props.name} and I'm {this.props.age} years old.</h1>
                <input ref={this.inputElement} type="text" onChange={this.props.changed} value={this.props.name}/>
            </Wrapr>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func

}

export default withClass(Person, classes.Person);