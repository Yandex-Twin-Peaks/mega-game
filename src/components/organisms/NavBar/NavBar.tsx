import React, { useState } from 'react';
import { routes } from '../../../router/config';
import './NavBar.pcss';
import { GiGamepad } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import {
  AppBar, Tab, Tabs, Toolbar, Button
} from '@mui/material';

const newLocal = '#063970';

function NavBar() {

  const [value, setPartMenu] = useState(0);


  return (
    <>
      <AppBar position='static' sx={{ background: newLocal }}>
        <Toolbar>
          <Tabs
            sx={{ marginLeft: 'auto' }}
            textColor='inherit' value={value}
            onChange={(e, value) => setPartMenu(value)}
            indicatorColor='secondary'
          >
            {routes.map((conf, index) => (index === 0 ? <Tab key={index} label={conf.pageName} icon={ <GiGamepad style={{
              height: '80px',
              width: '80px'
            }} />} component={Link} to={conf.path} sx = {{ marginRight: '100px' }} /> :
              <Tab key={index} label={conf.pageName} component={Link} to={conf.path} />))}
          </Tabs>
          <Button sx={{ marginLeft: 'auto' }} variant='contained'>Login{' '}</Button>
          <Button sx={{ marginLeft: '10px' }} variant='contained'>Registry{' '}</Button>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavBar;
