import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.pcss';
import { GiGamepad } from 'react-icons/gi';


function NavBar() {

  return (
    <nav className='Nav'>
      <div className='Nav__container'>
        <Link to='/' className='Nav__brand'>
          <GiGamepad style={{
            height: '80px',
            width: '80px'
          }} />
        </Link>

        <div className='Nav__right'>
          <ul className='Nav__item-wrapper'>
            <li className='Nav__item'>
              <Link className='Nav__link' to='/home'>home</Link>
            </li>
            <li className='Nav__item'>
              <Link className='Nav__link' to='/signin'>signin</Link>
            </li>
            <li className='Nav__item'>
              <Link className='Nav__link' to='/forum'>forum</Link>
            </li>
            <li className='Nav__item'>
              <Link className='Nav__link' to='/leaderboard'>leaderboard</Link>
            </li>
            <li className='Nav__item'>
              <Link className='Nav__link' to='/game'>game</Link>
            </li>
            <li className='Nav__item'>
              <Link className='Nav__link' to='/profile'>profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
