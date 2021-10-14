import React, { useEffect, useState } from 'react';
import Avatar from '../../components/user/AvatarUserRef';
import BiographyUserRef from '../user/BiographyUserRef';
import { Button } from 'react-bootstrap';
import { FaUserFriends, TiCancel } from 'react-icons/all';
import {
  addFriend,
  changeStatusOfFriendship,
  checkStatusFriendship,
  deleteWaitingFriendFromList,
} from '../../redux/actions/friends.action';
import { useDispatch, useSelector } from 'react-redux';

const ProfileSelectedUser = (props) => {
  const dispatch = useDispatch();
  const { userRef } = useSelector((state) => state.references);
  const { user } = useSelector((state) => state.auth);
  const [tempItem, setTempItem] = useState(null);

  useEffect(() => {
    checkStatusFriendship({ friend: userRef?._id })
      .then((frienship) => {
        setTempItem(frienship);
      })
      .catch((err) => console.log(err));
  }, [userRef._id]);

  const handleSendFriendRequest = () => {
    dispatch(addFriend({ friend: userRef?._id }));
    checkStatusFriendship({ friend: userRef?._id })
      .then((frienship) => {
        setTempItem(frienship);
      })
      .catch((err) => console.log(err));
  };

  const handleAcceptFriendship = async () => {
    dispatch(deleteWaitingFriendFromList(tempItem));
    await dispatch(
      changeStatusOfFriendship({
        status: 'accepted',
        friend: tempItem.data._id,
      })
    );

    checkStatusFriendship({ friend: userRef?._id })
      .then((frienship) => {
        setTempItem(frienship);
      })
      .catch((err) => console.log(err));
  };

  const handleDeclineFrienship = async () => {
    dispatch(deleteWaitingFriendFromList(tempItem));
    await dispatch(
      changeStatusOfFriendship({
        status: 'decline',
        friend: tempItem.data._id,
      })
    );

    checkStatusFriendship({ friend: userRef?._id })
      .then((frienship) => {
        setTempItem(frienship);
      })
      .catch((err) => console.log(err));
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
          {tempItem?.data?.status === 'sent' &&
            user._id === tempItem?.data?.sender && (
              <>
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
                  onClick={handleDeclineFrienship}
                >
                  <TiCancel style={{ fontSize: 14, marginRight: 5 }} />
                  Cancel request ?
                </Button>
              </>
            )}
          {tempItem?.data?.status === 'sent' &&
            tempItem?.data?.reciver === user._id && (
              <div style={{ display: 'flex', marginBottom: 10 }}>
                <Button
                  variant="primary"
                  style={{
                    width: 'auto',
                    border: 'none',
                    fontSize: 12,
                    margin: 2,
                  }}
                  onClick={handleAcceptFriendship}
                >
                  accept
                </Button>
                <Button
                  variant="danger"
                  style={{
                    width: 'auto',
                    border: 'none',
                    fontSize: 12,
                    margin: 2,
                  }}
                  onClick={handleDeclineFrienship}
                >
                  decline
                </Button>
              </div>
            )}

          {tempItem?.data?.status === 'accepted' && (
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
              onClick={handleDeclineFrienship}
            >
              <TiCancel style={{ fontSize: 14, marginRight: 5 }} />
              Cancel Friendship ?
            </Button>
          )}
          {tempItem?.type === 'none' && (
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
