import homePage from '../components/pages/Home';
import authPage from '../components/pages/Authorization';
import forumPage from '../components/pages/Forum';
import leaderBoardPage from '../components/pages/LeaderBoard';
import profilePage from '../components/pages/Profile';
import gamePage from '../components/pages/Game';
import notFoundPage from '../components/pages/NotFound';

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
  pageName?: string;
}

export const routes: IRoute[] = [
  {
    path: '/',
    exact: true,
    redirect: '/home',
  },
  {
    path: '/home',
    exact: false,
    component: homePage,
    pageName: 'Home',
  },
  {
    path: '/auth',
    exact: true,
    component: authPage,
    pageName: 'Auth',
  },
  {
    path: '/forum',
    exact: true,
    component: forumPage,
    pageName: 'Forum',
  },
  {
    path: '/leaderboard',
    exact: true,
    component: leaderBoardPage,
    pageName: 'Leaderboard',
  },
  {
    path: '/profile',
    exact: true,
    component: profilePage,
    pageName: 'Profile',
  },
  {
    path: '/game',
    exact: true,
    component: gamePage,
    pageName: 'Game',
  },
  {
    path: '*',
    exact: true,
    component: notFoundPage,
  }
];
