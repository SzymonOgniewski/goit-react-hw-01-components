import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from '../transactions.module.css';
export const ThItem = ({ id, type, amount, currency }) => {
  const classNames = clsx(css[type], {
    [css.invoice]: type === 'invoice',
    [css.withdrawal]: type === 'withdrawal',
    [css.payment]: type === 'payment',
    [css.deposit]: type === 'deposit',
  });

  return (
    <>
      <tr key={id}>
        <td className={`${classNames} ${css.tableData}`}>{type}</td>
        <td className={`${classNames} ${css.tableData}`}>{amount}</td>
        <td className={`${classNames} ${css.tableData}`}>{currency}</td>
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
