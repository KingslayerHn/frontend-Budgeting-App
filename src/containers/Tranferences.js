import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { IoAddCircleSharp } from 'react-icons/all';
import { openModalAddTransference } from '../redux/actions/ui.action';
import ButtonAsIcon from '../components/Buttons/ButtonAsIcon';
import ListItemTransference from '../components/Account/ListItemTransference';

const header = ['DESCRIPTION', 'SENDER ACCOUNT', 'RECIEVE', 'AMOUNT', 'DATE'];

const Transferences = () => {
  const [hover, setHover] = useState(false);
  const accounts = useSelector((state) => state.accounts);
  const transferences = useSelector((state) => state.transferences);
  const dispatch = useDispatch();
  const { accountRef } = useSelector((state) => state.references);

  const handleOpenModal = () => {
    dispatch(openModalAddTransference(true));
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          bottom: 20,
          right: 20,
          alignItems: 'center',
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {((hover && !accountRef) || (hover && accounts.items.length < 2)) && (
          <span
            style={{
              color: '#fff',
              fontSize: 13,
              backgroundColor: '#a0b1fa',
              borderRadius: 5,
              padding: '3px 7px 3px 7px',
            }}
          >
            select an account and check if you have at least two accounts
          </span>
        )}
        <ButtonAsIcon
          absolute
          color={'#fd6900'}
          icon={IoAddCircleSharp}
          size={60}
          onClick={handleOpenModal}
          disabled={!accountRef || accounts.items.length < 2}
        />
      </div>

      {transferences.items.length === 0 ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            padding: 200,
          }}
        >
          <h1
            style={{
              color: '#69b4ed',
              fontWeight: 200,
            }}
          >
            Not have Transferences yet
          </h1>
        </div>
      ) : (
        <>
          <Row style={{ padding: 15 }}>
            {header.map((item) => (
              <div
                style={{
                  textAlign: 'center',
                  color: '#4E6EF5',
                  flex: 1,
                  padding: 5,
                }}
                key={item}
              >
                {item}
              </div>
            ))}
          </Row>
          <Row
            className={['gx-0']}
            style={{
              width: '100%',
              height: 700,
              overflowY: 'auto',
            }}
          >
            <div>
              {transferences.items.map((item) => (
                <ListItemTransference key={item._id} {...item} />
              ))}
            </div>
          </Row>
        </>
      )}
    </>
  );
};

export default Transferences;
