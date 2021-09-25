import React, { useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import avatar from '../assets/avatar.svg';
import { useSelector, useDispatch } from 'react-redux';
import Link from '../components/Links';
import Alert from '../components/Alert';
import {
  BsGraphUp,
  BsBoxArrowInRight,
  BsBoxArrowInLeft,
  BiTransfer,
  FaUserFriends,
  MdAccountBalance,
} from 'react-icons/all';
import { Redirect } from 'react-router-dom';

import { logout } from '../redux/actions/auth.action';
import Alerts from '../components/Alert';

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
    {
      label: 'Friends',
      to: '/friends',
      Image: <FaUserFriends />,
    },
  ];

  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex' }}>
      <section
        style={{
          width: '20%',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Container
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              flex: 1,
            }}
          >
            <BsGraphUp
              style={{ fontSize: 80, fontWeight: 600, color: '#fff' }}
            />
          </div>

          <div
            style={{
              flex: 2,
            }}
          >
            {links.map((link, index) => (
              <Link
                Image={link.Image}
                label={link.label}
                to={link.to}
                key={index}
              />
            ))}
          </div>
        </Container>
      </section>
      <section
        style={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            borderRadius: 60,
            backgroundColor: '#fff',
            width: '98%',
            height: '98%',
            border: 'none',
          }}
        >
          <Row style={{ height: '100%' }}>
            <Col
              xs={9}
              style={{
                minHeight: '100%',
                display: 'flex',
                flexDirection: 'column',
                padding: 40,
              }}
            >
              bhola
            </Col>
            <Col
              xs={3}
              style={{
                borderLeft: '2px solid #F7F8FC',
                minHeight: '100%',
                display: 'flex',
                flexDirection: 'column',
                padding: 30,
              }}
            >
              como estas
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;

{
  /* <div
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
          </div> */
}
