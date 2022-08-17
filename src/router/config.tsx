import { ReactNode } from 'react';

import homePage from '../components/pages/Home';
import authPage from '../components/pages/Authorization';
import forumPage from '../components/pages/Forum';
import leaderBoardPage from '../components/pages/LeaderBoard';
import profilePage from '../components/pages/Profile';
import gamePage from '../components/pages/Game';
import oneTopic from '../components/pages/OneTopic';
// import notFoundPage from '../components/pages/NotFound';

export interface IRoute {
  /** Адрес */
  path: string;
  /** Точность совпадения */
  exact: boolean;
  /** Защищенный роут */
  private?: boolean;
  /** Компонент */
  component?: () => JSX.Element;
  /** Дочерние роуты */
  routes?: IRoute[];
  /** Редирект*/
  redirect?: string;
  /** Прелоудер ф*/
  fallback: NonNullable<ReactNode> | null;
  /** Наименование страницы */
  pageName?: string;
}

export const routes: IRoute[] = [
  {
    path: '/',
    exact: true,
    redirect: '/home',
    fallback: '...'
  },
  {
    path: '/home',
    exact: false,
    component: homePage,
    fallback: '...',
    pageName: 'Home',
  },
  {
    path: '/auth',
    exact: true,
    component: authPage,
    fallback: null,
    pageName: 'Auth',
  },
  {
    path: '/forum',
    exact: true,
    component: forumPage,
    fallback: null,
    pageName: 'Forum',
  },
  {
    path: '/leaderboard',
    exact: true,
    component: leaderBoardPage,
    fallback: null,
    pageName: 'Leaderboard',
  },
  {
    path: '/profile',
    exact: true,
    component: profilePage,
    fallback: null,
    pageName: 'Profile',
  },
  {
    path: '/game',
    exact: true,
    component: gamePage,
    fallback: null,
    pageName: 'Game',
  },
  {
    path: '/forum/:Id',
    exact: true,
    component: oneTopic,
    fallback: null,
    pageName: 'OneTopic',
  },
  // {
  //   path: '*',
  //   exact: true,
  //   component: notFoundPage,
  //   fallback: null
  // }
];
