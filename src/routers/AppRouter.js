import React from 'react';
import { Router, Route, Switch, Link, NavLink,BrowserRouter } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import NavBar from '../components/NavBar';
import Instance from '../components/Instance';



export const history = createHistory();

const AppRouter = () => (
  <BrowserRouter>
    <div>
    <NavBar />
      <Switch>
        <Route path="/" component={DashboardPage} exact={true} />
        <Route path="/instance/:id" component={Instance}  />
        <Route component={NotFoundPage}  />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
