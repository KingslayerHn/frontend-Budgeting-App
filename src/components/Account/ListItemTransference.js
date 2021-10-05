import React from 'react';
import { Row, Col } from 'react-bootstrap';
import moment from 'moment';
import NumberFormat from 'react-number-format';

const ListItemTransference = ({
  description,
  senderAmount,
  idSenderAccount,
  idRecivedAccount,
  createAt,
}) => {
  return (
    <Row
      className="gx-0"
      style={{
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 15,
        marginTop: 5,
        marginBottom: 5,
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <div
        style={{
          fontSize: 14,
          padding: '0px 10px 0px 10px',
          textAlign: 'center',
          fontWeight: 600,
          color: '#69b4ed',
          flex: 1,
          minWidth: '20%',
          wordWrap: 'break-word',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {description}
      </div>
      <div
        style={{
          fontSize: 14,
          padding: '0px 10px 0px 10px',
          textAlign: 'center',
          fontWeight: 500,
          color: '#3d6586',
          flex: 1,
          minWidth: '20%',
          wordWrap: 'break-word',
        }}
      >
        {idSenderAccount}
      </div>
      <div
        style={{
          fontSize: 14,
          padding: '0px 10px 0px 10px',
          textAlign: 'center',
          fontWeight: 500,
          color: '#3d6586',
          flex: 1,
          minWidth: '20%',
          wordWrap: 'break-word',
        }}
      >
        {idRecivedAccount}
      </div>
      <div
        style={{
          fontSize: 14,
          padding: '0px 10px 0px 10px',
          textAlign: 'center',
          fontWeight: 500,
          color: '#3d6586',
          flex: 1,
          minWidth: '20%',
          wordWrap: 'break-word',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <NumberFormat
          value={senderAmount}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'$'}
          renderText={(value, props) => <div {...props}>{value}</div>}
          style={{
            color: '#FFA463',
          }}
        />
      </div>
      <div
        style={{
          fontSize: 14,
          padding: '0px 10px 0px 10px',
          textAlign: 'center',
          fontWeight: 500,
          color: '#3d6586',
          flex: 1,
          minWidth: '20%',
          wordWrap: 'break-word',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {moment(createAt).format('L')}
      </div>
    </Row>
  );
};

export default ListItemTransference;
