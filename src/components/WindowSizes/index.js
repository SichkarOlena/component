import React, {Component} from 'react';
import PropTypes from 'prop-types';

class WindowSizes extends Component {
    constructor(props) {
        super(props);
        this.state= {
            w:window.innerWidth,
            h:window.innerHeight
        };

    };

    componentDidMount() {
        window.addEventListener('resize', this.qwertQWERT);
    }

    componentWillUnmount() {
        window.addEventListener('resize', this.qwertQWERT);
    }

    qwertQWERT = () => {
        this.setState({
            w:window.innerWidth,
            h:window.innerHeight
        });
    };

    render() {
        const {w, h} = this.state;
        return (
            <div>
                current size width: {w}, height: {h}

            </div>
        );
    }
}

WindowSizes.propTypes = {};

export default WindowSizes;