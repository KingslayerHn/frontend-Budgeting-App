import React, { useState } from 'react';
import { IoAddCircleSharp } from 'react-icons/all';
import { Container, Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ModalAddAccount from '../components/ModalAddAccount';
import ItemCard from '../components/ItemAccountCard';
import ModalDeleteAccount from '../components/ModalDeleteAccount';

const Accounts = () => {
  const { items } = useSelector((state) => {
    return state.accounts;
  });

  const [modal, setModal] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);

  const handleOpenModal = () => {
    setModal(true);
  };
  const handleOpenModalDelete = () => {
    setModalDelete(true);
  };

  return (
    <Container>
      <ModalAddAccount modal={modal} setModal={setModal} />
      <ModalDeleteAccount modal={modalDelete} setModal={setModalDelete} />
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
      {items.length === 0 ? (
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
          Not have account yet!!
        </h1>
      ) : (
        <Row style={{ marginTop: 50 }}>
          {items.map((item) => (
            <Col xs={3} key={item._id}>
              <ItemCard
                {...item}
                modal={modalDelete}
                setModal={setModalDelete}
                item={item}
              />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Accounts;
