import React, {Component} from 'react';
import {getRandomUsers} from "../../api";
import UsersList from "./UsersList";
import Spinner from "../Spinner";
import Error from "../Error";
import Paginate from "../Paginate";
import {configRandomUser} from '../../configs';
import ControlAmount from "./ControlAmaunt";
import Checkbox from "../Checkbox";
import Nationalities from "../Nationalities";
import styles from './UsersLoader.module.scss'

class UsersLoader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            isPending: false,
            error: null,
            currentPage: 1,
            currentResult: configRandomUser.AMOUNT,
            gender: configRandomUser.GENDER,
            nationalities: configRandomUser.NATIONALITIES,
            nat: configRandomUser.NAT,
        };
    }

    load = () => {
        const {currentPage, currentResult, gender, nat} = this.state;
        this.setState({isPending: true});
        getRandomUsers({page: currentPage, results: currentResult, gender: gender, nat: nat})
            .then((data) => {
                if (data.error) {
                    return this.setState({error: data.error})
                }
                this.setState({users: data.results, error: null});
            })
            .catch((error) => this.setState({error}))
            .finally(() => this.setState({isPending: false}));
    };


    componentDidMount() {
        this.load();
    }

    componentDidUpdate(prevProps, prevState) {
        const {currentPage, currentResult, gender, nat} = this.state;
        if (currentPage !== prevState.currentPage
            || currentResult !== prevState.currentResult
            || gender !== prevState.gender
            || nat !== prevState.nat) {
            this.load();
        }
    }

    handlePrevBtn = () => {
        if (this.state.currentPage > 1) {
            this.setState((state) => ({currentPage: state.currentPage - 1}));
        }
    };

    handleNextBtn = () => this.setState((state) => ({currentPage: state.currentPage + 1}));

    setResults = (value) => this.setState({currentResult: value});

    setGender = (value) => this.setState({gender: value});

    setNationalities = (value) => this.setState({nat: value});


    render() {
        const {
            users,
            currentPage,
            isPending,
            error,
            currentResult,
            gender,
            nationalities,
            nat,
        } = this.state;

        if (error) {
            return <Error/>
        }

        if (isPending) {
            return <Spinner/>
        }

        return (
            <section>
                <h2 className={styles.container}>Users List</h2>

                <div className={styles.checkbox}>
                    <ControlAmount
                        amounts={configRandomUser.AMOUNTS}
                        currentResult={currentResult}
                        setResults={this.setResults}
                    />
                </div>
                <div className={styles.container}>
                    <Nationalities
                        nationalities={nationalities}
                        setNationalities={this.setNationalities}
                        nat={nat}
                    />
                </div>
<div className={styles.checkbox}>
    <Checkbox className={styles.checkbox}
              genderList={configRandomUser.GENDERS}
              gender={gender}
              setResults={this.setGender}
    />
</div>

               <div className={styles.container}>
                   <Paginate
                       currentPage={currentPage}
                       handlePrevBtn={this.handlePrevBtn}
                       handleNextBtn={this.handleNextBtn}
                   />
               </div>
                <div className={styles.users} > <UsersList users={users}/></div>

            </section>
        );
    }
}

export default UsersLoader;


