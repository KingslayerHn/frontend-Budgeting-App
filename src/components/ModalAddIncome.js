import React, { useState } from 'react';
import { Button, Col, Row, Toast, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addIncome } from '../redux/actions/incomes.action';
import { CgClose } from 'react-icons/all';
import { openModalAddIncome } from '../redux/actions/ui.action';
import NumberFormat from 'react-number-format';

const ModalAddIncomes = () => {
  const incomesDef = [
    'Rent',
    'Utilities',
    'Salary',
    'Dividents',
    'Interest',
    'Rest seeking',
    'Capital gains',
    'Tangible Assets',
    'Intangible Assets',
    'Bussines profits',
    'Freelancer',
    'Adicional Labour',
    'Unearned Incomes',
  ];

  const dispatch = useDispatch();
  const { accountRef } = useSelector((state) => state.references);
  const { modalAddIncome } = useSelector((state) => state.ui);

  const [formData, setFormData] = useState({
    description: 'Rent',
    amount: 0,
  });

  const { amount, description } = formData;

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const closeModalAddIncome = () => {
    dispatch(openModalAddIncome(false));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addIncome({
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
        show={modalAddIncome}
        style={{
          position: 'absolute',
          zIndex: 10000,
        }}
        onClose={closeModalAddIncome}
      >
        <Toast.Header closeButton={false}>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto" style={{ fontSize: 22 }}>
            INCOME
          </strong>
          <CgClose
            onClick={closeModalAddIncome}
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
                    autoComplete="off"
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
                    {incomesDef.map((a) => (
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
                    autoComplete="off"
                    type="number"
                    name="amount"
                    value={amount}
                    onChange={handleChange}
                  />
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

export default ModalAddIncomes;
