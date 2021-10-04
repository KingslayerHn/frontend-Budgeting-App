import React, { useState } from 'react';
import {
  Row,
  Col,
  Form,
  InputGroup,
  FormControl,
  Button,
} from 'react-bootstrap';
import { TiArrowBack } from 'react-icons/all';
import styles from '../../styles.module.scss';
import { openModalEditProfile } from '../../redux/actions/ui.action';
import { useDispatch } from 'react-redux';
import { updateProfile, updatePassword } from '../../redux/actions/auth.action';

const ModalEditProfile = ({ user }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstName: user?.firstName,
    lastName: user?.lastName,
    email: user?.email,
    bio: user?.bio,
    profession: user?.profession,
    genre: user?.genre,
    password: '',
    newPass: '',
    repeatPass: '',
  });

  const {
    firstName,
    lastName,
    email,
    profession,
    genre,
    password,
    newPass,
    repeatPass,
    bio,
  } = formData;

  const handleOpenEditProfile = () => {
    dispatch(openModalEditProfile(false));
  };

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const handleUpdate = () => {
    dispatch(updateProfile(formData));
  };
  const handlePasswordUpdate = () => {
    dispatch(
      updatePassword({
        password,
        newPass,
      })
    );
    setFormData({
      ...formData,
      password: '',
      newPass: '',
      repeatPass: '',
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        overflowY: 'auto',
        height: '100%',
      }}
    >
      <Row className={[styles.profileContainer, 'gx-0']}>
        <div
          style={{
            position: 'absolute',
            top: 20,
            left: -20,
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <TiArrowBack
            style={{ fontSize: 20, color: '#69b4ed', cursor: 'pointer' }}
            onClick={handleOpenEditProfile}
          />
        </div>

        <Form style={{ padding: 30 }}>
          <Row>
            <Col xs={6}>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="First name"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  name="firstName"
                  value={firstName}
                  style={{ color: '#979899' }}
                  onChange={handleChange}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <FormControl
                  type="email"
                  placeholder="email"
                  aria-label="email"
                  aria-describedby="basic-addon1"
                  name="email"
                  value={email}
                  style={{ color: '#979899' }}
                  onChange={handleChange}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <Form.Select
                  aria-label="Default select example"
                  onChange={handleChange}
                  name="genre"
                  style={{ color: '#979899' }}
                  defaultValue={genre}
                >
                  <option value="female">female</option>
                  <option value="male">male</option>
                </Form.Select>
              </InputGroup>
            </Col>
            <Col xs={6}>
              <InputGroup className="mb-3">
                <FormControl
                  style={{ color: '#979899' }}
                  placeholder="Last name"
                  aria-label="lastName"
                  aria-describedby="basic-addon1"
                  name="lastName"
                  value={lastName}
                  onChange={handleChange}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <FormControl
                  style={{ color: '#979899' }}
                  placeholder="Profession"
                  aria-label="profession"
                  aria-describedby="basic-addon1"
                  name="profession"
                  value={profession}
                  onChange={handleChange}
                />
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <InputGroup className="mb-3">
                <FormControl
                  style={{ resize: 'none', color: '#979899' }}
                  placeholder="bio"
                  aria-label="bio"
                  aria-describedby="basic-addon1"
                  as="textarea"
                  value={bio}
                  name="bio"
                  onChange={handleChange}
                  rows={5}
                />
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                disabled={
                  email.trim() < 3 ||
                  firstName.trim() < 3 ||
                  lastName.trim() < 3
                }
                onClick={handleUpdate}
              >
                Update
              </Button>
            </Col>
          </Row>
        </Form>
      </Row>
      <Row
        className={[styles.profileContainer, 'gx-0']}
        style={{ marginTop: 30, padding: 30 }}
      >
        <Row>
          <Col xs={6}>
            <InputGroup className="mb-3">
              <FormControl
                type="password"
                style={{ color: '#979899' }}
                placeholder="actual password"
                aria-label="password"
                aria-describedby="basic-addon1"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl
                type="password"
                style={{ color: '#979899' }}
                placeholder="repeat password"
                aria-label="repeatPass"
                aria-describedby="basic-addon1"
                name="repeatPass"
                value={repeatPass}
                onChange={handleChange}
              />
            </InputGroup>
          </Col>
          <Col xs={6}>
            <InputGroup className="mb-3">
              <FormControl
                type="password"
                style={{ color: '#979899' }}
                placeholder="new password"
                aria-label="newPass"
                aria-describedby="basic-addon1"
                name="newPass"
                value={newPass}
                onChange={handleChange}
              />
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              variant="primary"
              onClick={handlePasswordUpdate}
              disabled={
                password.trim() <= 0 ||
                newPass.trim() <= 0 ||
                repeatPass.trim() <= 0 ||
                newPass !== repeatPass
              }
            >
              Update
            </Button>
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default ModalEditProfile;
