import React, { useState } from 'react';
import { Button, Col, Row, Toast, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addExpense } from '../redux/actions/expenses.action';
import { CgClose } from 'react-icons/all';
import { openModalAddExpense } from '../redux/actions/ui.action';
import NumberFormat from 'react-number-format';

const ModalAddExpenses = () => {
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
  const { accountRef } = useSelector((state) => state.references);
  const { modalAddExpense } = useSelector((state) => state.ui);

  const [formData, setFormData] = useState({
    description: 'Rent',
    amount: 0,
  });

  const { amount, description } = formData;

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const closeModalAddExpense = () => {
    dispatch(openModalAddExpense(false));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addExpense({
        amount: parseFloat(amount),
        description,
        id: accountRef._id,
        amountAccount: accountRef.amount,
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
        show={modalAddExpense}
        style={{
          position: 'absolute',
          zIndex: 10000,
        }}
        onClose={closeModalAddExpense}
      >
        <Toast.Header closeButton={false}>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">ADD EXPENSE</strong>
          <CgClose
            onClick={closeModalAddExpense}
            style={{ cursor: 'pointer' }}
          />
        </Toast.Header>
        <Toast.Body style={{ backgroundColor: '#fff', padding: 20 }}>
          <Row className={['gx-0']}>
            <Col xs={12}>
              <Form onSubmit={handleSubmit}>
                <div>
                  <h4 style={{ fontWeight: 300 }}>Account:</h4>
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
                <div>
                  <Form.Select
                    autoComplete="false"
                    name="description"
                    aria-label="Default select example"
                    onChange={handleChange}
                    style={{
                      borderRadius: 10,
                      marginTop: 10,
                      marginBottom: 10,
                      color: '#69b4ed',
                    }}
                  >
                    {expensesDefData.map((a) => (
                      <option key={a} value={a}>
                        {a}
                      </option>
                    ))}
                  </Form.Select>
                </div>
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
                    autoComplete="false"
                    type="number"
                    name="amount"
                    value={amount}
                    onChange={handleChange}
                  />
                  {amount > accountRef.amount && (
                    <h6
                      style={{
                        fontWeight: 300,
                        color: 'red',
                        fontSize: 13,
                      }}
                    >
                      The amount cannot be greater than the amount available in
                      your account
                    </h6>
                  )}
                </div>
              </Form>
            </Col>
          </Row>
          <div style={{ marginTop: 10 }}>
            <Button
              variant="primary"
              style={{ margin: 5 }}
              onClick={handleSubmit}
              disabled={description.trim() <= 3 || amount <= 0}
            >
              Add
            </Button>
          </div>
        </Toast.Body>
      </Toast>
    </div>
  );
};

export default ModalAddExpenses;
