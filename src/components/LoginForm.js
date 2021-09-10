import React from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import styles from '../styles.module.scss';
import bugdet from '../assets/budget.svg';
import { useHistory } from 'react-router-dom';
import { useForm } from '../hooks/useForm';

const LoginForm = () => {
  const history = useHistory();

  const [{ email, password }, handleInputChange] = useForm({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ password, email });
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
              <input
                type="text"
                name="email"
                value={email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="text"
                name="password"
                value={password}
                onChange={handleInputChange}
              />
            </div>
          </Form>
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
