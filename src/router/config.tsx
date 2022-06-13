import {
  ComponentType, lazy, LazyExoticComponent, ReactNode
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
    path: '/signin',
    exact: true,
    component: lazy(() => import('../components/pages/SignIn')),
    fallback: null,
    pageName: 'Sign-in',
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
  }
];
