import React, { useState } from 'react';
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
  AiFillPlusCircle,
} from 'react-icons/all';
import { Redirect, useHistory } from 'react-router-dom';
import { logout } from '../redux/actions/auth.action';
import Avatar from '../components/dashboard/Avatar';
import Alert from '../components/Alert';

import styles from '../styles.module.scss';
import Accounts from './Accounts';
import AddAccount from '../components/Account/AddAccount';
import Nav from '../components/dashboard/Nav';

const Dashboard = ({ children }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [add, setAdd] = useState(false);

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

  const handleAdd = () => {
    setAdd(true);
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
            backgroundColor: '#F7F8FC',
            width: '98%',
            height: '98%',
            border: 'none',
          }}
        >
          <Row style={{ height: '100%' }} className="gx-0">
            <Col
              xs={8}
              style={{
                minHeight: '100%',
                display: 'flex',
                flexDirection: 'column',
                padding: 50,
              }}
            >
              <Nav />
              {children}
            </Col>
            <Col
              xs={4}
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: 0,
                paddingTop: 50,
                borderLeft: '2px solid #f1f1f1',
              }}
            >
              <div className={styles.boxLine}>
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
              <div className={styles.accountBoxLines}>
                <Accounts />
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  paddingRight: 40,
                  paddingLeft: 40,
                  paddingTop: 40,
                }}
                onClick={handleAdd}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 10,
                    borderTopRightRadius: 20,
                  }}
                >
                  <AiFillPlusCircle
                    style={{
                      color: '#4e6ef5',
                      fontSize: 60,
                      marginRight: 20,
                      cursor: 'pointer',
                    }}
                  />
                  <h5 style={{ fontWeight: 400, color: '#6a84f6' }}>
                    add account
                  </h5>
                </div>
              </div>
              {add && <AddAccount setAdd={setAdd} />}
            </Col>
          </Row>
        </div>
      </section>
      <Alert />
    </div>
  );
};

export default Dashboard;
