import React from 'react';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  const ulContent = stats.map(el => (
    <li key={el.id}>
      <span> {el.label}</span>
      <span>{el.percentage}%</span>
    </li>
  ));

  return (
    <section>
      {title && <h2>Upload stats</h2>}

      <ul>{ulContent}</ul>
    </section>
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
