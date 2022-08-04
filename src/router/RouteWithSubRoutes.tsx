import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IRoute } from './config';

const RouteWithSubRoutes = (route: IRoute) => {
  const authenticated = true;

  const renderRoute = (route: IRoute, props: any) => {
    if (route.redirect) {
      return <Redirect to={route.redirect} />;
    }

    if ((route.private && authenticated) || !route.private) {
      return route.component && <route.component {...props} routes={route.routes} />;
    }

    return <div>Redirect Here When Not Authenticated</div>;
  };

  return (
    <Route
      path={route.path}
      render={(props: any) => renderRoute(route, props)}
    />
  );
};

export default RouteWithSubRoutes;
