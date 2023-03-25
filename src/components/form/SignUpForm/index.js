import React, {Component, useReducer} from 'react';


const initialState = {
    fname: '',
    sname:'',
    email: '',
    password: '',
    phone: '',
    age: 18

}

const reducer = (state, action) => {
    const {name, value} = action;
    const newState = {
        ...state,
        [name]: value
    }
    return newState;

}
const SignUpForm = () =>  {
    const [state, dispatch] = useReducer(reducer, initialState);
    const handleInput = ({target: {name, value}}) => {
        const action = {name, value};
        dispatch(action);
    }
        return (
            <div>
                <h2>Sing Up</h2>
                <form>
                    <input type="text" name = "fname" value={state.fname} onChange={handleInput} placeholder="fname"/>
                    <input type="text" name = "sname" value={state.sname} onChange={handleInput} placeholder="sname"/>
                    <input type="email" name = "email" value={state.email} onChange={handleInput} placeholder="email"/>
                    <input type=" password" name = "password" value={state. password} onChange={handleInput} placeholder=" password"/>
                    <input type="phone" name = "phone" value={state.phone} onChange={handleInput} placeholder="phone"/>
                </form>
            </div>
        );

}

export default SignUpForm;