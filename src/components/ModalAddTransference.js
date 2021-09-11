import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useForm } from '../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import Alert from './Alert';
import styles from '../styles.module.scss';
import { addTransference } from '../redux/actions/transferences.action';

const ModalAddTransference = ({ modal, setModal }) => {
  const dispatch = useDispatch();
  const [sender, setSender] = useState([]);
  const [recived, setRecived] = useState([]);

  const handleClose = () => {
    setSender([]);
    setRecived([]);
    setModal(false);
  };
  const accounts = useSelector((state) => state.accounts);
  const [{ description, senderAmount }, handleInputChange] = useForm({
    description: '',
    senderAmount: 0,
  });
  const handleSenderAccountChange = (e) => {
    const selected = accounts.items.filter((a) => a._id === e.target.value);
    setSender(selected);
  };
  const handleReciverAccountChange = (e) => {
    const selected = accounts.items.filter((a) => a._id === e.target.value);
    setRecived(selected);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addTransference({
        senderAmount: parseFloat(senderAmount),
        description: description,
        idSenderAccount: sender[0]._id,
        idRecivedAccount: recived[0]._id,
        actualSenderAmount: sender[0].amount,
        actualRecivedAmount: recived[0].amount,
      })
    );
    setModal(false);
  };
  return (
    <Modal show={modal} onHide={handleClose} keyboard={false}>
      <Alert />
      <Modal.Header closeButton>
        <Modal.Title>Transference</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className={styles.login} onSubmit={handleSubmit}>
          <div>
            <div>
              <label>¿Why need to send money?</label>
              <input
                autoComplete="false"
                type="text"
                name="description"
                value={description}
                onChange={handleInputChange}
              />
            </div>
            <label>¿Which account send?</label>
            <select
              style={{
                borderBottom: ' 1px solid #afe0fc !important',
                borderTop: 'none',
                borderRight: 'none',
                borderLeft: 'none',
                paddingBottom: 10,
              }}
              autoComplete="false"
              type="select"
              name="senderAmount"
              className={styles.register}
              onChange={handleSenderAccountChange}
            >
              <option value="" selected disabled hidden>
                select acount
              </option>
              {accounts.items.map((a) => (
                <option key={a._id} value={a._id}>
                  {a.description}
                </option>
              ))}
            </select>
            {sender.length !== 0 && (
              <label>Available : {`${sender[0].amount}`}</label>
            )}
          </div>
          <div>
            <label>¿How much?</label>
            <input
              autoComplete="false"
              type="number"
              name="senderAmount"
              value={senderAmount}
              onChange={handleInputChange}
            />
            {sender.length !== 0 &&
              parseFloat(senderAmount) > sender[0].amount && (
                <label style={{ color: 'red' }}>
                  You don't have all that money
                </label>
              )}
          </div>

          <div>
            <label>¿Which account recive?</label>
            <select
              style={{
                borderBottom: ' 1px solid #afe0fc !important',
                borderTop: 'none',
                borderRight: 'none',
                borderLeft: 'none',
                paddingBottom: 10,
              }}
              autoComplete="false"
              type="select"
              name="recivedAmount"
              className={styles.register}
              onChange={handleReciverAccountChange}
            >
              <option value="" selected disabled hidden>
                select acount
              </option>
              {accounts.items.map((a) => (
                <option key={a._id} value={a._id}>
                  {a.description}
                </option>
              ))}
            </select>
            {sender.length !== 0 &&
              recived.length !== 0 &&
              sender[0]._id === recived[0]._id && (
                <label style={{ color: 'red' }}>
                  You can't send to the same account
                </label>
              )}
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
              sender.length === 0 ||
              recived.length === 0 ||
              sender[0]._id === recived[0]._id ||
              parseFloat(senderAmount) > sender[0].amount ||
              description === ''
            }
          >
            Send
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalAddTransference;
