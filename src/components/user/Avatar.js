import React from 'react';
import Av from 'react-avatar';
import { useSelector } from 'react-redux';
import tempAvatar from '../../assets/avatar.svg';
import { serverUri } from '../../utils/uris';

const Avatar = ({ size, cursor, onClick, shadow }) => {
  const { user } = useSelector((state) => state.auth);

  return (
    <Av
      size={size}
      src={
        user.avatar && user.avatar !== ''
          ? `${serverUri}/api/image/profile/${user.avatar}`
          : `${tempAvatar}`
      }
      round
      style={{
        cursor: cursor,
        boxShadow: shadow && '-10px -10px 0px -2px #4e6ef5',
      }}
      onClick={onClick}
    />
  );
};

export default Avatar;
