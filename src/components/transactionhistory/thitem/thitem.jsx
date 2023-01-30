import React from 'react';
import PropTypes from 'prop-types';

export const ThItem = ({ id, type, amount, currency }) => {
  return (
    <>
      <tr key={id}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    </>
  );
};

ThItem.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
