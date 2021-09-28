import React, { useState } from 'react';
import { InputGroup, FormControl, Button, Spinner } from 'react-bootstrap';
import { CgClose } from 'react-icons/all';
import { useDispatch } from 'react-redux';
import { addAccount } from '../../redux/actions/account.action';
import styles from '../../styles.module.scss';

const AddAccount = ({ setAdd }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    amount: 0,
    description: '',
  });
  const [loader, setLoader] = useState(false);
  const { description, amount } = formData;

  const cleanValues = () => {
    setFormData({
      amount: 0,
      description: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    dispatch(addAccount({ amount, description }));
    cleanValues();
    setLoader(false);
    setAdd(false);
  };
  const handleCloseAdd = () => {
    setAdd(false);
  };
  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
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
            maxLength={22}
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
            type="number"
          />
        </InputGroup>
        <div className={styles.buttonsAddAccount}>
          <Button
            type="submit"
            onClick={handleSubmit}
            disabled={description === '' || amount === '' || amount <= 0}
            style={{ width: 70 }}
            variant="primary"
          >
            {loader ? (
              <Spinner
                animation="border"
                style={{ fontSize: 8, width: 20, height: 20 }}
              />
            ) : (
              'Add'
            )}
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
