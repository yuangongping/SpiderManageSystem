/**
 * 定义应用路由
 */
import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import UserLayout from './layouts/UserLayout';
import BasicLayout from './layouts/BasicLayout';
import PrivateRoute from './utils/privateRouter';

// 按照 Layout 分组路由
// UserLayout 对应的路由：/user/xxx
// BasicLayout 对应的路由：/xxx
const router = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/user" component={UserLayout} />
        <Route path="/contract" component={BasicLayout} />
        <Redirect from="/" to="/contract/index" />
      </Switch>
    </HashRouter>
  );
};

export default router;


