import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Table, Button } from 'react-bootstrap';
import { IoAddCircleSharp } from 'react-icons/all';
import NumberFormat from 'react-number-format';
import moment from 'moment';
import { openModalAddExpense } from '../redux/actions/ui.action';
import ButtonAsIcon from '../components/Buttons/ButtonAsIcon';
import { color } from '@material-ui/system';

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
          bottom: 10,
          right: 10,
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
        <Row
          className={['gx-0']}
          style={{
            width: '100%',
            height: 700,
            overflowY: 'auto',
          }}
        >
          <div>
            <Table striped bordered hover style={{ backgroundColor: '#fff' }}>
              <thead style={{ position: 'relative' }}>
                <tr>
                  <th>Description</th>
                  <th>Account</th>
                  <th>Amount</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody style={{ overflowY: 'auto' }}>
                {expenses.items.map((item) => (
                  <tr key={item._id}>
                    <td>{item.description}</td>
                    <td>{item.account}</td>
                    <td>
                      {
                        <NumberFormat
                          value={item.amount}
                          prefix="$"
                          displayType="text"
                        />
                      }
                    </td>
                    <td>{moment(item.createAt).format('LL')}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Row>
      )}
    </>
  );
};

export default Expenses;
