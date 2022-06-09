import React from 'react';
import { Switch } from 'react-router-dom';
import RouteWithSubRoutes from './RouteWithSubRoutes';
import { IRoute } from './config';
import NavBar from '../components/organisms/NavBar';

interface IProps {
  routes: IRoute[];
}

const Router: React.FC<IProps> = ({ routes }: IProps) => {
  return (
    <>
      <NavBar />
      <Switch>
        {routes && routes.map((route: IRoute) => <RouteWithSubRoutes key={route.path} {...route} />)}
      </Switch>
    </>
  );
};

export default Router;
