import React, {Component} from 'react';
import UserProfile from "../UserProfile";
import CONSTANTS from "../../../constants";
import {ThemeContext, UserContext} from "../../../contexts";
import cx from "classnames";
import styles from "../../Header/Header.module.scss";
import {DarkMode, WbSunny} from "@mui/icons-material";

const {LANGUAGE} = CONSTANTS;


const Child = (props) => {
    return (
        <ThemeContext.Consumer>
            {([theme, lang, setTheme, setLanguage]) => {
                console.log(lang)
                const headerClasses = cx(styles.header, {
                    [lang]: theme === LANGUAGE.LANGUAGE_UK,
                    [lang]: theme === LANGUAGE.LANGUAGE_EN,
                })
                const newLanguage = lang === LANGUAGE.LANGUAGE_EN ? LANGUAGE.LANGUAGE_UK : LANGUAGE.LANGUAGE_EN;

                return (
                    <UserContext.Consumer>
                        {({firstName}) => (
                            <header className={headerClasses}>
                                <h2>{lang === LANGUAGE.LANGUAGE_UK ? "Child" : "Дитина"}</h2>
                            </header>
                        )}
                    </UserContext.Consumer>
                );
            }}
        </ThemeContext.Consumer>

    )
//         return (
//             <div style = {{ padding: '10px'}}>
//                 <h2>{lang === LANGUAGE.LANGUAGE_UK ? "Child" : "Дитина"}</h2>
//                     <UserProfile />
//
//             </div>
//         );
// }
}
export default Child ;



