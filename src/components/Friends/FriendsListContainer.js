import React from 'react';
import { useSelector } from 'react-redux';
import AvatarSearch from '../AvatarSearch';

const FriendsListContainer = () => {
  const { friends } = useSelector((state) => state.friends);
  const { user } = useSelector((state) => state.auth);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        maxHeight: 700,
        overflowY: 'auto',
      }}
    >
      {friends.length > 0 ? (
        friends.map((item) =>
          item?.sender._id !== user._id ? (
            <AvatarSearch {...item?.sender} key={item?._id} pointer />
          ) : (
            <AvatarSearch {...item?.reciver} key={item?._id} pointer />
          )
        )
      ) : (
        <p
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#69b4ed',
            fontWeight: 300,
          }}
        >
          Not have friends yet!!
        </p>
      )}
    </div>
  );
};

export default FriendsListContainer;
