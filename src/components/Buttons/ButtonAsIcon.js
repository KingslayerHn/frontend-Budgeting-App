import React from 'react';
import { Button } from 'react-bootstrap';

const ButtonAsIcon = ({ onClick, color, icon, size, disabled }) => {
  return (
    <Button
      style={{
        bottom: 0,
        right: 0,
        fontSize: size,
        color: color,
        opacity: disabled ? 0.5 : 1,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 'auto',
        border: 'none',
      }}
      variant="light"
      as={icon}
      onClick={onClick}
      disabled={disabled}
    />
  );
};

export default ButtonAsIcon;
