import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { routes } from '../../../router/config';
import { sendUserLogOutPending } from '../../../_store/actions/auth.actions';

import './NavBar.pcss';

function NavBar() {
  const dispatch = useDispatch();
  const filteredPaths = routes.filter(pathItem => pathItem.pageName !== 'Auth' && pathItem.path !== '*' );

  return (
    <div className='nav-bar'>
      <div className='nav-bar__pages-container'>
        {filteredPaths.map(page => (
          <Link to={page.path}>
            <p className='nav-bar__page'>
              {page.pageName}
            </p>
          </Link>))}
      </div>
      <div className='nav-bar__logout-container'>
        <p
          className='nav-bar__logout'
          onClick={() => dispatch(sendUserLogOutPending())}
        >
          Выйти
        </p>
      </div>
    </div>
  );
}

export default NavBar;
