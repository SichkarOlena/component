import React, {Component} from 'react';
import Child from "../Child";

const SubParent = (props) => {

    return (
        <div style={{border: '1px solid teal', padding: '10px', margin: '10px'}}>
            <h2>Child</h2>
            <Child/>

        </div>
    )
}

export default SubParent;