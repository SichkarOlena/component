import React from "react";
import styles from './UserProfile.module.scss'
import cx from "classnames";
import {UserContext, ThemeContext} from "../../../contexts";
import CONSTANTS from "../../../constants";

const {THEMES, LANGUAGE} = CONSTANTS;

const UserProfile = (props) => {
    return (
        <ThemeContext.Consumer>
            {(theme, lang) => {
                const articleClasses = cx(styles.article, {
                    [styles.light]: theme === THEMES.LIGHT,
                    [styles.dark]: theme === THEMES.DARK,
                    [lang]: theme === LANGUAGE.LANGUAGE_UK,
                    [lang]: theme === LANGUAGE.LANGUAGE_EN,
                })
                return (
                    <UserContext.Consumer>
                        {({id, firstName, lastName}) => (
                            <article className={articleClasses}/>

                        )}
                    </UserContext.Consumer>
                )
            }}
        </ThemeContext.Consumer>
    );


}
export default UserProfile;