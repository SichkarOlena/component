import React from 'react';
import cx from "classnames";
import {WbSunny, DarkMode} from '@mui/icons-material';
import {UserContext, ThemeContext} from "../../contexts";
import styles from "./Header.module.scss";
import CONSTANTS from "../../constants";

const {THEMES, LANGUAGE} = CONSTANTS;


const Header = () => {
    return (
        <ThemeContext.Consumer>
            {([theme, lang, setTheme, setLanguage]) => {
                console.log(lang)
                const headerClasses = cx(styles.header, {
                    [styles.light]: theme === THEMES.LIGHT,
                    [styles.dark]: theme === THEMES.DARK,
                    [lang]: theme === LANGUAGE.LANGUAGE_UK,
                    [lang]: theme === LANGUAGE.LANGUAGE_EN,
                })
                const newTheme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
                const newLanguage = lang === LANGUAGE.LANGUAGE_EN ? LANGUAGE.LANGUAGE_UK : LANGUAGE.LANGUAGE_EN;

                return (
                    <UserContext.Consumer>
                        {({firstName}) => (
                            <header className={headerClasses}>
                                <h1>{lang === LANGUAGE.LANGUAGE_UK ? "Logo" : "Логотип"}</h1>
                                <div>
                                    {lang === LANGUAGE.LANGUAGE_UK ? "Hi" : "Привіт"}, {firstName}
                                </div>
                                <button onClick={() => setLanguage(newLanguage)}>{newLanguage}</button>
                                <span onClick={() => {setTheme(newTheme)}}>
                                    {theme === THEMES.LIGHT ? <WbSunny/> : <DarkMode/>}
                                </span>
                            </header>
                        )}
                    </UserContext.Consumer>
                );
            }}
        </ThemeContext.Consumer>

    );
}



{/*Header. contextType = UserContext;*/
}
export default Header;