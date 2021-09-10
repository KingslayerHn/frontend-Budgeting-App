import React, { useState } from 'react';
import styles from '../styles.module.scss';
import { Card, Form, Button, Container, Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import budget from '../assets/budget.svg';
import { useForm } from '../hooks/useForm';
import { useDispatch } from 'react-redux';
import { register } from '../redux/actions/auth.action';
import { setAlert } from '../redux/actions/alerts.action';
import Alert from './Alert';
import Loader from './Loader';

const RegisterForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [
    { firstName, lastName, email, password, repeat, genre },
    handleInputChange,
  ] = useForm({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    repeat: '',
    genre: 'male',
  });
  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    setLoader(true);
    e.preventDefault();
    if (
      firstName === '' ||
      lastName === '' ||
      email === '' ||
      password === '' ||
      repeat === ''
    ) {
      dispatch(
        setAlert({
          variant: 'danger',
          message: 'All fields are required!!',
        })
      );
      setLoader(false);
      return;
    }

    if (password !== repeat) {
      dispatch(
        setAlert({
          variant: 'danger',
          message: 'The passwords dont match!!',
        })
      );
      setLoader(false);
      return;
    }

    dispatch(register({ firstName, lastName, email, password, repeat, genre }));
    setLoader(false);
  };

  const handleChangePage = () => {
    history.push('/login');
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
        <img src={budget} alt="budget" />
      </div>
      <Card style={{ width: 500 }}>
        <Card.Body>
          <Alert />
          <Form onSubmit={handleSubmit}>
            <Container>
              <Row className={styles.register}>
                <Col xs={6}>
                  <div>
                    <label>FirstName</label>
                    <input
                      autoComplete="false"
                      type="text"
                      name="firstName"
                      value={firstName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label>Email</label>
                    <input
                      autoComplete="false"
                      type="text"
                      name="email"
                      value={email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label>Genre</label>
                    <select
                      onChange={handleInputChange}
                      name="genre"
                      value={genre}
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </Col>
                <Col xs={6}>
                  <div>
                    <label>LastName</label>
                    <input
                      autoComplete="false"
                      type="text"
                      name="lastName"
                      value={lastName}
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
                  <div>
                    <label>Repeat password</label>
                    <input
                      autoComplete="false"
                      type="password"
                      name="repeat"
                      value={repeat}
                      onChange={handleInputChange}
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </Form>
          <div className={styles.buttons}>
            <Button
              className={styles.primary}
              onClick={handleSubmit}
              disabled={loader}
            >
              {loader ? <Loader /> : 'Register'}
            </Button>
            <Button className={styles.secondary} onClick={handleChangePage}>
              Login
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RegisterForm;
