import React from 'react';
import { Toast, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAccount } from '../../redux/actions/account.action';
import { getAccountReference } from '../../redux/actions/references.action';
import { openModalDeleteAccount } from '../../redux/actions/ui.action';

const DeleteAccount = () => {
  const dispatch = useDispatch();
  const { modalDeleteAccount } = useSelector((state) => state.ui);
  const { accountRef } = useSelector((state) => state.references);

  const handleDeleteAccount = () => {
    dispatch(deleteAccount(accountRef._id));
    dispatch(openModalDeleteAccount(false));
    dispatch(getAccountReference(null));
  };

  const handleOpenModalDeleteAccount = () => {
    dispatch(openModalDeleteAccount(false));
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
        show={modalDeleteAccount}
        style={{
          position: 'absolute',
          zIndex: 10000,
        }}
        onClose={handleOpenModalDeleteAccount}
      >
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Delete Account</strong>
        </Toast.Header>
        <Toast.Body style={{ backgroundColor: '#fff', padding: 20 }}>
          <h5>Are you sure to delete this account?</h5>
          <div style={{ marginTop: 10 }}>
            <Button
              variant="primary"
              style={{ margin: 5 }}
              onClick={handleDeleteAccount}
            >
              delete
            </Button>
          </div>
        </Toast.Body>
      </Toast>
    </div>
  );
};

export default DeleteAccount;
