import React, { useState } from 'react';
import Avatar from '../../components/user/AvatarUserRef';
import BiographyUserRef from '../user/BiographyUserRef';
import { Button } from 'react-bootstrap';
import { FaUserFriends, IoIosSend, TiCancel } from 'react-icons/all';
import { addFriend } from '../../redux/actions/friends.action';
import { useDispatch, useSelector } from 'react-redux';

const ProfileSelectedUser = (props) => {
  const dispatch = useDispatch();
  const [send, setSend] = useState(false);
  const { userRef } = useSelector((state) => state.references);

  const handleSendFriendRequest = () => {
    dispatch(addFriend({ friend: userRef._id }));
  };
  const handleCancelFriendship = () => {
    setSend(false);
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
        style={{
          marginLeft: 40,
          flex: 1,
          height: 'auto',
          paddingBottom: 10,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <BiographyUserRef {...props} />
        <div style={{ display: 'flex' }}>
          <Button
            variant={!send ? 'primary' : 'secondary'}
            style={{
              width: 'auto',
              fontWeight: 300,
              fontSize: 14,
              border: 'none',
              margin: 3,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onClick={handleSendFriendRequest}
            disabled={send}
          >
            {send ? (
              <>
                <IoIosSend style={{ fontSize: 14, marginRight: 5 }} />
                Sent
              </>
            ) : (
              <>
                <FaUserFriends style={{ fontSize: 14, marginRight: 5 }} />
                Add as Friend
              </>
            )}
          </Button>
          {send && (
            <Button
              variant={send ? 'primary' : 'secondary'}
              style={{
                width: 'auto',
                fontWeight: 300,
                fontSize: 14,
                border: 'none',
                margin: 3,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onClick={handleCancelFriendship}
            >
              <TiCancel style={{ fontSize: 14, marginRight: 5 }} />
              Cancel request?
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileSelectedUser;
