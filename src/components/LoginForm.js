import React, { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import styles from '../styles.module.scss';
import bugdet from '../assets/budget.svg';
import { useHistory } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { setAlert } from '../redux/actions/alerts.action';
import { useDispatch, useSelector } from 'react-redux';
import Alert from './Alert';
import Loader from './Loader';
import { login } from '../redux/actions/auth.action';

const LoginForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const alerts = useSelector((state) => state);

  const [{ email, password }, handleInputChange] = useForm({
    email: '',
    password: '',
  });
  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    if (email === '' || password === '') {
      dispatch(
        setAlert({
          variant: 'danger',
          message: 'User or password incorrect!!',
        })
      );
      setLoader(false);
      return;
    }
    dispatch(
      login({
        email,
        password,
      })
    );
    setLoader(false);
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
                autoComplete="false"
                type="text"
                name="email"
                value={email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Password</label>
              <input
                autoComplete="false"
                type="password"
                name="password"
                value={password}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.buttons}>
              <Button
                type="submit"
                className={styles.primary}
                onClick={handleSubmit}
                disabled={loader}
              >
                {loader ? <Loader /> : 'Login'}
              </Button>
              <Button className={styles.secondary} onClick={handleChangePage}>
                Register
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LoginForm;
