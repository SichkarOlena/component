import React from "react";

export const CiaoButton = (props) => {
    const {
        sortBy,
        direct,
        name
    } = props;
    return (
        <button onClick={sortBy}>
            sort by {name} {direct ? "growth" : "decrease"}
        </button>
    );
}
