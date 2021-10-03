import React from 'react';
import A from '../user/Avatar';

const Avatar = ({ data: { image, email, userName, w, h, ft, fe } }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1,
      }}
    >
      <A size={70} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginLeft: 20,
        }}
      >
        <span style={{ fontWeight: 600, fontSize: ft, color: '#4e6ef5' }}>
          {userName}
        </span>
        <span style={{ fontSize: fe, fontWeight: 400, color: '#A8A7A9' }}>
          {email}
        </span>
      </div>
    </div>
  );
};

export default Avatar;
