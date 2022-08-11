
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { putThemePending } from '../../../_store/actions/theme.actions';
import './Theme.pcss';


function Theme() {

  const { theme }:any = useSelector<any>(((state):any => {
    return state.theme;
  } ));

  const { user }:any = useSelector<any>(state => state.auth );


  const dispatch = useDispatch();

  function handleTheme(event:any) {
    dispatch(putThemePending({
      ownerId: user.id,
      theme: theme.theme === 'light' ? 'dark' : 'light'
    }));
    event.preventDefault();
  }


  return <button onClick={handleTheme}>☼☀</button>;
}

export default Theme;
