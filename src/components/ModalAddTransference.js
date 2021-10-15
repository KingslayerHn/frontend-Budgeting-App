import React, { useState, useEffect } from 'react';
import {
  Button,
  Col,
  Row,
  Toast,
  Form,
  InputGroup,
  FormControl,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addTransference } from '../redux/actions/transferences.action';
import { CgClose } from 'react-icons/all';
import { openModalAddTransference } from '../redux/actions/ui.action';
import NumberFormat from 'react-number-format';

const ModalAddTransference = () => {
  const dispatch = useDispatch();
  const { accountRef } = useSelector((state) => state.references);
  const accounts = useSelector((state) => state.accounts);
  const { modalAddTransference } = useSelector((state) => state.ui);
  const [stateAccounts, setStateAccounts] = useState([]);
  const [recived, setRecived] = useState(null);

  const [formData, setFormData] = useState({
    description: '',
    amount: 0,
  });

  useEffect(() => {
    const tempAccounts = accounts.items.filter(
      (item) => item._id !== accountRef._id
    );

    setStateAccounts(tempAccounts);
  }, [accounts, accountRef._id]);

  const { amount, description } = formData;

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const closeModalAddTransference = () => {
    dispatch(openModalAddTransference(false));
  };

  const handleReciverAccountChange = (e) => {
    const selected = accounts.items.filter((a) => a._id === e.target.value);
    setRecived(selected);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addTransference({
        senderAmount: parseFloat(amount),
        description: description,
        idSenderAccount: accountRef._id,
        idRecivedAccount: recived[0]._id,
        actualSenderAmount: accountRef.amount,
        actualRecivedAmount: recived[0].amount,
      })
    );
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
        show={modalAddTransference}
        style={{
          position: 'absolute',
          zIndex: 10000,
        }}
        onClose={closeModalAddTransference}
      >
        <Toast.Header closeButton={false}>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto" style={{ fontSize: 22 }}>
            TRANSFERENCE
          </strong>
          <CgClose
            onClick={closeModalAddTransference}
            style={{ cursor: 'pointer' }}
          />
        </Toast.Header>
        <Toast.Body style={{ backgroundColor: '#fff', padding: 20 }}>
          <Row className={['gx-0']}>
            <Col xs={12}>
              <Form onSubmit={handleSubmit}>
                <div style={{ marginBottom: 10 }}>
                  <h4 style={{ fontWeight: 300 }}>Sender account:</h4>
                  <div
                    style={{ fontSize: 30, color: '#69b4ed', fontWeight: 600 }}
                  >
                    {accountRef?.description}
                  </div>
                  <div style={{ fontSize: 22, color: '#ff7400' }}>
                    {`Balance: `}
                    <NumberFormat
                      value={accountRef?.amount}
                      prefix="$"
                      displayType="text"
                    />
                  </div>
                </div>

                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Reason"
                    aria-label="description"
                    aria-describedby="basic-addon1"
                    name="description"
                    autoComplete="off"
                    value={description}
                    onChange={handleChange}
                    type="text"
                    style={{
                      fontSize: 16,
                      color: '#69b4ed',
                      fontWeight: 400,
                      borderRadius: 10,
                    }}
                  />
                </InputGroup>

                {stateAccounts.length > 0 && (
                  <div>
                    <label style={{ color: '#fd6900' }}>
                      Account to recive
                    </label>
                    <Form.Select
                      autoComplete="off"
                      aria-label="Default select example"
                      onChange={handleReciverAccountChange}
                      style={{
                        borderRadius: 10,
                        marginTop: 10,
                        marginBottom: 10,
                        color: '#69b4ed',
                      }}
                      defaultValue={stateAccounts[0]}
                    >
                      <option value="" hidden>
                        Select account
                      </option>
                      {stateAccounts.map((a) => (
                        <option key={a._id} value={a._id}>
                          {a.description}
                        </option>
                      ))}
                    </Form.Select>
                  </div>
                )}

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '80%',
                  }}
                >
                  <label style={{ color: '#fd6900' }}>Amount</label>
                  <input
                    style={{
                      borderRadius: 10,
                      border: '1px solid #B2B1B3',
                      padding: 7,
                      marginBottom: 5,
                      marginTop: 5,
                      fontWeight: 300,
                      color: '#69b4ed',
                    }}
                    autoComplete="off"
                    type="number"
                    name="amount"
                    value={amount}
                    onChange={handleChange}
                  />
                </div>

                {amount > accountRef.amount && (
                  <h6
                    style={{
                      fontWeight: 300,
                      color: 'red',
                      fontSize: 13,
                    }}
                  >
                    The amount cannot be greater than the amount available in
                    the sender account
                  </h6>
                )}
              </Form>
            </Col>
          </Row>
          <div style={{ marginTop: 10 }}>
            <Button
              variant="primary"
              style={{ margin: 5, width: 'auto' }}
              onClick={handleSubmit}
              disabled={
                description.trim() <= 3 ||
                amount <= 0 ||
                !recived ||
                amount > accountRef.amount
              }
            >
              Transfer
            </Button>
          </div>
        </Toast.Body>
      </Toast>
    </div>
  );
};

export default ModalAddTransference;
