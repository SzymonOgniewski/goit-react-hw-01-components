import React from 'react';
import PropTypes from 'prop-types';
import css from './profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.container}>
      <div className={css.profile}>
        <div className={css.description}>
          <img src={avatar} alt="User avatar" className={css.img} />
          <p className={css.name}>{username}</p>
          <p className={css.tag}>@{tag}</p>
          <p className={css.location}>{location}</p>
        </div>
        <ul className={css.stats}>
          <li className={css.box}>
            <span className={css.label}>Followers</span>
            <span className={css.quantity}>{stats.followers}</span>
          </li>
          <li className={css.box}>
            <span className={css.label}>Views</span>
            <span className={css.quantity}>{stats.views}</span>
          </li>
          <li className={css.box}>
            <span className={css.label}>Likes</span>
            <span className={css.quantity}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
