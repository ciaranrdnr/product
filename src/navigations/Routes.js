import React from "react";
import Home from "../pages/Home";
import Detail from "../pages/Detail";

import { Switch, Route } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/detail/:id">
          <Detail />
        </Route>
        <Route exact path="/detail">
          <Detail />
        </Route>
      </Switch>
    </Router>
  );
};
export default Routes;
