import React from 'react';
import PropTypes from 'prop-types';
import { ThItem } from './thitem/thitem';
import css from './transactions.module.css';

export const TransactionHistory = ({ items }) => {
  const transactionList = items.map(item => {
    return (
      <ThItem
        id={item.id}
        type={item.type}
        amount={item.amount}
        currency={item.currency}
      />
    );
  });

  return (
    <div className={css.container}>
      <table className={css.table}>
        <thead>
          <tr>
            <th className={css.tableHeader}>Type</th>
            <th className={css.tableHeader}>Amount</th>
            <th className={css.tableHeader}>Currency</th>
          </tr>
        </thead>

        <tbody>{transactionList}</tbody>
      </table>
    </div>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};
