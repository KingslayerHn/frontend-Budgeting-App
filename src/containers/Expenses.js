import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { IoAddCircleSharp } from 'react-icons/all';
import { openModalAddExpense } from '../redux/actions/ui.action';
import ButtonAsIcon from '../components/Buttons/ButtonAsIcon';
import ListAccountItem from '../components/Account/ListAccountItem';

const header = ['DESCRIPTION', 'ACCOUNT', 'AMOUNT', 'DATE'];

const Expenses = () => {
  const [hover, setHover] = useState(false);
  const expenses = useSelector((state) => state.expenses);
  const dispatch = useDispatch();
  const { accountRef } = useSelector((state) => state.references);

  const handleOpenModal = () => {
    dispatch(openModalAddExpense(true));
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
        {hover && !accountRef && (
          <span
            style={{
              color: '#fff',
              fontSize: 13,
              backgroundColor: '#a0b1fa',
              borderRadius: 5,
              padding: '3px 7px 3px 7px',
            }}
          >
            select an account
          </span>
        )}
        <ButtonAsIcon
          absolute
          color={'#fd6900'}
          icon={IoAddCircleSharp}
          size={60}
          onClick={handleOpenModal}
          disabled={!accountRef}
          variant="light"
        />
      </div>

      {expenses.items.length === 0 ? (
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
            Not have Expense yet, please add an account
          </h1>
        </div>
      ) : (
        <>
          <Row style={{ padding: 15 }}>
            {header.map((item) => (
              <Col
                xs={3}
                style={{ textAlign: 'center', color: '#4E6EF5' }}
                key={item}
              >
                {item}
              </Col>
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
              {expenses.items.map((item) => (
                <ListAccountItem key={item._id} {...item} />
              ))}
            </div>
          </Row>
        </>
      )}
    </>
  );
};

export default Expenses;
