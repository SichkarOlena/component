import queryString from 'query-string';
import { configRandomUser } from "../configs";

export const getRandomUsers = (options={}) => {
    const defaultOptions = {
        page: 1,
        format: configRandomUser.FORMAT,
        nat: 'gb',
        results: configRandomUser.AMOUNT,
        // seed: configRandomUser.API_KEY,
        inc: 'gender, name, nat, login, email',
        gender: '',
        nationalities: configRandomUser.NATIONALITIES,
    };
    const resOptions = {
        ...defaultOptions,
        ...options
    }
    return  fetch(
        `${configRandomUser.BASE_URL}?${queryString.stringify(resOptions)}`

    ).then((response)=>response.json());

};

export const getJsonUsers = () =>
    fetch("/data/users.json")
        .then((res)=> res.json());


export const getJsonPhones = () =>
    fetch("/data/phones.json")
        .then((res)=> res.json());



// "https://randomuser.me/api/?results=10&seed=fd2022-2-ajax&page=currentPage")