import React from 'react';
import { Profile } from './profile/profile';
import user from './profile/user.json';
import { Statistics } from './statistics/statistics';
import data from './statistics/data.json';
import { FriendList } from './friendlist/friendlist';
import friends from './friendlist/friends.json';
import { TransactionHistory } from './transactionhistory/transactionhistory';
import transactions from './transactionhistory/transactions.json';
export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
