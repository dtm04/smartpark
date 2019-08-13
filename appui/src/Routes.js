import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from './components/Home';
import User from './components/User';
import Manager from './components/Manager';
import NotFound from './components/NotFound';


export default() =>
    <Switch>
    	<Route exact path='/' component={Home} />
    	<Route exact path='/user/' component={User} />
    	<Route exact path='/manager/' component={Manager} />
      <Route component={NotFound} />
    </Switch>;