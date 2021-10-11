import React, { useEffect } from 'react';
import Avatar from 'react-avatar';
import styles from '../styles.module.scss';
import tempAvatar from '../assets/avatar.svg';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetReferencesUsers } from '../redux/actions/search.action';
import { getUserReference } from '../redux/actions/references.action';

const AvatarSearch = ({
  firstName,
  lastName,
  profession,
  email,
  avatar,
  _id,
  item,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();

  const handleClickUserProfile = () => {
    dispatch(getUserReference(item));
    history.push(`/profile/?q=${_id}`);
    dispatch(resetReferencesUsers());
  };
  return (
    <div
      className={[styles.searchItemReference]}
      onClick={handleClickUserProfile}
    >
      <Avatar
        size={50}
        round
        src={
          avatar && avatar !== ''
            ? `api/image/profile/${avatar}`
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
        >{`${firstName} ${lastName}`}</h6>
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
      </div>
    </div>
  );
};

export default AvatarSearch;
