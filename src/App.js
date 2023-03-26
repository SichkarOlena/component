import React, {useState} from 'react';
import "./App.css";
import {UserContext, ThemeContext, LangContext} from "./contexts";
import Header from "./components/Header";
import CONSTANTS from "./constants";


const {THEMES, LANGUAGE} = CONSTANTS;

const App = ()=> {
    const [theme, setTheme] = useState(THEMES.LIGHT);
    const [lang, setLang] = useState(LANGUAGE.LANGUAGE_UK);
    const [user, setUser] = useState({
        firstName: 'Alena',
        id: 77,
        age: 15.
    });
    return (
        <LangContext.Provider value={[lang, setLang]}>
            <ThemeContext.Provider value={[theme, setTheme]}>
                <UserContext.Provider value={[user, setUser]}>
                    <Header/>
                </UserContext.Provider>
            </ThemeContext.Provider>
        </LangContext.Provider>
    );
}


export default App;





