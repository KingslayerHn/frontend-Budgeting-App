import React, { useEffect, useState } from 'react';
import Avatar from '../../components/user/AvatarUserRef';
import BiographyUserRef from '../user/BiographyUserRef';
import { Button } from 'react-bootstrap';
import { FaUserFriends, IoIosSend, TiCancel } from 'react-icons/all';
import {
  addFriend,
  checkStatusFriendship,
} from '../../redux/actions/friends.action';
import { useDispatch, useSelector } from 'react-redux';

const ProfileSelectedUser = (props) => {
  const dispatch = useDispatch();
  const { userRef } = useSelector((state) => state.references);
  const [type, setType] = useState(null);

  useEffect(() => {
    checkStatusFriendship({ friend: userRef?._id })
      .then((type) => setType(type))
      .catch((err) => console.log(err));
  }, [userRef._id]);

  const handleSendFriendRequest = () => {
    dispatch(addFriend({ friend: userRef?._id }));
    checkStatusFriendship({ friend: userRef?._id })
      .then((type) => setType(type))
      .catch((err) => console.log(err));
  };
  const handleCancelFriendship = () => {};

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
          {type === 'sent' && (
            <>
              <Button
                variant={'secondary'}
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
                disabled
              >
                <IoIosSend style={{ fontSize: 14, marginRight: 5 }} />
                Sent
              </Button>
              <Button
                variant="danger"
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
                Cancel request ?
              </Button>
            </>
          )}
          {type === 'accepted' && (
            <Button
              variant="danger"
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
              Cancel Friendship ?
            </Button>
          )}

          {type === 'none' && (
            <Button
              variant="primary"
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
            >
              <FaUserFriends style={{ fontSize: 14, marginRight: 5 }} />
              Add as Friend
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileSelectedUser;
