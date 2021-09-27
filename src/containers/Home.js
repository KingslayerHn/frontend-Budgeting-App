import React from 'react';
import { useSelector } from 'react-redux';
import Profile from '../components/home/Profile';
import ModalEditProfile from '../components/home/ModalEditProfile';

const Home = () => {
  const { modalEditProfile } = useSelector((state) => state.ui);
  const { user } = useSelector((state) => state.auth);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        flex: 1,
        justifyContent: 'start',
      }}
    >
      <h5 style={{ color: '#527491' }}>Profile</h5>
      {!modalEditProfile && <Profile />}
      {modalEditProfile && <ModalEditProfile user={user} />}
    </div>
  );
};

export default Home;
