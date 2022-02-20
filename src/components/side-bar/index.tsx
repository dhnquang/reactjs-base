import {
  Chat,
  EmojiFlags,
  ExpandMoreOutlined,
  LocalHospital,
  People,
  Storefront,
  VideoLibrary,
} from '@mui/icons-material';
import React from 'react';
import './styles.css';
import SidebarRow from './components/sidebar-row/index';

export const SideBar = () => {
  return (
    <div className="sidebar">
      <SidebarRow
        src="https://scontent.fhan6-1.fna.fbcdn.net/v/t1.6435-9/111021951_2269766039835644_2484974578399129587_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ExbwgQIueewAX_lM5Fj&_nc_ht=scontent.fhan6-1.fna&oh=00_AT8E_XNvYgxTD0gj1cw2j5Vz-PYVM4GYI0cj2XTQVdQJ1Q&oe=623159FF"
        title="Quangg"
      />
      <SidebarRow Icon={LocalHospital} title="COVID-19 Information Center" />
      <SidebarRow Icon={EmojiFlags} title="Pages" />
      <SidebarRow Icon={People} title="Friends" />
      <SidebarRow Icon={Chat} title="Messenger" />
      <SidebarRow Icon={Storefront} title="Marketplace" />
      <SidebarRow Icon={VideoLibrary} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace" />
    </div>
  );
};
