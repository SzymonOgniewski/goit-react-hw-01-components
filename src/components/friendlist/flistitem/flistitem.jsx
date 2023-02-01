import React from 'react';
import PropTypes from 'prop-types';
import css from '../friendlist.module.css';
import clsx from 'clsx';
export const FriendListItem = ({ id, name, avatar, isOnline }) => {
  const classNames = clsx(css[isOnline], {
    [css.isOn]: isOnline,
    [css.isOff]: !isOnline,
  });
  return (
    <li key={id} className={css.box}>
      <span className={classNames}>{isOnline}</span>
      <img src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  id: PropTypes.number,
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
