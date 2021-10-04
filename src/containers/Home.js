import React from 'react';
import { useSelector } from 'react-redux';
import Profile from '../components/home/Profile';
import ModalEditProfile from '../components/home/ModalEditProfile';
import AccountDetails from '../components/Account/AccountDetails';

const Home = () => {
  const { modalEditProfile } = useSelector((state) => state.ui);
  const { accountRef } = useSelector((state) => state.references);
  const { user } = useSelector((state) => state.auth);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        flex: 1,
        justifyContent: 'start',
        height: '100%',
        overflowY: 'auto',
      }}
    >
      {!accountRef ? (
        <>
          <h5 style={{ color: '#527491' }}>Profile</h5>
          {!modalEditProfile && <Profile />}
          {modalEditProfile && <ModalEditProfile user={user} />}
        </>
      ) : (
        <>
          <h5 style={{ color: '#527491', paddingLeft: 20 }}>Account details</h5>
          <AccountDetails />
        </>
      )}
    </div>
  );
};

export default Home;
