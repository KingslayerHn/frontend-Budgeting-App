import React from 'react';
import { Row, Col } from 'react-bootstrap';
import moment from 'moment';
import NumberFormat from 'react-number-format';

const ListAccountItem = ({ description, amount, account, createAt }) => {
  return (
    <Row
      className="gx-0"
      style={{
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 15,
        marginTop: 5,
        marginBottom: 5,
      }}
    >
      <Col
        xs={3}
        style={{
          fontSize: 14,
          padding: 5,
          textAlign: 'center',
          fontWeight: 600,
          color: '#3d6586',
        }}
      >
        {description}
      </Col>
      <Col
        xs={3}
        style={{
          fontSize: 14,
          padding: 5,
          textAlign: 'center',
          fontWeight: 500,
          color: '#3d6586',
        }}
      >
        {account}
      </Col>
      <Col
        xs={3}
        style={{
          fontSize: 14,
          padding: 5,
          textAlign: 'center',
          fontWeight: 500,
          color: '#3d6586',
        }}
      >
        <NumberFormat
          value={amount}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'$'}
          renderText={(value, props) => <div {...props}>{value}</div>}
          style={{
            color: '#FFA463',
          }}
        />
      </Col>
      <Col
        xs={3}
        style={{
          fontSize: 14,
          padding: 5,
          textAlign: 'center',
          fontWeight: 500,
          color: '#3d6586',
        }}
      >
        {moment(createAt).calendar()}
      </Col>
    </Row>
  );
};

export default ListAccountItem;
