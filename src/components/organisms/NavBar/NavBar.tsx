import React, { useState } from 'react';
import { routes } from '../../../router/config';
import { GiGamepad } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import {
  AppBar, Tab, Tabs, Toolbar, Button
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { sendUserLogOutPending } from '../../../_store/actions/auth.actions';
import Theme from '../../molecules/Theme/Theme';
import './NavBar.pcss';

let newLocal = '#063970';

function NavBar() {
  const dispatch = useDispatch();
  const [value, setPartMenu] = useState(0);

  const { theme }:any = useSelector<any>(((state):any => {
    return state.theme;
  } ));

  const filteredPaths = routes.filter(pathItem => pathItem.pageName !== 'Auth' && pathItem.pageName !== 'OneTopic');


  if (theme) {
    newLocal = theme.theme === 'light' ? '#063970' : theme.theme === 'dark' ? '#808080' : '#FF0000';
  }

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
          <Theme />
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
