import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useForm } from '../hooks/useForm';
import { useDispatch } from 'react-redux';
import styles from '../styles.module.scss';
import { addAccount } from '../redux/actions/account.action';

const ModalAddAccount = ({ modal, setModal }) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    cleanValues();
    setModal(false);
  };

  const [formData, setFormData] = useState({
    description: '',
    amount: 0,
  });

  const handleInputChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };
  const cleanValues = () => {
    setFormData({
      amount: 0,
      description: '',
    });
  };

  const { amount, description } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addAccount({ amount, description }));
    cleanValues();
    setModal(false);
  };
  return (
    <Modal show={modal} onHide={handleClose} keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Add Account</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className={styles.login} onSubmit={handleSubmit}>
          <div>
            <label>description</label>
            <input
              autoComplete="false"
              type="text"
              name="description"
              value={description}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>amount</label>
            <input
              autoComplete="false"
              type="number"
              name="amount"
              value={amount}
              onChange={handleInputChange}
            />
          </div>
        </Form>
        <div className={styles.buttons}>
          <Button className={styles.secondary} onClick={handleClose}>
            Cancel
          </Button>
          <Button
            className={styles.primary}
            onClick={handleSubmit}
            disabled={
              amount <= 0 || description === '' || description.length < 5
            }
          >
            Add
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalAddAccount;
