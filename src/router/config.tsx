import {
  ComponentType,
  lazy,
  LazyExoticComponent,
  ReactNode
} from 'react';

export interface IRoute {
  /** Адрес */
  path: string;
  /** Точность совпадения */
  exact: boolean;
  /** Защищенный роут */
  private?: boolean;
  /** Компонент */
  component?: LazyExoticComponent<ComponentType<any>>;
  /** Дочерние роуты */
  routes?: IRoute[];
  /** Редирект*/
  redirect?: string;
  /** Прелоудер ф*/
  fallback: NonNullable<ReactNode> | null;
  /** Наименование страницы */
  pageName?: string;
}

// const auth = import('../components/pages/Authorization');

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
    component: lazy(() => import('../components/pages/Home')),
    fallback: '...',
    pageName: 'Home',
  },
  {
    path: '/auth',
    exact: true,
    component: lazy(() => import('../components/pages/Authorization')),
    fallback: null,
    pageName: 'Auth',
  },
  {
    path: '/forum',
    exact: true,
    component: lazy(() => import('../components/pages/Forum')),
    fallback: null,
    pageName: 'Forum',
  },
  {
    path: '/leaderboard',
    exact: true,
    component: lazy(() => import('../components/pages/LeaderBoard')),
    fallback: null,
    pageName: 'Leaderboard',
  },
  {
    path: '/profile',
    exact: true,
    component: lazy(() => import('../components/pages/Profile')),
    fallback: null,
    pageName: 'Profile',
  },
  {
    path: '/game',
    exact: true,
    component: lazy(() => import('../components/pages/Game')),
    fallback: null,
    pageName: 'Game',
  },
  {
    path: '*',
    exact: true,
    component: lazy(() => import('../components/pages/NotFound')),
    fallback: null
  }
];


// import {
//   // ComponentType,
//   // lazy,
//   // LazyExoticComponent,
//   ReactNode
// } from 'react';
// import Home from '../components/pages/Home';
// import Authorization from '../components/pages/Authorization';
// import Forum from '../components/pages/Forum';
// import LeaderBoard from '../components/pages/LeaderBoard';
// import Profile from '../components/pages/Profile';
// import Game from '../components/pages/Game';
// import NotFound from '../components/pages/NotFound';

// export interface IRoute {
//   /** Адрес */
//   path: string;
//   /** Точность совпадения */
//   exact: boolean;
//   /** Защищенный роут */
//   private?: boolean;
//   /** Компонент */
//   component?: any; // LazyExoticComponent<ComponentType<any>>;
//   /** Дочерние роуты */
//   routes?: IRoute[];
//   /** Редирект*/
//   redirect?: string;
//   /** Прелоудер ф*/
//   fallback: NonNullable<ReactNode> | null;
//   /** Наименование страницы */
//   pageName?: string;
// }

// // const auth = import('../components/pages/Authorization');


// // const home = import('../components/pages/Home');
// // const auth = import('../components/pages/Authorization');
// // const forum = import('../components/pages/Forum');
// // const leaderBoard = import('../components/pages/LeaderBoard');
// // const Profile = import('../components/pages/Profile');
// // const Game = import('../components/pages/Game');
// // const notFound = import('../components/pages/NotFound');
