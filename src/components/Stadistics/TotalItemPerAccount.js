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
      </div>
    </div>
  );
};

export default TotalItemPerAccount;
