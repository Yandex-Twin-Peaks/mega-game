import React, { useEffect } from 'react';
import { Routes, useNavigate } from 'react-router-dom';
import NavBar from './organisms/NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { sendGetUserPending } from '../_store/actions/auth.actions';
import { IStore } from '../_store';
import { routes } from '../router/config';

export default function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((store: IStore) => store.auth);

  useEffect(() => {
    dispatch(sendGetUserPending());
  }, []);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/auth', { replace: true });
    }
  }, [isLoggedIn]);
  return (
    <div className='app'>
      <div className='app__nav-bar'>
        <NavBar/>
      </div>
      <Routes>
        {routes.map((route) => route.component)}
      </Routes>
    </div>
  );
}
