import React, { useEffect } from 'react';
import Router from './router/Router';
import { routes } from './router/config';
import { IStore } from './_store';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { sendGetUserPending } from './_store/actions/auth.actions';

const App = () => {
  /** ----------------------------- Глобальное состояние ---------------------------------- */
  const { isLoggedIn } = useSelector((store: IStore) => store.auth);
  const history = useHistory();
  const dispatch = useDispatch();

  /** ----------------------------- Эффекты для запросов ---------------------------------- */
  /** При первой загрузке приложения отправляем запрос на юзера
   * Дело в том, что у логина сессия длится сутки, один из вариантов
   * проверить протухла она или нет является проверка данных юзера
   * (статус кода get user)
   * Кто предложит лучше, тот молодец, пусть реализует и научит других
   */
  useEffect(() => {
    dispatch(sendGetUserPending());
  }, []);

  /** Далее следим за флагом логина, поскольку пользователь ещё может разлогиниться */
  useEffect(() => {
    /** Если пользователь незалогинен, перенаправляем на логин
     * Во всех остальных случаях работает обычный роутинг */
    if (!isLoggedIn) {
      history.push('/auth');
    }
  }, [isLoggedIn]);


  /** ----------------------------- Рендер компонентов ------------------------------------ */
  return (
    <Router routes={routes} />
  );
};

export default App;
