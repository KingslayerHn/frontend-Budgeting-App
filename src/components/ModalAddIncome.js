import React, { useState } from 'react';
import { Button, Col, Row, Toast, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addIncome } from '../redux/actions/incomes.action';
import { CgClose } from 'react-icons/all';
import { openModalAddIncome } from '../redux/actions/ui.action';
import NumberFormat from 'react-number-format';

const ModalAddIncomes = () => {
  const incomesDef = [
    'Rent',
    'Utilities',
    'Salary',
    'Dividents',
    'Interest',
    'Rest seeking',
    'Capital gains',
    'Tangible Assets',
    'Intangible Assets',
    'Bussines profits',
    'Freelancer',
    'Adicional Labour',
    'Unearned Incomes',
  ];

  const dispatch = useDispatch();
  const { accountRef } = useSelector((state) => state.references);
  const { modalAddIncome } = useSelector((state) => state.ui);

  const [formData, setFormData] = useState({
    description: 'Rent',
    amount: 0,
  });

  const { amount, description } = formData;

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const closeModalAddIncome = () => {
    dispatch(openModalAddIncome(false));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addIncome({
        amount: parseFloat(amount),
        description,
        id: accountRef._id,
        amountAccount: accountRef.amount,
      })
    );
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%',
      }}
    >
      <Toast
        show={modalAddIncome}
        style={{
          position: 'absolute',
          zIndex: 10000,
        }}
        onClose={closeModalAddIncome}
      >
        <Toast.Header closeButton={false}>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">ADD INCOME</strong>
          <CgClose
            onClick={closeModalAddIncome}
            style={{ cursor: 'pointer' }}
          />
        </Toast.Header>
        <Toast.Body style={{ backgroundColor: '#fff', padding: 20 }}>
          <Row className={['gx-0']}>
            <Col xs={12}>
              <Form onSubmit={handleSubmit}>
                <div>
                  <h4 style={{ fontWeight: 300 }}>Account:</h4>
                  <div
                    style={{ fontSize: 30, color: '#69b4ed', fontWeight: 600 }}
                  >
                    {accountRef?.description}
                  </div>
                  <div style={{ fontSize: 22, color: '#ff7400' }}>
                    {`Balance: `}
                    <NumberFormat
                      value={accountRef?.amount}
                      prefix="$"
                      displayType="text"
                    />
                  </div>
                </div>
                <div>
                  <Form.Select
                    autoComplete="false"
                    name="description"
                    aria-label="Default select example"
                    onChange={handleChange}
                    style={{
                      borderRadius: 10,
                      marginTop: 10,
                      marginBottom: 10,
                      color: '#69b4ed',
                    }}
                  >
                    {incomesDef.map((a) => (
                      <option key={a} value={a}>
                        {a}
                      </option>
                    ))}
                  </Form.Select>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '80%',
                  }}
                >
                  <label style={{ color: '#fd6900' }}>Amount</label>
                  <input
                    style={{
                      borderRadius: 10,
                      border: '1px solid #B2B1B3',
                      padding: 7,
                      marginBottom: 5,
                      marginTop: 5,
                      fontWeight: 300,
                      color: '#69b4ed',
                    }}
                    autoComplete="false"
                    type="number"
                    name="amount"
                    value={amount}
                    onChange={handleChange}
                  />
                </div>
              </Form>
            </Col>
          </Row>
          <div style={{ marginTop: 10 }}>
            <Button
              variant="primary"
              style={{ margin: 5 }}
              onClick={handleSubmit}
              disabled={description.trim() <= 3 || amount <= 0}
            >
              Add
            </Button>
          </div>
        </Toast.Body>
      </Toast>
    </div>
  );
};

export default ModalAddIncomes;

// import React, { useState } from 'react';
// import { Modal, Button, Form } from 'react-bootstrap';
// import { useForm } from '../hooks/useForm';
// import { useDispatch, useSelector } from 'react-redux';
// import Alert from './Alert';
// import styles from '../styles.module.scss';
// import { addIncome } from '../redux/actions/incomes.action';

// const ModalAddIncome = ({ modal, setModal }) => {
//   const expensesDefData = [
//     'Rent',
//     'Utilities',
//     'Salary',
//     'Dividents',
//     'Interest',
//     'Rest seeking',
//     'Capital gains',
//     'Tangible Assets',
//     'Intangible Assets',
//     'Bussines profits',
//     'Freelancer',
//     'Adicional Labour',
//     'Unearned Incomes',
//   ];
//   const dispatch = useDispatch();
//   const [account, setAccount] = useState([]);

//   const handleClose = () => {
//     setAccount([]);
//     setModal(false);
//   };
//   const accounts = useSelector((state) => state.accounts);
//   const [{ description, amount }, handleInputChange] = useForm({
//     description: '',
//     amount: 0,
//   });
//   const handleSelectChange = (e) => {
//     const selected = accounts.items.filter((a) => a._id === e.target.value);
//     setAccount(selected);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(
//       addIncome({
//         amount: amount,
//         description,
//         id: account[0]._id,
//         amountAccount: account[0].amount,
//       })
//     );
//     setModal(false);
//   };
//   return (
//     <Modal show={modal} onHide={handleClose} keyboard={false}>
//       <Alert />
//       <Modal.Header closeButton>
//         <Modal.Title>Add Income</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form className={styles.login} onSubmit={handleSubmit}>
//           <div>
//             <label>Select account to add income</label>
//             <select
//               style={{
//                 borderBottom: ' 1px solid #afe0fc !important',
//                 borderTop: 'none',
//                 borderRight: 'none',
//                 borderLeft: 'none',
//                 paddingBottom: 10,
//               }}
//               autoComplete="false"
//               type="select"
//               name="account"
//               className={styles.register}
//               onChange={handleSelectChange}
//             >
//               <option value="" selected disabled hidden>
//                 select acount
//               </option>
//               {accounts.items.map((a) => (
//                 <option key={a._id} value={a._id}>
//                   {a.description}
//                 </option>
//               ))}
//             </select>
//             {account.length !== 0 && (
//               <label>Available : {`${account[0].amount}`}</label>
//             )}
//           </div>
//           <div>
//             <label>Select income</label>
//             <select
//               style={{
//                 borderBottom: ' 1px solid #afe0fc !important',
//                 borderTop: 'none',
//                 borderRight: 'none',
//                 borderLeft: 'none',
//                 paddingBottom: 10,
//               }}
//               autoComplete="false"
//               type="select"
//               name="description"
//               className={styles.register}
//               value={description}
//               onChange={handleInputChange}
//             >
//               <option value="" selected disabled hidden>
//                 select income
//               </option>
//               {expensesDefData.map((a) => (
//                 <option key={a}>{a}</option>
//               ))}
//             </select>
//           </div>
//           <div>
//             <label>amount</label>
//             <input
//               autoComplete="false"
//               type="number"
//               name="amount"
//               value={amount}
//               onChange={handleInputChange}
//             />
//           </div>
//         </Form>
//         <div className={styles.buttons}>
//           <Button className={styles.secondary} onClick={handleClose}>
//             Cancel
//           </Button>
//           <Button
//             className={styles.primary}
//             onClick={handleSubmit}
//             disabled={amount <= 0 || description === ''}
//           >
//             Add
//           </Button>
//         </div>
//       </Modal.Body>
//     </Modal>
//   );
// };

// export default ModalAddIncome;
