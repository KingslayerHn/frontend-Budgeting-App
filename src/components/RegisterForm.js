import React, { useState } from 'react';
import styles from '../styles.module.scss';
import {
  Form,
  Button,
  Container,
  Col,
  Row,
  InputGroup,
  FormControl,
} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { useDispatch } from 'react-redux';
import { register } from '../redux/actions/auth.action';
import { setAlert } from '../redux/actions/alerts.action';
import Carousel from './login/Carousel';
import {
  AiOutlineMail,
  RiLockPasswordLine,
  IoMaleFemaleOutline,
  RiUserAddLine,
  AiOutlineUsergroupAdd,
} from 'react-icons/all';
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
    genre: '',
  });
  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    console.log({ genre });
    setLoader(true);
    e.preventDefault();
    if (
      firstName === '' ||
      lastName === '' ||
      email === '' ||
      password === '' ||
      repeat === '' ||
      genre === ''
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
    <div>
      <Row style={{ backgroundColor: '#fff', width: '70vw', height: '75vh' }}>
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
        <Col xs={6} style={{ position: 'relative' }}>
          <Container
            style={{
              display: 'flex',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Form className={styles.register} onSubmit={handleSubmit}>
              <h1>Welcome!!</h1>
              <h3>All in one solution</h3>
              <h5>
                register and enjoy all our benefits. keep your finances in order
              </h5>
              <InputGroup
                style={{
                  boxShadow: '2px 2px 17px -10px rgba(0,0,0,0.75)',
                  borderRadius: '20px',
                  margin: 5,
                }}
              >
                <InputGroup.Text className={styles.inputDescription}>
                  <RiUserAddLine color="#0d56b3" />
                </InputGroup.Text>
                <FormControl
                  autoComplete="off"
                  type="text"
                  placeholder="First name"
                  aria-label="firstName"
                  aria-describedby="basic-addon1"
                  name="firstName"
                  value={firstName}
                  onChange={handleInputChange}
                />
              </InputGroup>
              <InputGroup
                style={{
                  boxShadow: '2px 2px 17px -10px rgba(0,0,0,0.75)',
                  borderRadius: '20px',
                  margin: 5,
                }}
              >
                <InputGroup.Text className={styles.inputDescription}>
                  <AiOutlineUsergroupAdd color="#0d56b3" />
                </InputGroup.Text>
                <FormControl
                  autoComplete="off"
                  type="text"
                  placeholder="Last name"
                  aria-label="lastName"
                  aria-describedby="basic-addon1"
                  name="lastName"
                  value={lastName}
                  onChange={handleInputChange}
                />
              </InputGroup>
              <InputGroup
                style={{
                  borderRadius: 20,
                  boxShadow: '2px 2px 17px -10px rgba(0,0,0,0.75)',
                  margin: 5,
                }}
              >
                <InputGroup.Text className={styles.inputDescription}>
                  <IoMaleFemaleOutline color="#0d56b3" />
                </InputGroup.Text>
                <Form.Select
                  aria-label="Default select example"
                  onChange={handleInputChange}
                  name="genre"
                >
                  <option value="" disabled selected>
                    select genre
                  </option>
                  <option value="male">male</option>
                  <option value="female">female</option>
                </Form.Select>
              </InputGroup>
              <InputGroup
                style={{
                  boxShadow: '2px 2px 17px -10px rgba(0,0,0,0.75)',
                  borderRadius: '20px',
                  margin: 5,
                }}
              >
                <InputGroup.Text className={styles.inputDescription}>
                  <AiOutlineMail color="#0d56b3" />
                </InputGroup.Text>
                <FormControl
                  autoComplete="off"
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
                  margin: 5,
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
              <InputGroup
                style={{
                  boxShadow: '2px 2px 17px -10px rgba(0,0,0,0.75)',
                  borderRadius: '20px',
                  margin: 5,
                }}
              >
                <InputGroup.Text className={styles.inputDescription}>
                  <RiLockPasswordLine color="#0d56b3" />
                </InputGroup.Text>
                <FormControl
                  placeholder="confirm password"
                  aria-label="confirm"
                  aria-describedby="basic-addon1"
                  type="password"
                  name="repeat"
                  value={repeat}
                  onChange={handleInputChange}
                />
              </InputGroup>

              <div className={styles.buttons}>
                <Button
                  className={styles.primary}
                  disabled={loader}
                  onClick={handleChangePage}
                >
                  {loader ? <Loader /> : 'SIGN IN'}
                </Button>
                <Button
                  className={styles.secondary}
                  onClick={handleSubmit}
                  type="submit"
                >
                  CREATE
                </Button>
              </div>
            </Form>
            <Alert />
          </Container>
        </Col>
      </Row>
    </div>
  );
};

export default RegisterForm;
