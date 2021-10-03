import React, { useState } from 'react';
import { Toast, Button, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { CgClose } from 'react-icons/all';
import { openModalUpdateUserImageProfile } from '../../redux/actions/ui.action';
import Avatar from 'react-avatar-edit';
import { addProfilImage } from '../../redux/actions/profile.image.action';

const ModalUserAvatar = () => {
  const dispatch = useDispatch();
  const { modalUpdateImageProfile } = useSelector((state) => state.ui);
  const { user } = useSelector((state) => state.auth);
  const [src, setSrc] = useState('');
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);
  const [tempFile, setTempFile] = useState(null);
  const [enabled, setEnabled] = useState(false);

  const closeModalUpdateProfileImage = () => {
    dispatch(openModalUpdateUserImageProfile(false));
  };

  const handleOnCrop = (pv) => {
    setPreview(pv);
    console.log(pv);
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

  const handleOnBeforeFileLoad = (e) => {
    setEnabled(true);
    setTempFile(e.target.files[0]);
  };
  const handleOnclose = () => {
    setPreview(null);
  };

  const handleLoadFile = (file) => {
    setLoading(true);
    setTempFile(file);
    setLoading(false);
  };

  const handleUpdateImageProfile = () => {
    setLoading(true);
    setEnabled(false);
    const formData = new FormData();
    const blob = b64toBlob(preview);
    formData.append('file', blob);
    dispatch(addProfilImage(formData, user?.avatar));
    setLoading(false);
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
          <strong className="me-auto">Profile image</strong>
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
            exportQuality={0.5}
          />
          <div style={{ marginTop: 10 }}>
            <Button
              variant="primary"
              style={{ margin: 5 }}
              onClick={handleUpdateImageProfile}
              disabled={!enabled}
            >
              {loading ? '...' : 'update'}
            </Button>
          </div>
        </Toast.Body>
      </Toast>
    </div>
  );
};

export default ModalUserAvatar;
