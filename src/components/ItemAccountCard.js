import React from 'react';
import { Card } from 'react-bootstrap';
import { AiOutlineCloseCircle } from 'react-icons/all';
import { useDispatch } from 'react-redux';
import NumberFormat from 'react-number-format';
import moment from 'moment';
import { getAccountReference } from '../redux/actions/references.action';

const ItemCard = ({
  description,
  createAt,
  _id,
  amount,
  modal,
  setModal,
  item,
}) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(getAccountReference(item));
    setModal(true);
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
      <AiOutlineCloseCircle
        style={{
          color: '#fff !important',
          position: 'absolute',
          top: 10,
          right: 10,
          cursor: 'pointer',
        }}
        color="#fff"
        onClick={handleDelete}
      />
      <Card.Body>
        <Card.Title style={{ fontWeight: '500', color: '#fff', fontSize: 30 }}>
          {description}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted" style={{ color: '#FFFF' }}>
          Number: {_id}
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
