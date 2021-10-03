import React from 'react';
import { Toast, Row, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { CgClose } from 'react-icons/all';
import { openModalUpdateUserImageProfile } from '../../redux/actions/ui.action';

const ModalUserAvatar = () => {
  const dispatch = useDispatch();
  const { modalUpdateImageProfile } = useSelector((state) => state.ui);

  const closeModalUpdateProfileImage = () => {
    dispatch(openModalUpdateUserImageProfile(false));
  };
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%',
      }}
    >
      <Toast
        show={modalUpdateImageProfile}
        style={{
          position: 'absolute',
          zIndex: 10000,
        }}
        onClose={closeModalUpdateProfileImage}
      >
        <Toast.Header closeButton={false}>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Update profile image</strong>
          <CgClose
            onClick={closeModalUpdateProfileImage}
            style={{ cursor: 'pointer' }}
          />
        </Toast.Header>
        <Toast.Body style={{ backgroundColor: '#fff', padding: 20 }}>
          <Row className={['gx-0']}></Row>
          <div style={{ marginTop: 10 }}>
            <Button
              variant="primary"
              style={{ margin: 5 }}
              //   onClick={handleUpdateAccount}
            >
              update
            </Button>
          </div>
        </Toast.Body>
      </Toast>
    </div>
  );
};

export default ModalUserAvatar;
