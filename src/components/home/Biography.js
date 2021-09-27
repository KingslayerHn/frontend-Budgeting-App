import React from 'react';
import { useSelector } from 'react-redux';
import { AiFillStar } from 'react-icons/all';

const Biography = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        color: '#4e6ef5',
      }}
    >
      <h2 style={{ margin: 0 }}>{`${user?.firstName.split(' ')[0]} ${
        user?.lastName.split(' ')[0]
      }`}</h2>
      <span style={{ color: '#979899' }}>Web developer</span>
      <div>
        <span style={{ marginRight: 5, fontWeight: 500, fontSize: 13 }}>
          4.9
        </span>
        <AiFillStar color="#fd6900" />
        <AiFillStar color="#fd6900" />
        <AiFillStar color="#fd6900" />
        <AiFillStar color="#fd6900" />
        <AiFillStar color="#fd6900" />
        <span
          style={{
            marginLeft: 5,
            fontWeight: 500,
            fontSize: 13,
            color: '#000',
          }}
        >
          (131 reviews)
        </span>
      </div>
      <p style={{ fontSize: 12, color: '#979899', marginTop: 25 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur
      </p>
    </div>
  );
};

export default Biography;
