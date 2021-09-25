import React, { useState } from 'react';
import styles from '../styles.module.scss';
import { useHistory } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { setAlert } from '../redux/actions/alerts.action';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './Loader';
import { login } from '../redux/actions/auth.action';
import Carousel from './login/Carousel';
import { AiOutlineMail, RiLockPasswordLine } from 'react-icons/all';
import {
  Row,
  Col,
  Container,
  Form,
  Button,
  InputGroup,
  FormControl,
} from 'react-bootstrap';
import Alert from '../components/Alert';

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
    <div>
      <Row style={{ backgroundColor: '#fff', width: '70vw', height: '75vh' }}>
        <Col xs={6} style={{ position: 'relative' }}>
          <Container
            style={{
              display: 'flex',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Form className={styles.login} onSubmit={handleSubmit}>
              <h1>Welcome!!</h1>
              <h3>Sign in to your account</h3>
              <InputGroup
                style={{
                  boxShadow: '2px 2px 17px -10px rgba(0,0,0,0.75)',
                  borderRadius: '20px',
                }}
              >
                <InputGroup.Text className={styles.inputDescription}>
                  <AiOutlineMail color="#0d56b3" />
                </InputGroup.Text>
                <FormControl
                  autoComplete="false"
                  type="email"
                  placeholder="Email address"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                />
              </InputGroup>
              <InputGroup
                style={{
                  boxShadow: '2px 2px 17px -10px rgba(0,0,0,0.75)',
                  borderRadius: '20px',
                  margin: 10,
                }}
              >
                <InputGroup.Text className={styles.inputDescription}>
                  <RiLockPasswordLine color="#0d56b3" />
                </InputGroup.Text>
                <FormControl
                  placeholder="password"
                  aria-label="password"
                  aria-describedby="basic-addon1"
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleInputChange}
                />
              </InputGroup>

              <div className={styles.buttons}>
                <Button
                  type="submit"
                  className={styles.primary}
                  onClick={handleSubmit}
                  disabled={loader}
                >
                  {loader ? <Loader /> : 'SIGN IN'}
                </Button>
                <Button className={styles.secondary} onClick={handleChangePage}>
                  SIGN UP
                </Button>
              </div>
            </Form>
            <Alert />
          </Container>
        </Col>
        <Col
          xs={6}
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            padding: 0,
            objectFit: 'cover',
            overflow: 'hidden',
          }}
        >
          <Carousel />
        </Col>
      </Row>
    </div>
  );
};

export default LoginForm;
