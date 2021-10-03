import React, { useState } from 'react';
import { Toast, Row, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { CgClose } from 'react-icons/all';
import { openModalUpdateUserImageProfile } from '../../redux/actions/ui.action';
import Avatar from 'react-avatar-edit';

const ModalUserAvatar = () => {
  const dispatch = useDispatch();
  const { modalUpdateImageProfile } = useSelector((state) => state.ui);
  const [preview, setPreview] = useState(null);
  const [tempFile, setTempFile] = useState(null);
  const [enabled, setEnabled] = useState(false);
  const [src, setSrc] = useState('');

  const closeModalUpdateProfileImage = () => {
    dispatch(openModalUpdateUserImageProfile(false));
  };

  const handleOnclose = () => {
    setPreview(null);
  };

  const b64toBlob = (dataURI) => {
    const byteString = atob(dataURI.split(',')[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);

    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: 'image/jpeg' });
  };

  const handleLoadFile = (file) => {
    setTempFile(file);
    setEnabled(true);
  };

  const handleOnCrop = (pv) => {
    setPreview(pv);
  };

  const handleOnBeforeFileLoad = (e) => {
    setTempFile(e.target.files[0]);
  };

  const handleUpdateImageProfile = () => {
    //TODO: handle update profile image
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
          width: 500,
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
        <Toast.Body
          style={{
            backgroundColor: '#fff',
            padding: 40,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar
            label="choose a file"
            labelStyle={{
              fontWeight: 300,
              color: '#B9C5E0',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            width={300}
            height={300}
            mimeTypes="image/jpeg,image/png"
            onCrop={handleOnCrop}
            exportAsSquare
            onClose={handleOnclose}
            onBeforeFileLoad={handleOnBeforeFileLoad}
            src={src}
            onFileLoad={handleLoadFile}
          />
          <div style={{ marginTop: 10 }}>
            <Button
              variant="primary"
              style={{ margin: 5 }}
              onClick={handleUpdateImageProfile}
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
