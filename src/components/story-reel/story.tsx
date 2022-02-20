import React from 'react';
import './styles.css';
import { Avatar } from '@mui/material';

function Story({ image, profileSrc, title }: any) {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className="story">
      <Avatar className="story__avatar" src={profileSrc} />
      <h4>{title}</h4>
    </div>
  );
}

export default Story;
