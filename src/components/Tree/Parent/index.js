import React, {Component} from 'react';
import SubParent from "../SubParent";

class Parent extends Component {
    render() {
        return (
            <div style = {{border: '1px solid teal' , padding: '10px', margin: '10px'}}>
                <h2>Parent </h2>
                <SubParent/>

            </div>
        );
    }
}

export default Parent;