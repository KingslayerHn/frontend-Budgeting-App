import React from 'react';
import ButttonAsBadge from '../Buttons/ButttonAsBadge';
import NumberFormat from 'react-number-format';

const TotalItemPerAccount = ({
  description,
  total,
  icon,
  bgIcon,
  fzIcon,
  sizeBgIcon,
  transference,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        padding: 10,
      }}
    >
      <div>
        <ButttonAsBadge
          Icon={icon}
          color="#fff"
          bg={bgIcon}
          size={sizeBgIcon}
          fz={fzIcon}
        />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          marginLeft: 20,
        }}
      >
        <h5 className="m-0">{description}</h5>
        {!transference && (
          <h6 className="m-0" style={{ fontSize: 26, color: 'red ' }}>
            <NumberFormat
              value={total}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'$'}
              renderText={(value, props) => <div {...props}>{value}</div>}
              style={{
                fontWeight: 600,
                color: '#FFA463',
              }}
            />
          </h6>
        )}
        {transference && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
            }}
          >
            <div style={{ display: 'flex', flex: 1, marginRight: 20 }}>
              <h6
                style={{
                  fontSize: 22,
                  fontWeight: 500,
                  color: '#3d6586',
                  margin: 0,
                  flex: 1,
                  marginRight: 5,
                }}
              >
                In:
              </h6>
              <h6 className="m-0" style={{ fontSize: 26, flex: 2 }}>
                <NumberFormat
                  value={total.in}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                  renderText={(value, props) => <div {...props}>{value}</div>}
                  style={{
                    fontWeight: 600,
                    color: '#FFA463',
                  }}
                />
              </h6>
            </div>
            <div style={{ display: 'flex', flex: 1 }}>
              <h6
                style={{
                  fontSize: 22,
                  fontWeight: 500,
                  color: '#3d6586',
                  margin: 0,
                  flex: 1,
                  marginRight: 5,
                }}
              >
                out:
              </h6>
              <h6 className="m-0" style={{ fontSize: 26, flex: 2 }}>
                <NumberFormat
                  value={total.out}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                  renderText={(value, props) => <div {...props}>{value}</div>}
                  style={{
                    fontWeight: 600,
                    color: '#FFA463',
                  }}
                />
              </h6>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TotalItemPerAccount;
