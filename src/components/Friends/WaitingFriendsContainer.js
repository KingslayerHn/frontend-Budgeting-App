import React from 'react';
import { useSelector } from 'react-redux';
import AvatarSearch from '../AvatarSearch';

const WaitingFriendsContainer = () => {
  const { waiting } = useSelector((state) => state.friends);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        maxHeight: 700,
        overflowY: 'auto',
      }}
    >
      {waiting.length > 0 ? (
        waiting.map((item) => (
          <AvatarSearch
            {...item.sender}
            key={item._id}
            friendWait
            onClick
            friend={item}
          />
        ))
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

export default WaitingFriendsContainer;
