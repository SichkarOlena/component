import React, {Component} from 'react';
import styles from "./singInForm.module.css";
import cx from "classnames"


const initialState = {
    email: "",
    password: "",
    emailValid: false,
    passwordValid: false
}

class SingInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {...initialState};
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {target} = event;
        this.setState({...initialState});
    }

    handleInput = ({target: {name, value}}) => this.setState({[name]: value, [name + "Valid"]: !value.includes(" ")});

    render() {
        const {email, password, emailValid, passwordValid} = this.state;
        const emailClassName = `${styles.input} ${emailValid ? '' : styles.invalid}`;
        const passwordClassName = `${styles.input} ${passwordValid ? '' : styles.invalid}`;
        return (
            <form className={styles.container} onSubmit={this.handleSubmit}>
                <input className={emailClassName} type="email" placeholder="email" name="email" value={email}
                       onChange={this.handleInput}/>
                <input className={passwordClassName} type="password" placeholder="password" name="password"
                       value={password} onChange={this.handleInput}/>
                <input className={styles.input} type="submit" value="send"/>
            </form>
        );
    }
}

export default SingInForm;