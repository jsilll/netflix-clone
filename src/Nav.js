import React from 'react';

import './Nav.css';
import { Button, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import RedeemIcon from '@material-ui/icons/Redeem';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function Nav() {
  // navstate == True => Navbar should be dark
  const [navshow, setNavShow] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setNavShow(true);
      } else {
        setNavShow(false);
      }
    });
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  return (
    <div>
      <nav className={`nav ${!navshow && 'nav__transparent'}`}>
        <a href='/'>
          <img
            className='nav__logo'
            alt='Netflix Logo'
            src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
          ></img>
        </a>
        <div className='nav__links'>
          <Button className='nav__button'>Home</Button>
          <Button className='nav__button'>TV Shows</Button>
          <Button className='nav__button'>Movies</Button>
          <Button className='nav__button'>Latest</Button>
          <Button className='nav__button'>My List</Button>
        </div>
        <div className='nav__spacer'></div>
        <div className='nav__utilityMenu'>
          <IconButton className='nav__button'>
            <SearchIcon></SearchIcon>
          </IconButton>
          <IconButton className='nav__button'>
            <RedeemIcon></RedeemIcon>
          </IconButton>
          <IconButton className='nav__button'>
            <NotificationsIcon></NotificationsIcon>
          </IconButton>
        </div>
        <div class='nav__profileMenu'>
          <img
            className='nav__avatar'
            alt='Profile Logo'
            src={window.location.origin + '/profile.png'}
          ></img>
          <IconButton className='nav__button'>
            <ArrowDropDownIcon></ArrowDropDownIcon>
          </IconButton>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
