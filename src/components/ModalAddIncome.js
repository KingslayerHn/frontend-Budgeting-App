import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useForm } from '../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import Alert from './Alert';
import styles from '../styles.module.scss';
import { addIncome } from '../redux/actions/incomes.action';

const ModalAddIncome = ({ modal, setModal }) => {
  const expensesDefData = [
    'Rent',
    'Utilities',
    'Electricity',
    'Internet',
    'Cellphone plan',
    'Travel expences',
    'Insurance',
    'Administrative and general supply',
    'Food',
    'clothes',
    'laundry',
    'University',
    'School',
  ];
  const dispatch = useDispatch();
  const [account, setAccount] = useState([]);

  const handleClose = () => {
    setAccount([]);
    setModal(false);
  };
  const accounts = useSelector((state) => state.accounts);
  const [{ description, amount }, handleInputChange] = useForm({
    description: '',
    amount: 0,
  });
  const handleSelectChange = (e) => {
    const selected = accounts.items.filter((a) => a._id === e.target.value);
    setAccount(selected);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addIncome({
        amount: amount,
        description,
        id: account[0]._id,
        amountAccount: account[0].amount,
      })
    );
    setModal(false);
  };
  return (
    <Modal show={modal} onHide={handleClose} keyboard={false}>
      <Alert />
      <Modal.Header closeButton>
        <Modal.Title>Add Income</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className={styles.login} onSubmit={handleSubmit}>
          <div>
            <label>Select account to add income</label>
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
              name="account"
              className={styles.register}
              onChange={handleSelectChange}
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
            {account.length !== 0 && (
              <label>Available : {`${account[0].amount}`}</label>
            )}
          </div>
          <div>
            <label>Select income</label>
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
              name="description"
              className={styles.register}
              value={description}
              onChange={handleInputChange}
            >
              <option value="" selected disabled hidden>
                select income
              </option>
              {expensesDefData.map((a) => (
                <option key={a}>{a}</option>
              ))}
            </select>
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
            disabled={amount <= 0 || description === ''}
          >
            Add
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalAddIncome;
