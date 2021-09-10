import React from 'react';
import { Card } from 'react-bootstrap';
import { GrFormClose } from 'react-icons/all';
import { useDispatch } from 'react-redux';
import NumberFormat from 'react-number-format';
import { deleteAccount } from '../redux/actions/account.action';
import moment from 'moment';

const ItemCard = ({ description, createAt, _id, amount }) => {
  const dispatch = useDispatch();

  const handleDelete = (_id) => {
    dispatch(deleteAccount(_id));
  };

  return (
    <Card
      style={{
        width: '18rem',
        backgroundColor: '#ff9064',
        borderRadius: 20,
        marginBottom: 5,
      }}
    >
      <GrFormClose
        style={{
          color: '#fff',
          position: 'absolute',
          top: 10,
          right: 10,
          cursor: 'pointer',
        }}
        onClick={() => handleDelete(_id)}
      />
      <Card.Body>
        <Card.Title style={{ fontWeight: '500', color: '#fff', fontSize: 30 }}>
          {description}
        </Card.Title>
        <Card.Subtitle
          className="mb-2 text-muted"
          style={{ color: '#fff !important' }}
        >
          amount
        </Card.Subtitle>
        <Card.Text style={{ fontWeight: '600', fontSize: 40 }}>
          <NumberFormat
            value={amount}
            className="foo"
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
            renderText={(value, props) => <div {...props}>{value}</div>}
          />
        </Card.Text>
        <Card.Subtitle className="mb-2 text-muted">
          {moment(createAt).format('LL')}
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default ItemCard;
