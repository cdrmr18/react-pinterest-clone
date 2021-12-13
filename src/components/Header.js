import React from 'react';
import '../style/Header.css';

const Header = () => {
  return (
    <div className="app_header">
      <div className="header_wrapper">
        <div className="header_logo">
          <p>logo</p>
        </div>
        <div className="header_button" homePage>
          <p>homepage</p>
        </div>
        <div className="header_button" following>
          <p>following</p>
        </div>
        <div className="header_search">
          <div className="header_searchContainer">
            <p>search icon</p>
            <form>
              <input type="search" />
              <button>'Submit</button>
            </form>
          </div>
        </div>
        <div className="header_menuItems">
          <p>icon</p>
          <p>icon</p>
          <p>icon</p>
          <p>icon</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
