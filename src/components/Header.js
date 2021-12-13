import React from 'react';
import PinterestIcon from '@mui/icons-material/Pinterest';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import TextsmsIcon from '@mui/icons-material/Textsms';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';
import '../style/Header.css';

const Header = () => {
  return (
    <div className="header_wrapper">
      <div className="header_logo">
        <IconButton>
          <PinterestIcon />
        </IconButton>
      </div>
      <div className="header_button" homePage>
        <p>homepage</p>
      </div>
      <div className="header_button" following>
        <p>following</p>
      </div>
      <div className="header_search">
        <div className="header_searchContainer">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <form>
            <input type="search" />
            <button>Submit</button>
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
