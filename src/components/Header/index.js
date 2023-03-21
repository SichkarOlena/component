import React from 'react';
import cx from "classnames";
import {WbSunny, DarkMode } from '@mui/icons-material';
// import WbSunnyIcon from '@mui/icons-material/WbSunny';
// import DarkModeIcon from '@mui/icons-material/DarkMode';
import { UserContext, ThemeContext} from "../../contexts";
import styles from "./Header.module.scss";
import CONSTANTS from "../../constants";
const {THEMES, LANGUAGE}  = CONSTANTS;



const Header = (props) => {
    const {theme, setTheme,
        user: {firstName},
        lang, setLanguage
    } = props;

    const isLightTheme = theme === THEMES.LIGHT;
    const headerClasses = cx(styles.header, {[styles.light]: isLightTheme, [styles.dark]: theme === THEMES.DARK,});
    const newTheme = isLightTheme ? THEMES.DARK : THEMES.LIGHT;
    const newLanguage = lang === LANGUAGE.EN ? LANGUAGE.UK : LANGUAGE.EN;

    return (
        <header className={headerClasses}>
            <h1>{lang === LANGUAGE.EN ? "Logo" : "Логотип"}</h1>
            <div>
                {lang === LANGUAGE.EN ? "Hi" : "Привіт"}, {firstName}
            </div>
            <button onClick={() => setLanguage(newLanguage)}>{newLanguage}</button>
            <span onClick={() => {
                setTheme(newTheme);
            }}>
                    {isLightTheme ? <DarkMode/> : <WbSunny/>}
                </span>
        </header>
    );
};


    //         <ThemeContext.Consumer>
    //             {([theme, setTheme])=> {
    //                     const headerClasses = cx(styles.header, {
    //                             [styles.light]: theme === THEMES.LIGHT,
    //                             [styles.dark]: theme === THEMES.DARK,
    //                     })
    //                 const newTheme = theme === THEMES.LIGHT?THEMES.DARK : THEMES.LIGHT;
    //                     return (
    //                         <UserContext.Consumer>
    //                                 {({firstName}) => (
    //                                     <header className={headerClasses}>
    //                                             <h1>logo</h1>
    //                                             <div>Hi, {firstName}</div>
    //                                             <span
    //                                                 onClick={() => {setTheme(newTheme)
    //                                             }}>{theme === THEMES.LIGHT ? <WbSunny/> : <DarkMode/>}
    //                                             </span>
    //                                     </header>
    //                                 )}
    //                         </UserContext.Consumer>
    //                     );
    //             }}
    //         </ThemeContext.Consumer>
    //     );
    // }

{/*Header. contextType = UserContext;*/}
export default Header;