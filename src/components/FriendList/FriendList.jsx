import React from 'react';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <div className={css.list}>
      <ul className={css.friendlist}>
        {friends.map(friend => (
          <li className={css.item} key={friend.id}>
            <span
              className={`${css.status} ${friend.isOnline ? css.off : ''}`}
            ></span>
            <img
              className="avatar"
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p className={css.name}>{friend.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
