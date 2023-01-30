import React from 'react';
import PropTypes from 'prop-types';
import { FriendListItem } from './flistitem/flistitem';
export const FriendList = ({ friends }) => {
  const items = friends.map(item => {
    return (
      <FriendListItem
        key={item.id}
        avatar={item.avatar}
        name={item.name}
        isOnline={item.isOnline}
      />
    );
  });

  return <ul>{items}</ul>;
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};
