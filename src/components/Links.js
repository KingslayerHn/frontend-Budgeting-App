import React from 'react';
import { NavLink } from 'react-router-dom';

const Links = ({ label, Image, to }) => {
  return (
    <NavLink
      to={to}
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        textDecoration: 'none',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          flex: 1,
          width: '100%',
          flexDirection: 'row',
          padding: 20,
        }}
      >
        <div style={{ display: 'flex', flex: 1, fontSize: 25, color: '#fff' }}>
          {Image}
        </div>
        <div style={{ display: 'flex', flex: 4, fontSize: 25, color: '#fff' }}>
          {label}
        </div>
      </div>
    </NavLink>
  );
};

export default Links;
