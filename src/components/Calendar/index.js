import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import { format, add, startOfMonth } from "date-fns";
import styles from "./Calendar.module.scss";


class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        };
    }

    addDay = () => {
        const {date} = this.state;
        this.setState({date: add(date, {days:1}) });
    };

    addMonths = () => {
        const {date} = this.state;
        this.setState({date: add(date, {months: 1}) });
    };

    render() {
        const {date} = this.state;
        return <div className={styles.container}>
            <h3>день тіжня з якого почався місяць: {format(startOfMonth
            (date), "EEEE")}</h3>
            <p>{format(date, "'Date:' EEE, dd LLLL 'Time:' HH:mm:ss")}</p>
            <button className={styles.btn} onClick={this.addDay}>add 1 day</button>
            <button className={styles.btn} onClick={this.addMonths}>add 1 day</button>


        </div>;
    }
}

export default Calendar;


