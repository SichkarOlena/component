import React, {Component} from 'react';
import {ThemeContext, UserContext} from "../../contexts"
import styles from "./"
import CONSTANTS from "../../constats"
const {THEMES}  = CONSTANTS;


const Header = () => {

        return (
            <ThemeContext.Consumer>
                {(theme)=> {
                        const headerClasses = cx(styles.header, {
                                [styles.light]: theme === THEMES.LIGHT,
                                [styles.dark]: theme === THEMES.DARK,
                        })
                        return (
                            <UserContext.Consumer>
                                    {({firstName}) => (
                                        <header className={headerClasses}>
                                                <h1>logo</h1>
                                                <div>Hi, {firstName}</div>
                                                <button onClick={() => {
                                                }}>swith theme
                                                </button>
                                        </header>
                                    )}
                            </UserContext.Consumer>
                        );
                }}
            </ThemeContext.Consumer>
        );
    }

{/*Header. contextType = UserContext;*/}
export default Header;