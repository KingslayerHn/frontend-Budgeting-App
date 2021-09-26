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

  return <Container>account</Container>;
};

export default Accounts;
