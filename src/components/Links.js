import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles.module.scss';

const Links = ({ label, Image, to }) => {
  return (
    <NavLink
      to={to}
      exact
      className={styles.navlinks}
      activeClassName={styles.activeLinks}
    >
      <div className={styles.icon}>{Image}</div>
      <div className={styles.label}>{label}</div>
    </NavLink>
  );
};

export default Links;
