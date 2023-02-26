import React from "react";
import styles from './UserCard.module.css'
import PropTypes from "prop-types";

const UserProfile = (props) => {
    const {
        user: { id, firstName, lastName, isSelected },
        userSelector,
    } = props;
    const viewUser = ({id, firstName, lastName}) => (
        <article className={styles.article} style={style} onClick={handleSelector}>
            <h3 className={styles.h3}>
                <em>{id}) </em>
                {firstName} {lastName}
            </h3>
        </article>
    );
    return (
        <UserContext.Consumer>
            {viewUser}
            </UserContext.Consumer>
    );
};

UserProfile.defaultProps = {
    user: {
        id: 0,
        firstName: 'noname',
        lastName: 'noname',
        isSelected: true,
    },

    userSelector: ()=>{}
};


const userShape = PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    isSelected: PropTypes.bool,
});
UserProfile.propTypes = {
    user: userShape.isRequired,
    userSelector: PropTypes.func,
};

export default UserProfile;