import React from 'react';
import './css/Header.css';
import logo  from'./image/ait.png';
import logoq  from'./image/logo.png'
function Header() {
  return (
    <div className="myhead">
      <div className="h1"><img src={logo} className="App-logoq" alt="logo" /></div>
        <div className="h2">WELLCOME TO MYSITE </div>
        <div className="h1"><img src={logoq} className="App-logoq" alt="logo" /></div>
    </div>
  );
}

export default Header;
