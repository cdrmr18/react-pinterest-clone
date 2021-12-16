import React, { useState } from 'react';
import PinterestIcon from '@mui/icons-material/Pinterest';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import TextsmsIcon from '@mui/icons-material/Textsms';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';
import '../style/Header.css';

const Header = ({ getSearchInput }) => {
  let [input, setInput] = useState('');

  const getInput = (e) => {
    setInput(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    getSearchInput(input);
  };

  return (
    <div className="header_wrapper">
      <div className="header_logo">
        <IconButton>
          <PinterestIcon />
        </IconButton>
      </div>
      <div className="header_button homePage">
        <a href="/">Home</a>
      </div>
      <div className="header_button following">
        <p>Following</p>
      </div>
      <div className="header_search">
        <div className="header_searchContainer">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <form onSubmit={handleSearch}>
            <input type="search" onChange={getInput} />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div className="header_menuItems">
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <TextsmsIcon />
        </IconButton>
        <IconButton>
          <AccountCircleIcon />
        </IconButton>
        <IconButton>
          <KeyboardArrowDownIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
