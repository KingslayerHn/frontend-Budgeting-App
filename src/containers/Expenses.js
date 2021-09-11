import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Table } from 'react-bootstrap';
import { IoAddCircleSharp } from 'react-icons/all';
import ModalAddExpenses from '../components/ModalAddExpenses';
import { GET_ACCOUNTS } from '../redux/types';
import NumberFormat from 'react-number-format';

const Expenses = () => {
  const expenses = useSelector((state) => state.expenses);
  const accounts = useSelector((state) => state.accounts);

  const [modal, setModal] = useState(false);

  const handleOpenModal = () => {
    setModal(true);
  };

  return (
    <Container>
      <ModalAddExpenses modal={modal} setModal={setModal} />
      {accounts.items.length !== 0 && (
        <IoAddCircleSharp
          style={{
            position: 'absolute',
            bottom: 50,
            right: 80,
            fontSize: 80,
            color: '#fff',
            cursor: 'pointer',
          }}
          onClick={handleOpenModal}
        />
      )}

      {expenses.items.length === 0 ? (
        <h1
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            height: '100vh',
            color: '#fff',
          }}
        >
          Not have Expense yet!!
        </h1>
      ) : (
        <Row style={{ marginTop: 50 }}>
          <Table
            striped
            bordered
            hover
            style={{ marginTop: 30, backgroundColor: '#fff' }}
          >
            <thead>
              <tr>
                <th>Description</th>
                <th>Account</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {expenses.items.map((item) => (
                <tr key={item._id}>
                  <td>{item.description}</td>
                  <td>{item.account}</td>
                  <td>
                    {
                      <NumberFormat
                        value={item.amount}
                        prefix="$"
                        displayType="text"
                      />
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Row>
      )}
    </Container>
  );
};

export default Expenses;
