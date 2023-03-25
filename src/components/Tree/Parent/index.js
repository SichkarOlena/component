import React from 'react';
import { ThemeContext} from "../../../contexts";
import SubParent from "../SubParent";
import CONSTANTS from "../../../constants";
const {THEMES, LANGUAGE}  = CONSTANTS;

const Parent = (props) => {

        return (
            <ThemeContext.Consumer>
                {([theme, lang])=> {
return (
    <div
        style = {{
            backgroundColor: theme === THEMES.LIGHT?'wheat': '#222',
            color:  theme === THEMES.LIGHT?'#222': 'wheat'}}>


            {/*// border: '1px solid teal' ,*/}
            {/*// padding: '10px',*/}
            {/*// margin: '10px'}}>*/}
        {/*<h2>Parent </h2>*/}
<div lang={{
    text: lang === LANGUAGE.LANGUAGE_EN ? LANGUAGE.LANGUAGE_UK : LANGUAGE.LANGUAGE_EN}}>

        <SubParent />

    </div>
    </div>
)
                }}

            </ThemeContext.Consumer>
        );
    }


export default Parent;