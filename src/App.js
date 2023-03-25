import React, {Component} from 'react';
import "./App.css";
import Tree from "./components/Tree";
import {UserContext, ThemeContext} from "./contexts";
import Header from "./components/Header";
import CONSTANTS from "./constants";
import { useClicker } from  "./hooks"

const {THEMES, LANGUAGE} = CONSTANTS;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                id: 1,
                firstName: 'Alena',
                lastName: 'Sichkar'
            },
            theme: THEMES.LIGHT,
            lang: LANGUAGE.LANGUAGE_UK,
        };
    }

    setTheme = (theme) => {
        this.setState({theme})
    }

    setLanguage = (lang) => {
        this.setState({lang: lang})

    }

    render() {
        const {user, theme, lang} = this.state;
        return (
            <ThemeContext.Provider value={[theme, lang, this.setTheme, this.setLanguage]}>
                <UserContext.Provider value={user}>
                    <p>{useClicker}</p>
                    <Header/>
                    <Tree/>
                </UserContext.Provider>
            </ThemeContext.Provider>
        );
    }

}

export default App;







