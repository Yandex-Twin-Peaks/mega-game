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
    fallback: '...'
  },
  {
    path: '/signin',
    exact: true,
    component: lazy(() => import('../components/pages/SignIn')),
    fallback: null
  },
  {
    path: '/forum',
    exact: true,
    component: lazy(() => import('../components/pages/Forum')),
    fallback: null
  },
  {
    path: '/leaderboard',
    exact: true,
    component: lazy(() => import('../components/pages/LeaderBoard')),
    fallback: null
  },
  {
    path: '/profile',
    exact: true,
    component: lazy(() => import('../components/pages/Profile')),
    fallback: null
  },
  {
    path: '/game',
    exact: true,
    component: lazy(() => import('../components/pages/Game')),
    fallback: null
  }
];
