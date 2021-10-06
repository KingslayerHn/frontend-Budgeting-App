import React from 'react';
import { Placeholder, Button } from 'react-bootstrap';
import TotalItemPerAccount from '../Stadistics/TotalItemPerAccount';

const BalanceMonthPlaceHolder = () => {
  return (
    <>
      <h5 style={{ color: '#527491', paddingLeft: 20 }}>november</h5>
      <div
        style={{
          backgroundColor: '#fff',
          borderRadius: 20,
          padding: 20,
          margin: 15,
        }}
      >
        <Placeholder
          as="div"
          animation="glow"
          style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}
        >
          <Placeholder
            xs={4}
            style={{
              width: 60,
              height: 60,
              borderRadius: '50%',
              backgroundColor: '#6a84f5',
              marginRight: 20,
            }}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              margin: 0,
            }}
          >
            <Placeholder
              as="p"
              xs={8}
              style={{
                backgroundColor: '#6a84f5',
                padding: 10,
                marginBottom: 3,
              }}
            />
            <Placeholder
              as="p"
              xs={6}
              style={{
                backgroundColor: '#fd6900',
                padding: 10,
                marginBottom: 3,
              }}
            />
          </div>
        </Placeholder>
        <Placeholder
          as="div"
          animation="glow"
          style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}
        >
          <Placeholder
            xs={4}
            style={{
              width: 60,
              height: 60,
              borderRadius: '50%',
              backgroundColor: '#6a84f5',
              marginRight: 20,
            }}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              margin: 0,
            }}
          >
            <Placeholder
              as="p"
              xs={8}
              style={{
                backgroundColor: '#6a84f5',
                padding: 10,
                marginBottom: 3,
              }}
            />
            <Placeholder
              as="p"
              xs={6}
              style={{
                backgroundColor: '#fd6900',
                padding: 10,
                marginBottom: 3,
              }}
            />
          </div>
        </Placeholder>
        <Placeholder
          as="div"
          animation="glow"
          style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}
        >
          <Placeholder
            xs={4}
            style={{
              width: 60,
              height: 60,
              borderRadius: '50%',
              backgroundColor: '#6a84f5',
              marginRight: 20,
            }}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              margin: 0,
            }}
          >
            <Placeholder
              as="p"
              xs={8}
              style={{
                backgroundColor: '#6a84f5',
                padding: 10,
                marginBottom: 3,
              }}
            />
            <Placeholder
              as="p"
              xs={6}
              style={{
                backgroundColor: '#fd6900',
                padding: 10,
                marginBottom: 3,
              }}
            />
          </div>
        </Placeholder>
      </div>
    </>
  );
};

export default BalanceMonthPlaceHolder;
