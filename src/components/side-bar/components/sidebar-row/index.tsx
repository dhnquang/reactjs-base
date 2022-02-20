import React from 'react';
import './styles.css';
import { Avatar } from '@mui/material';

function SidebarRow({ src, Icon, title }: any) {
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  );
}

export default SidebarRow;
