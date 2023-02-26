import React from "react";
import UserCard from "../UserCard";
import PropTypes from "prop-types";

const UserList = (props) => {
  const userSelector = (id) => {
    const { users, setUsersSelected } = props;
    const newUsers = users.map((user) => ({
      ...user,
      isSelected: user.id === id ? !user.isSelected : user.isSelected,
    }));
    setUsersSelected(newUsers);
  };
  const mapUsers = (user) => (
    <UserCard key={user.id} user={user} userSelector={userSelector} />
  );
  const { users } = props;
  return (
    <section>
      <h2>Users list</h2>
      {users.map(mapUsers)}
    </section>
  );
};
UserList.prototype = {
  users: PropTypes.arrayOf().isRequired,
};
export default UserList;
