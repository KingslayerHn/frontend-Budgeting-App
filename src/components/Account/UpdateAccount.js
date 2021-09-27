import React, { useState } from 'react';
import {
  Toast,
  Button,
  Row,
  Col,
  InputGroup,
  FormControl,
} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { openModalUpdateAccount } from '../../redux/actions/ui.action';

const UpdateAccount = () => {
  const dispatch = useDispatch();
  const { accountRef } = useSelector((state) => state.references);

  const closeModalupdateAccount = () => {
    dispatch(openModalUpdateAccount(false));
  };
  const handleUpdateAccount = () => {
    // TODO: update account
  };

  const [description, setDescription] = useState(accountRef?.description);
  const { modalUpdateAcccount } = useSelector((state) => state.ui);
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%',
      }}
    >
      <Toast
        show={modalUpdateAcccount}
        style={{
          position: 'absolute',
          zIndex: 10000,
        }}
        onClose={closeModalupdateAccount}
      >
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Update Account</strong>
        </Toast.Header>
        <Toast.Body style={{ backgroundColor: '#fff', padding: 20 }}>
          <Row className={['gx-0']}>
            <Col xs={12}>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="title"
                  aria-label="description"
                  aria-describedby="basic-addon1"
                  name="description"
                  value={description}
                  onChange={({ target }) => setDescription(target.value)}
                  maxLength={22}
                />
              </InputGroup>
            </Col>
          </Row>
          <div style={{ marginTop: 10 }}>
            <Button
              variant="primary"
              style={{ margin: 5 }}
              onClick={handleUpdateAccount}
            >
              update
            </Button>
          </div>
        </Toast.Body>
      </Toast>
    </div>
  );
};

export default UpdateAccount;
