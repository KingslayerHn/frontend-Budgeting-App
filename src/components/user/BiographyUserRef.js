import React from 'react';
import { AiFillStar } from 'react-icons/all';

const BiographyUserRef = ({
  firstName,
  lastName,
  keywords,
  bio,
  profession,
  email,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        color: '#4e6ef5',
        width: '100%',
        justifyContent: 'center',
        height: '100%',
      }}
    >
      <h5 style={{ margin: 0, fontSize: 25 }}>{keywords}</h5>
      <span style={{ color: '#fd6900', fontSize: 17, fontWeight: 500 }}>
        {email}
      </span>
      <span style={{ color: '#979899' }}>{profession}</span>
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
      <p style={{ fontSize: 12, color: '#979899', marginTop: 10 }}>{bio}</p>
    </div>
  );
};

export default BiographyUserRef;
