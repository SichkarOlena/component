import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = (props) => {
    const {gender, genderList, setResults} = props;
    const handleResult = ({target: {value}}) => setResults(String(value))

    const mapGenders = (value) => {
        return (
            <>
                <label htmlFor={value}>{value}
                <input
                    onChange={handleResult}
                    type="checkbox"
                    checked={gender === value}
                    value={value}
                />
                </label>
            </>
        )
    }

    return (
        genderList.map(mapGenders)
    );
}

Checkbox.propTypes = {
    gender: PropTypes.string,
    genderList: PropTypes.func,
    setResults: PropTypes.string
};

export default Checkbox;