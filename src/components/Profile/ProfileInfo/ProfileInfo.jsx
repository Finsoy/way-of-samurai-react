import React from 'react';
import classes from './ProfileInfo.module.scss';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          className={classes.backgroundImage}
          src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
          alt="background"
        />
      </div>
      <div className={classes.descriptionBlock}> ava + description</div>
    </div>
  );
};

export default ProfileInfo;
