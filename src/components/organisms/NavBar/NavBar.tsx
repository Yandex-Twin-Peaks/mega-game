import React, { useState } from 'react';
import { routes } from '../../../router/config';
import { GiGamepad } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import {
  AppBar, Tab, Tabs, Toolbar, Button
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { sendUserLogOutPending } from '../../../_store/actions/auth.actions';

import './NavBar.pcss';

const newLocal = '#063970';

function NavBar() {
  const dispatch = useDispatch();
  const [value, setPartMenu] = useState(0);

  const filteredPaths = routes.filter(pathItem => pathItem.pageName !== 'Auth');

  return (
    <>
      <AppBar position='static' sx={{ background: newLocal }}>
        <Toolbar>
          <Tabs
            sx={{ marginLeft: 'auto' }}
            textColor='inherit' value={value}
            onChange={(_e, value) => setPartMenu(value)}
            indicatorColor='secondary'
          >
            {filteredPaths.map((conf, index) => (index === 0 ? <Tab key={index} label={conf.pageName} icon={ <GiGamepad style={{
              height: '80px',
              width: '80px'
            }} />} component={Link} to={conf.path} sx = {{ marginRight: '100px' }} /> :
              <Tab key={index} label={conf.pageName} component={Link} to={conf.path} />))}
          </Tabs>
          <Button
            sx={{ marginLeft: 'auto' }}
            variant='contained'
            onClick={() => dispatch(sendUserLogOutPending())}
          >
            Log out{' '}
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavBar;
