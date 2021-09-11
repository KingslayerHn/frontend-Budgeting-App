import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Table } from 'react-bootstrap';
import { IoAddCircleSharp } from 'react-icons/all';
import ModalAddTransference from '../components/ModalAddTransference';
import NumberFormat from 'react-number-format';
import moment from 'moment';

const Tranferences = () => {
  const transferences = useSelector((state) => state.transferences);
  const accounts = useSelector((state) => state.accounts);

  const [modal, setModal] = useState(false);

  const handleOpenModal = () => {
    setModal(true);
  };

  return (
    <Container>
      <ModalAddTransference modal={modal} setModal={setModal} />
      {accounts.items.length >= 2 && (
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

      {transferences.items.length === 0 ? (
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
          Not have Tranferences yet!!
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
                <th>Sender account</th>
                <th>Amount Sent</th>
                <th>Reciver account</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {transferences.items.map((item) => (
                <tr key={item._id}>
                  <td>{item.description}</td>
                  <td>{item.idSenderAccount}</td>
                  <td>
                    {
                      <NumberFormat
                        value={item.senderAmount}
                        prefix="$"
                        displayType="text"
                      />
                    }
                  </td>
                  <td>{item.idRecivedAccount}</td>
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

export default Tranferences;
