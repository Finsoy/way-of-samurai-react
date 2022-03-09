import React from 'react';
import styles from './Navbar.module.scss';
import {NavLink} from 'react-router-dom';
import Friends from './Friends/Friends';

const Navbar = ({state}) => {
  return (
    <nav className={styles.nav}>
      <div className={`${styles.item} ${styles.active}`}>
        <NavLink to="/profile" className={({isActive}) =>
                   isActive ? styles.active : undefined
                 }>
          Profile
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/dialogs"  className={({isActive}) =>
                   isActive ? styles.active : undefined
                 }>
          Messages
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/news"  className={({isActive}) =>
                   isActive ? styles.active : undefined
                 }>
          News
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/music"  className={({isActive}) =>
                   isActive ? styles.active : undefined
                 }>
          Music
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/settings"  className={({isActive}) =>
                   isActive ? styles.active : undefined
                 }>
          Settings
        </NavLink>
      </div>

      <Friends friends={state.friends}/>
    </nav>
  );
};

export default Navbar;
