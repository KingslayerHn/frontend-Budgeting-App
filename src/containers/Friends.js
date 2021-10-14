import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import FriendsListContainer from '../components/Friends/FriendsListContainer';

const Friends = () => {
  return (
    <Row clasName="gx-0">
      <Col xs={7} style={{ backgroundColor: 'blue' }}>
        <FriendsListContainer />
      </Col>
      <Col xs={5} style={{ backgroundColor: 'red' }}>
        Request not change the status yet
      </Col>
    </Row>
  );
};

export default Friends;
