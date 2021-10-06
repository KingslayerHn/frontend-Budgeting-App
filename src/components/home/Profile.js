import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from '../../styles.module.scss';
import AvatarDetails from './AvatarDetails';
import { FiEdit } from 'react-icons/all';
import Biography from './Biography';
import { useDispatch } from 'react-redux';
import { openModalEditProfile } from '../../redux/actions/ui.action';

const Profile = () => {
  const dispatch = useDispatch();
  const handleOpenEditProfile = () => {
    dispatch(openModalEditProfile(true));
  };

  return (
    <>
      <Row className={[styles.profileContainer, 'gx-0']}>
        <div
          style={{
            position: 'absolute',
            top: 20,
            left: -20,
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <FiEdit
            style={{ fontSize: 20, color: '#69b4ed', cursor: 'pointer' }}
            onClick={handleOpenEditProfile}
          />
        </div>
        <Col xs={5}>
          <AvatarDetails />
        </Col>
        <Col
          xs={7}
          style={{ padding: 30, display: 'flex', alignItems: 'center' }}
        >
          <Biography />
        </Col>
      </Row>
      <Row
        className="gx-0"
        style={{
          padding: 20,
          backgroundColor: '#fff',
          borderRadius: 20,
          width: '100%',
          marginTop: 20,
        }}
      >
        <Col xs={12}>
          permitirá ver total global de todas las transacciones, incomes,
          expences. hasta la fecha que fue creada la cuenta
        </Col>
      </Row>
    </>
  );
};

export default Profile;
