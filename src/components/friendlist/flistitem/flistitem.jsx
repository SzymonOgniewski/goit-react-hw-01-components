import React from 'react';
import PropTypes from 'prop-types';

export const FriendListItem = ({ id, name, avatar, isOnline }) => {
  return (
    <li key={id}>
      <span>{isOnline}</span>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  id: PropTypes.number,
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
