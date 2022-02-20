import { Header } from 'components/header-bar';
import { SideBar } from 'components/side-bar';
import { Widgets } from 'components/widgets';
import Feed from './pages/feeds';
import React from 'react';
import './App.css';

function App() {
  return (
    // BEM naming convention
    <div className="app">
      {/* Header */}
      <Header />

      {/* App body */}
      <div className="app__body">
        {/* Sidebar */}
        <SideBar />
        {/* Feed */}
        <Feed />
        {/* Widgets */}
        <Widgets />
      </div>
    </div>
  );
}

export default App;
