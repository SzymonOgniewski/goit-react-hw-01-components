import React from 'react';
import PropTypes from 'prop-types';
import { ThItem } from './thitem/thitem';

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
    <table class="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>{transactionList}</tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};
