import React from 'react';
import PropTypes from 'prop-types';

const Nationalities = (props) => {
    const {nationalities, setNationalities, nat} = props;
    const handleResult = ({target: {value}}) => setNationalities(value)

    const option = (value, index) =>
        <option value={value} key={index}>{value}</option>;

    return (
        <select style={{padding: '10px'}} name="language" onChange={handleResult} value={nat}>
            {nationalities.map(option)}
        </select>
    );
}


Nationalities.propTypes = {};

export default Nationalities;

