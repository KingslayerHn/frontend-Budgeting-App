import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import avatar from '../assets/avatar.svg';
import { useSelector, useDispatch } from 'react-redux';
import Link from '../components/Links';
import {
  BsGraphUp,
  BsBoxArrowInRight,
  BsBoxArrowInLeft,
  BiTransfer,
  FaUserFriends,
  AiOutlineHome,
} from 'react-icons/all';
import { Redirect, useHistory } from 'react-router-dom';
import { logout } from '../redux/actions/auth.action';
import Avatar from '../components/dashboard/Avatar';

import styles from '../styles.module.scss';

const Dashboard = ({ children }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { isAuth } = useSelector((state) => state.auth);
  const {
    auth: { user },
  } = useSelector((state) => state);

  if (!isAuth) {
    return <Redirect to="/login" />;
  }

  const handleCloseSesion = () => {
    dispatch(logout());
    history.push('/login');
  };

  const links = [
    {
      label: 'Home',
      to: '/',
      Image: <AiOutlineHome />,
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
              xs={8}
              style={{
                minHeight: '100%',
                display: 'flex',
                flexDirection: 'column',
                padding: 50,
              }}
            >
              {children}
            </Col>
            <Col
              xs={4}
              style={{
                borderLeft: '2px solid #F7F8FC',
                display: 'flex',
                flexDirection: 'column',
                marginTop: 50,
              }}
            >
              <Container>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    borderBottom: '2px solid #F7F8FC',
                    padding: 20,
                  }}
                >
                  <Avatar
                    data={{
                      userName: `${user.firstName.split(' ')[0]} ${
                        user.lastName.split(' ')[0]
                      }`,
                      image: avatar,
                      w: 70,
                      h: 70,
                      email: user?.email,
                      ft: 18,
                      fe: 13,
                    }}
                  />

                  <div
                    className={styles.iconContainer}
                    onClick={handleCloseSesion}
                  >
                    <BsBoxArrowInRight className={styles.exitIcon} />
                  </div>
                </div>
              </Container>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
