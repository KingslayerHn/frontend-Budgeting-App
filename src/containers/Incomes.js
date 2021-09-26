import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Table } from 'react-bootstrap';
import { IoAddCircleSharp } from 'react-icons/all';
import ModalAddIncome from '../components/ModalAddIncome';
import NumberFormat from 'react-number-format';
import moment from 'moment';

const Incomes = () => {
  const incomes = useSelector((state) => state.incomes);
  const accounts = useSelector((state) => state.accounts);

  const [modal, setModal] = useState(false);

  const handleOpenModal = () => {
    setModal(true);
  };

  return (
    <Container>
      <ModalAddIncome modal={modal} setModal={setModal} />
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

      {incomes.items.length === 0 ? (
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
          Not have Incomes yet!!
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
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {incomes.items.map((item) => (
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
                  <td>{moment(item.createAt).format('LL')}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Row>
      )}
    </Container>
  );
};

export default Incomes;
