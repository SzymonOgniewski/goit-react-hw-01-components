import React from 'react';
import PropTypes from 'prop-types';
import { FriendListItem } from './flistitem/flistitem';
import css from './friendlist.module.css';
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

  return (
    <div className={css.container}>
      <ul className={css.list}>{items}</ul>
    </div>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};
