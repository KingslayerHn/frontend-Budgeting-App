import React, { useState } from 'react';
import { Row, Col, OverlayTrigger, Popover, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../../styles.module.scss';
import {
  BsThreeDotsVertical,
  GiPayMoney,
  GiReceiveMoney,
  BiTransfer,
} from 'react-icons/all';
import NumberFormat from 'react-number-format';
import moment from 'moment';
import {
  openModalDeleteAccount,
  openModalUpdateAccount,
} from '../../redux/actions/ui.action';
import TotalItemPerAccount from '../Stadistics/TotalItemPerAccount';
import BalanceMonth from './BalanceMonth';

const AccountDetails = () => {
  const dispatch = useDispatch();
  const [dropdowSelect, setDropdowSelect] = useState(false);

  const handleDeleteAccount = () => {
    setDropdowSelect(false);
    dispatch(openModalDeleteAccount(true));
  };
  const handleUpdateAccount = () => {
    setDropdowSelect(false);
    dispatch(openModalUpdateAccount(true));
  };

  const handleSchowDropDown = () => {
    setDropdowSelect(!dropdowSelect);
  };
  const {
    accountRef: { description, createAt, amount, _id },
  } = useSelector((state) => state.references);
  return (
    <Row className={['gx-0', styles.accountDetails]}>
      <Col
        xs={5}
        style={{
          position: 'relative',
        }}
      >
        <h5 style={{ color: '#527491', paddingLeft: 20 }}>
          Account monthly report
        </h5>
        <div
          style={{
            backgroundColor: '#4e6ef5',
            borderRadius: 20,
            padding: 30,
            margin: 15,
            boxShadow: '3px 3px 6px 0px rgba(0,0,0,0.30)',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 10,
              right: 10,
              fontSize: 25,
            }}
          >
            <div style={{ position: 'relative' }}>
              <OverlayTrigger
                trigger="click"
                key="left"
                show={dropdowSelect}
                onToggle={handleSchowDropDown}
                placement="left"
                overlay={
                  <Popover
                    id="popover-positioned-left"
                    as="div"
                    show={dropdowSelect}
                  >
                    <Popover.Body
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        padding: 0,
                      }}
                    >
                      <span
                        className={styles.selectDetails}
                        onClick={handleUpdateAccount}
                      >
                        update
                      </span>
                      <span
                        className={styles.selectDetails}
                        onClick={handleDeleteAccount}
                      >
                        delete
                      </span>
                    </Popover.Body>
                  </Popover>
                }
              >
                <Button
                  style={{
                    backgroundColor: 'transparent',
                    color: '#fff',
                    width: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 10,
                    fontSize: 17,
                    top: 0,
                    right: 0,
                    border: 'none',
                  }}
                  variant="primary"
                >
                  {
                    <BsThreeDotsVertical
                      style={{
                        cursor: 'pointer',
                        color: '#fff',
                      }}
                    />
                  }
                </Button>
              </OverlayTrigger>
            </div>
          </div>
          <h2 style={{ color: '#C2CCFD' }}>{description}</h2>
          <h6 style={{ color: '#F7F8FC', fontSize: 16 }}>{`No: ${_id}`}</h6>
          <h1>
            <NumberFormat
              value={amount}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'$'}
              renderText={(value, props) => <div {...props}>{value}</div>}
              style={{
                fontWeight: 600,
                color: '#FFA463',
              }}
            />
          </h1>
          <h6 style={{ color: '#fff', fontSize: 13 }}>
            {moment(createAt).format('LL')}
          </h6>
        </div>
      </Col>
      <Col xs={7}>
        <BalanceMonth />
      </Col>
      <Col xs={12}>
        <h5
          style={{
            backgroundColor: '#fff',
            borderRadius: 20,
            padding: 30,
            margin: 15,
          }}
        >
          grafica de barra con los incomes, expenses del mes actual por dia de
          la cuenta seleccionada, ademas permitirá ver meses pasados de la
          ceunta seleccionada
        </h5>
      </Col>
    </Row>
  );
};

export default AccountDetails;
