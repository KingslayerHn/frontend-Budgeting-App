import React from 'react';
import A from '../user/Avatar';
import { useHistory } from 'react-router-dom';
import { openModalEditProfile } from '../../redux/actions/ui.action';
import { getAccountReference } from '../../redux/actions/references.action';
import { useDispatch } from 'react-redux';

const Avatar = ({ data: { image, email, userName, w, h, ft, fe } }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClickAvatar = () => {
    history.push('/');
    dispatch(openModalEditProfile(false));
    dispatch(getAccountReference(null));
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1,
        cursor: 'pointer',
      }}
      onClick={handleClickAvatar}
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
