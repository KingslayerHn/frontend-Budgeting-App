import React, { useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import FriendsListContainer from '../components/Friends/FriendsListContainer';
import {
  getAllUserFriends,
  getAllWaitingFriends,
} from '../redux/actions/friends.action';
import { useDispatch } from 'react-redux';
import WaitingFriendsContainer from '../components/Friends/WaitingFriendsContainer';

const Friends = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUserFriends());
    dispatch(getAllWaitingFriends());
  }, [dispatch]);

  return (
    <Row clasName="gx-0">
      <Col xs={12} md={6}>
        <h5>Friends</h5>
        <div style={{ backgroundColor: '#fff', borderRadius: 20, padding: 20 }}>
          <FriendsListContainer />
        </div>
      </Col>
      <Col xs={12} md={6}>
        <h5>Request Friends</h5>
        <div style={{ backgroundColor: '#fff', borderRadius: 20, padding: 20 }}>
          <WaitingFriendsContainer />
        </div>
      </Col>
    </Row>
  );
};

export default Friends;
