import React from 'react';
import Av from 'react-avatar';
import tempAvatar from '../../assets/avatar.svg';
import { serverUri } from '../../utils/uris';

const AvatarUserRef = ({ size, cursor, onClick, shadow, avatar }) => {
  return (
    <Av
      size={size}
      src={
        avatar && avatar !== ''
          ? `${serverUri}/api/image/profile/${avatar}`
          : `${tempAvatar}`
      }
      round
      style={{
        cursor: cursor,
        boxShadow: '-1px -1px 0px 5px #69b4ed',
      }}
      onClick={onClick}
    />
  );
};

export default AvatarUserRef;
