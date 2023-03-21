import React, {Component} from 'react';
import "./App.css";
import UsersLoader from "./components/UsersLoader";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <UsersLoader/>
        )
    }

}

export default App;













// import React, {Component} from 'react';
// import "./App.css";
// import Tree from "./components/Tree";
// import {UserContext, ThemeContext} from "./contexts";
// import Header from "./components/Header";
// import CONSTANTS from "./constants";
// const {THEMES, LANGUAGE} = CONSTANTS;
//
// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             user: {
//                 id:1,
//                 firstName: 'Alena',
//                 lastName: 'Sichkar'
//             },
//             theme: THEMES.LIGHT, LANGUAGE
//         };
//     }
// setTheme = (theme) => {this.setState({theme})}
//     render() {
//         const {user, theme} = this.state;
//         return (
//             <ThemeContext.Provider value={[theme, this.setTheme]}>
//             <UserContext.Provider value={user}>
//                 <Header/>
//             <Tree />
//             </UserContext.Provider>
//             </ThemeContext.Provider>
//         );
//     }
//
// }
//
// export default App;



