import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
// import {PropsRoute, PrivateRoute} from '../../utils/routes';

// import LoginContainer from '../Login/LoginContainer';
// import DashboardContainer from '../Dashboard/DashboardContainer';
// import LocationsContainer from '../Locations/LocationsContainer';
// import LibraryContainer from '../Library/LibraryContainer';
// import ProgramsContainer from '../Programs/ProgramsContainer';
// import RulesContainer from '../Rules/RulesContainer';

import Login from './Login.jsx'
import Dashboard from './Dashboard.jsx'
import Test from './Test.jsx'

/////////////////////////////////////////////
const unAuthenticatedRoutes = (
  <Switch>
    <Route component={Login} />
  </Switch>
)

const authenticatedRoutes = (
  <Switch>
    <Route exact path='/' component={Dashboard} />
    <Route path='/test/:foo' component={Test} />
    <Route path='/test' component={Test} />
  </Switch>
)

export const Routes = ({isAuthenticated}) => isAuthenticated ? authenticatedRoutes : unAuthenticatedRoutes

