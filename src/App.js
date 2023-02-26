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
// import UsersLoader from "./components/UsersLoader";
//
// class App extends Component {
//     constructor(props) {
//         super(props);
//     }
//
//     render() {
//         return (
//             <UsersLoader/>
//         )
//     }
//
// }
//
// export default App;