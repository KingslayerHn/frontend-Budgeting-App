import React from 'react';
import { Card, Button, Form, Container } from 'react-bootstrap';
import styles from '../styles.module.scss';
import bugdet from '../assets/budget.svg';
import { useHistory } from 'react-router-dom';

const LoginForm = () => {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('do somethings...');
  };

  const handleChangePage = () => {
    history.push('/register');
  };
  return (
    <div className={styles.banner}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'Column ',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1>
          <b>Budget App</b>
        </h1>
        <img src={bugdet} alt="budget" />
      </div>
      <Card style={{ width: 400 }}>
        <Card.Body>
          <Form className={styles.login} onSubmit={handleSubmit}>
            <div>
              <label>Username</label>
              <input type="text" />
            </div>
            <div>
              <label>Password</label>
              <input type="text" />
            </div>
          </Form>
          <Container></Container>
          <div className={styles.buttons}>
            <Button className={styles.primary} onClick={handleSubmit}>
              Login
            </Button>
            <Button className={styles.secondary} onClick={handleChangePage}>
              Register
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LoginForm;
