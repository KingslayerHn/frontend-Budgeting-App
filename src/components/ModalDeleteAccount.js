import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAccount } from '../redux/actions/account.action';
import { getAccountReference } from '../redux/actions/references.action';
import styles from '../styles.module.scss';

const ModalDeleteAccount = ({ modal, setModal }) => {
  const dispatch = useDispatch();
  const { accountRef } = useSelector((state) => state.references);

  const handleClose = () => {
    dispatch(getAccountReference(null));
    setModal(false);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteAccount(accountRef._id));
    dispatch(getAccountReference(null));
    setModal(false);
  };
  return (
    <Modal show={modal} onHide={handleClose} keyboard={false} centered>
      <Modal.Header closeButton>
        <Modal.Title>Delete Account</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 style={{ color: 'red' }}>
          Are you sure want to delete this acount?
        </h4>
      </Modal.Body>
      <Modal.Footer>
        <div className={styles.buttons}>
          <Button className={styles.secondary} onClick={handleClose}>
            Cancel
          </Button>
          <Button className={styles.primary} onClick={handleDelete}>
            Delete
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalDeleteAccount;
