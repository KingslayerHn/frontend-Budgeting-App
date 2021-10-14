import React, { useState } from 'react';
import Avatar from 'react-avatar';
import styles from '../styles.module.scss';
import tempAvatar from '../assets/avatar.svg';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { resetReferencesUsers } from '../redux/actions/search.action';
import { getUserReference } from '../redux/actions/references.action';
import { serverUri } from '../utils/uris';
import {
  deleteWaitingFriendFromList,
  changeStatusOfFriendship,
} from '../redux/actions/friends.action';

const AvatarSearch = ({
  firstName,
  lastName,
  keywords,
  profession,
  email,
  avatar,
  _id,
  item,
  onClick,
  pointer,
  friendWait,
  friend,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClickUserProfile = () => {
    if (!onClick) {
      dispatch(getUserReference(item));
      history.push(`/profile/?q=${_id}`);
      dispatch(resetReferencesUsers());
    }
  };
  const handleAcceptFriendship = () => {
    dispatch(deleteWaitingFriendFromList(friend));
    dispatch(
      changeStatusOfFriendship({
        status: 'accepted',
        friend: friend._id,
      })
    );
  };
  const handleDeclineFrienship = () => {
    dispatch(deleteWaitingFriendFromList(friend));
    dispatch(
      changeStatusOfFriendship({
        status: 'decline',
        friend: friend._id,
      })
    );
  };
  return (
    <div
      className={[styles.searchItemReference]}
      onClick={handleClickUserProfile}
      style={{ cursor: pointer && 'pointer' }}
    >
      <Avatar
        size={50}
        round
        src={
          avatar && avatar !== ''
            ? `${serverUri}/api/image/profile/${avatar}`
            : `${tempAvatar}`
        }
      />
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          flexDirection: 'column',
          paddingLeft: 20,
        }}
      >
        <h6
          style={{
            margin: 0,
            padding: 0,
            fontSize: 14,
            fontWeight: 600,
            color: '#6a84f5',
          }}
        >
          {keywords}
        </h6>
        <span
          style={{
            margin: 0,
            padding: 0,
            fontSize: 13,
            color: '#69b4ed',
            fontWeight: 500,
          }}
        >
          {profession}
        </span>
        <span style={{ fontSize: 13, color: '#3d6586' }}>{email}</span>
        {friendWait && (
          <div style={{ display: 'flex', marginBottom: 10 }}>
            <Button
              variant="primary"
              style={{ width: 'auto', border: 'none', fontSize: 12, margin: 2 }}
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
      </div>
    </div>
  );
};

export default AvatarSearch;
