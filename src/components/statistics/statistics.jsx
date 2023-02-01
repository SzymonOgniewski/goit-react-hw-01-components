import React from 'react';
import PropTypes from 'prop-types';
import css from './statistics.module.css';
export const Statistics = ({ title, stats }) => {
  const ulContent = stats.map(el => (
    <li key={el.id} className={css.box}>
      <span> {el.label}</span>
      <span>{el.percentage}%</span>
    </li>
  ));

  return (
    <div className={css.container}>
      <div className={css.statistics}>
        {title && <h2 className={css.heading}>Upload stats</h2>}

        <ul className={css.list}>{ulContent}</ul>
      </div>
    </div>
  );
};

Statistics.propTypes = {
  stats: PropTypes.array,
  el: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
  }),
  title: PropTypes.string,
};
