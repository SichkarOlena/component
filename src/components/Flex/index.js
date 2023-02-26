import React, {Component} from 'react';
import PropTypes from 'prop-types';

const Flex = (props) => {
    const { children } = props;
        return <div>{children}</div>;
};

Flex.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
    fd: PropTypes.string,
    jc: PropTypes.string,
    ai: PropTypes.string,
    fw: PropTypes.string,

};

export default Flex;


