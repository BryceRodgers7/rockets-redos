import React from 'react';
import Menu from './Menu';
import header from './assets/common/header.jpg'

function Layout({ children }) {
  return (
    <div class="container">
      <header>
        <img src={header} width="1000" height="100"/>
      </header>
      <Menu />
      <div className="main-content">{children}</div>
    </div>
  );
}

export default Layout;
