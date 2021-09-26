import React, { useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { CgClose } from 'react-icons/all';
import { useDispatch } from 'react-redux';
import { addAccount } from '../../redux/actions/account.action';
import styles from '../../styles.module.scss';
import NumberFormat from 'react-number-format';

const AddAccount = ({ setAdd }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    amount: 0,
    description: '',
  });
  const { description, amount } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addAccount({ amount, description }));
    setAdd(false);
  };
  const handleCloseAdd = () => {
    setAdd(false);
  };
  const handleChange = ({ target }) => {
    if (target.name === 'amount') {
      setFormData({ ...formData, [target.name]: parseFloat(target.value) });
    } else {
      setFormData({ ...formData, [target.name]: target.value });
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div className={styles.addAccount}>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="title"
            aria-label="description"
            aria-describedby="basic-addon1"
            name="description"
            value={description}
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="amount"
            aria-label="amount"
            aria-describedby="basic-addon1"
            name="amount"
            value={amount}
            onChange={handleChange}
            as={NumberFormat}
          />
        </InputGroup>
        <div className={styles.buttonsAddAccount}>
          <Button
            onClick={handleSubmit}
            disabled={description === '' || amount === ''}
          >
            Add
          </Button>

          <CgClose
            onClick={handleCloseAdd}
            style={{
              fontSize: 30,
              fontWeight: 600,
              cursor: 'pointer',
              margin: 5,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AddAccount;
