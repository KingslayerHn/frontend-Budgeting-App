import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { IoAddCircleSharp } from 'react-icons/all';
import { openModalAddIncome } from '../redux/actions/ui.action';
import ButtonAsIcon from '../components/Buttons/ButtonAsIcon';
import ListAccountItem from '../components/Account/ListAccountItem';

const header = ['DESCRIPTION', 'ACCOUNT', 'AMOUNT', 'DATE'];

const Incomes = () => {
  const [hover, setHover] = useState(false);
  const incomes = useSelector((state) => state.incomes);
  const dispatch = useDispatch();
  const { accountRef } = useSelector((state) => state.references);

  const handleOpenModal = () => {
    dispatch(openModalAddIncome(true));
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
        />
      </div>

      {incomes.items.length === 0 ? (
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
            Not have Incomes yet, please add an account
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
              {incomes.items.map((item) => (
                <ListAccountItem key={item._id} {...item} />
              ))}
            </div>
          </Row>
        </>
      )}
    </>
  );
};

export default Incomes;

// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { Container, Row, Table } from 'react-bootstrap';
// import { IoAddCircleSharp } from 'react-icons/all';
// import ModalAddIncome from '../components/ModalAddIncome';
// import NumberFormat from 'react-number-format';
// import moment from 'moment';

// const Incomes = () => {
//   const incomes = useSelector((state) => state.incomes);
//   const accounts = useSelector((state) => state.accounts);

//   const [modal, setModal] = useState(false);

//   const handleOpenModal = () => {
//     setModal(true);
//   };

//   return (
//     <Container>
//       <ModalAddIncome modal={modal} setModal={setModal} />
//       {accounts.items.length !== 0 && (
//         <IoAddCircleSharp
//           style={{
//             position: 'absolute',
//             bottom: 50,
//             right: 80,
//             fontSize: 80,
//             color: '#fff',
//             cursor: 'pointer',
//           }}
//           onClick={handleOpenModal}
//         />
//       )}

//       {incomes.items.length === 0 ? (
//         <h1
//           style={{
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             flex: 1,
//             height: '100vh',
//             color: '#fff',
//           }}
//         >
//           Not have Incomes yet!!
//         </h1>
//       ) : (
//         <Row style={{ marginTop: 50 }}>
//           <Table
//             striped
//             bordered
//             hover
//             style={{ marginTop: 30, backgroundColor: '#fff' }}
//           >
//             <thead>
//               <tr>
//                 <th>Description</th>
//                 <th>Account</th>
//                 <th>Amount</th>
//                 <th>Date</th>
//               </tr>
//             </thead>
//             <tbody>
//               {incomes.items.map((item) => (
//                 <tr key={item._id}>
//                   <td>{item.description}</td>
//                   <td>{item.account}</td>
//                   <td>
//                     {
//                       <NumberFormat
//                         value={item.amount}
//                         prefix="$"
//                         displayType="text"
//                       />
//                     }
//                   </td>
//                   <td>{moment(item.createAt).format('LL')}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         </Row>
//       )}
//     </Container>
//   );
// };

// export default Incomes;
