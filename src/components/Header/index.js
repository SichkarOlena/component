import React, {useContext} from 'react';
import cx from "classnames";
import {DarkMode, WbSunny,  Language} from '@mui/icons-material';
import {UserContext, ThemeContext, LangContext} from "../../contexts";
import styles from "./Header.module.scss";
import CONSTANTS from "../../constants";

const {THEMES, LANGUAGE} = CONSTANTS;


const Header = () => {
    const [theme, setTheme] = useContext(ThemeContext);
    const [lang, setLang] = useContext(LangContext);
    const [{firstName}] = useContext(UserContext);

    const isLight = theme === THEMES.LIGHT
    const headerClasses = cx(styles.header, {
        [styles.light]: theme === isLight,
        [styles.dark]: theme === THEMES.DARK,
        [lang]: theme === LANGUAGE.LANGUAGE_UK,
        [lang]: theme === LANGUAGE.LANGUAGE_EN,
    });
    const newTheme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    const newLanguage = lang === LANGUAGE.LANGUAGE_EN ? LANGUAGE.LANGUAGE_UK : LANGUAGE.LANGUAGE_EN;

    return (
        <>
            <header className={headerClasses}>
                <h1>{lang === LANGUAGE.LANGUAGE_UK ? "Logo" : "Логотип"}</h1>
                <div>
                    {lang === LANGUAGE.LANGUAGE_UK ? "Hi" : "Привіт"}, {firstName}
                </div>
                <button onClick={() => (lang === LANGUAGE.LANGUAGE_EN ? setLang(LANGUAGE.LANGUAGE_UK) : setLang (LANGUAGE.LANGUAGE_EN))}>{newLanguage}</button>
                <span onClick={() => {setTheme(newTheme)}}>
                    {theme === THEMES.LIGHT ? <WbSunny/> : <DarkMode/>}
                </span>
            </header>
        </>
    )
}

export default Header;



