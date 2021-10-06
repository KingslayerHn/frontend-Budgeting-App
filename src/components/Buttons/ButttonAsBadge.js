import React from 'react';

const ButttonAsBadge = ({ color, bg, size, Icon, fz }) => {
  return (
    <div
      style={{
        backgroundColor: bg,
        borderRadius: '50%',
        width: size,
        height: size,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: color,
        fontSize: fz,
      }}
    >
      <Icon />
    </div>
  );
};

export default ButttonAsBadge;
