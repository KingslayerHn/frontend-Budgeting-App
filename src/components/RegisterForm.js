import React from 'react';
import styles from '../styles.module.scss';
import { Card, Form, Button, Container, Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import budget from '../assets/budget.svg';
import { useForm } from '../hooks/useForm';

const RegisterForm = () => {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ firstName, lastName, email, password, repeat, genre });
  };

  const handleChangePage = () => {
    history.push('/login');
  };

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
          <Form onSubmit={handleSubmit}>
            <Container>
              <Row className={styles.register}>
                <Col xs={6}>
                  <div>
                    <label>FirstName</label>
                    <input
                      autoComplete={false}
                      type="text"
                      name="firstName"
                      value={firstName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label>Email</label>
                    <input
                      autoComplete={false}
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
                      <option value="other">Other</option>
                    </select>
                  </div>
                </Col>
                <Col xs={6}>
                  <div>
                    <label>LastName</label>
                    <input
                      autoComplete={false}
                      type="text"
                      name="lastName"
                      value={lastName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label>Password</label>
                    <input
                      autoComplete={false}
                      type="password"
                      name="password"
                      value={password}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label>Repeat password</label>
                    <input
                      autoComplete={false}
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
            <Button className={styles.primary} onClick={handleSubmit}>
              Register
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
