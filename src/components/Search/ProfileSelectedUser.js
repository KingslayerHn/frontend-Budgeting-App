import React from 'react';
import Avatar from '../../components/user/AvatarUserRef';
import BiographyUserRef from '../user/BiographyUserRef';

const ProfileSelectedUser = (props) => {
  return (
    <div style={{ display: 'flex' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Avatar avatar={props.avatar} shadow size={170} />
      </div>
      <div style={{ marginLeft: 40, flex: 1 }}>
        <BiographyUserRef {...props} />
      </div>
    </div>
  );
};

export default ProfileSelectedUser;
