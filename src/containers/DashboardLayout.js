import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import avatar from '../assets/avatar.svg';
import { useSelector, useDispatch } from 'react-redux';
import Link from '../components/Links';
import {
  MdAccountBalance,
  BsBoxArrowInRight,
  BsBoxArrowInLeft,
  AiOutlineHistory,
  BiTransfer,
} from 'react-icons/all';
import { Redirect } from 'react-router-dom';

import { logout } from '../redux/actions/auth.action';

const Dashboard = ({ children }) => {
  const dispatch = useDispatch();

  const { isAuth } = useSelector((state) => state.auth);
  const {
    auth: { user },
  } = useSelector((state) => state);

  if (!isAuth) {
    return <Redirect to="/login" />;
  }

  const handleCloseSesion = () => {
    dispatch(logout());
  };

  const links = [
    {
      label: 'Accounts',
      to: '/',
      Image: <MdAccountBalance />,
    },
    {
      label: 'Expenses',
      to: '/expenses',
      Image: <BsBoxArrowInLeft />,
    },
    {
      label: 'Incomes',
      to: '/incomes',
      Image: <BsBoxArrowInRight />,
    },
    {
      label: 'Transfer',
      to: '/transfer',
      Image: <BiTransfer />,
    },
  ];

  return (
    <div>
      <Row>
        <Col xs={2} style={{ backgroundColor: '#6f5ed3', height: '100vh' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  backgroundImage: `url(${avatar})`,
                  height: 150,
                  borderRadius: '50%',
                  width: 150,
                  marginTop: 50,
                  marginBottom: 10,
                  fontFamily: 'Montserrat',
                }}
              />
              <h2 style={{ color: '#ff9064', fontSize: 22 }}>{`${
                user?.firstName.split(' ')[0]
              } ${user?.lastName.split(' ')[0]}`}</h2>
            </div>
          </div>
          <div
            style={{
              marginTop: 40,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              fontFamily: 'Montserrat',
            }}
          >
            {links.map((link) => (
              <Link Image={link.Image} label={link.label} to={link.to} />
            ))}
          </div>
          <div style={{ marginTop: 50 }}>
            <button
              style={{
                backgroundColor: 'transparent',
                outline: 'none',
                color: '#fff',
                width: '100%',
                border: 'none',
                fontSize: 20,
                fontFamily: 'Montserrat',
              }}
              onClick={handleCloseSesion}
            >
              Close sesion
            </button>
          </div>
        </Col>
        <Col xs={10}>{children}</Col>
      </Row>
    </div>
  );
};

export default Dashboard;
