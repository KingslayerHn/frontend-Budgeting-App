import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NotFoundPage from '../../containers/Error404';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { getUserReferenceById } from '../../redux/actions/references.action';
import ProfileSelectedUser from './ProfileSelectedUser';
import { Col, Row } from 'react-bootstrap';

const ProfileUserSearch = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    const { q } = queryString.parse(location.search);
    dispatch(getUserReferenceById(q));
  }, [location.search, dispatch]);

  const { userRef } = useSelector((state) => state.references);

  const accounts = ['Salutec', 'BAC', 'OCCIDENTE', 'ETERNA'];

  if (!userRef) {
    return <NotFoundPage />;
  }
  return (
    <div style={{ height: '100%', overflowY: 'auto' }}>
      <div style={{ backgroundColor: '#fff', borderRadius: 30, padding: 40 }}>
        <ProfileSelectedUser {...userRef} />
      </div>
      <Row className="gx-0" style={{ paddingTop: 20 }}>
        <Col xs={6}>
          <h5>Accounts</h5>
          <div style={{ width: '100%' }}>
            <div
              style={{
                padding: 20,
                backgroundColor: '#fff',
                margin: '20px 10px 20px 0px',
                borderRadius: 20,
                maxHeight: 200,
                overflowY: 'auto',
                display: 'flex',
                flexWrap: 'wrap',
              }}
            >
              {accounts.length > 0 ? (
                <>
                  {accounts.map((item) => (
                    <div
                      key={item}
                      style={{
                        padding: '10px 20px 10px 20px',
                        backgroundColor: '#6a84f5',
                        color: '#fff',
                        borderRadius: 30,
                        margin: 5,
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </>
              ) : (
                <p style={{ fontWeight: 300, color: '#69b4ed' }}>
                  Don't have accounts yet
                </p>
              )}
            </div>
          </div>
        </Col>
        <Col xs={6}>
          <h5>I dont know</h5>
          <div style={{ width: '100%' }}>
            <div
              style={{
                padding: 20,
                backgroundColor: '#fff',
                margin: '20px 0px 20px 10px',
                borderRadius: 20,
              }}
            >
              <p>Don't have accounts yet</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProfileUserSearch;
