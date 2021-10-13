import React, { useState } from 'react';
import Avatar from '../../components/user/AvatarUserRef';
import BiographyUserRef from '../user/BiographyUserRef';
import { Button } from 'react-bootstrap';
import { FaUserFriends, IoIosSend } from 'react-icons/all';

const ProfileSelectedUser = (props) => {
  const [send, setSend] = useState(false);

  const handleSendFriendRequest = () => {
    setSend(!send);
  };
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
      <div
        style={{ marginLeft: 40, flex: 1, height: 'auto', paddingBottom: 10 }}
      >
        <BiographyUserRef {...props} />
        <Button
          variant={!send ? 'primary' : 'secondary'}
          style={{
            width: 'auto',
            fontWeight: 300,
            fontSize: 14,
            border: 'none',
          }}
          onClick={handleSendFriendRequest}
        >
          {send ? (
            <>
              <IoIosSend style={{ fontSize: 14, marginRight: 5 }} />
              Send
            </>
          ) : (
            <>
              <FaUserFriends style={{ fontSize: 14, marginRight: 5 }} />
              Add as Friend
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default ProfileSelectedUser;
