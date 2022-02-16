import React from 'react';
import styles from './../Dialogs.module.scss';
import { NavLink } from 'react-router-dom';

const DialogItem = ({ id, name }) => {
  let path = `/dialogs/${id}`;

  return (
    <div>
      <NavLink
        className={styles.dialog}
        activeClassName={styles.active}
        to={path}
      >
        {name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
