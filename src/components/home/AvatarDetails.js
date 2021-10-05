import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  FaUserAstronaut,
  AiOutlineMail,
  IoMaleFemaleOutline,
} from 'react-icons/all';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { openModalUpdateUserImageProfile } from '../../redux/actions/ui.action';
import Avatar from '../user/Avatar';

const AvatarDetails = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleOpenModalUpdateImageProfile = () => {
    dispatch(openModalUpdateUserImageProfile(true));
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 40,
      }}
    >
      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip id="tooltip-disabled">update</Tooltip>}
      >
        <span className="d-inline-block">
          <Avatar
            size={200}
            cursor={'pointer'}
            onClick={handleOpenModalUpdateImageProfile}
            shadow
          />
        </span>
      </OverlayTrigger>

      <div style={{ paddingTop: 25 }}>
        <div style={{ display: 'flex', alignSelf: 'start', marginBottom: 5 }}>
          <FaUserAstronaut
            style={{ color: '#fd6900', fontSize: 20, marginRight: 10 }}
          />
          <h5 style={{ fontWeight: 300, fontSize: 17, margin: 0 }}>
            <b style={{ fontWeight: 600, color: '#4e6ef5' }}>{20}</b> friends
          </h5>
        </div>
        <div style={{ display: 'flex', alignSelf: 'start' }}>
          <AiOutlineMail
            style={{
              color: '#4e6ef5',
              fontSize: 20,
              marginRight: 10,
            }}
          />
          <h5 style={{ fontWeight: 300, fontSize: 17 }}>{user?.email}</h5>
        </div>
        <div style={{ display: 'flex', alignSelf: 'start', marginBottom: 5 }}>
          <IoMaleFemaleOutline
            style={{ color: '#979899', fontSize: 20, marginRight: 10 }}
          />
          <h5 style={{ fontWeight: 300, fontSize: 17, margin: 0 }}>
            {user?.genre}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default AvatarDetails;
