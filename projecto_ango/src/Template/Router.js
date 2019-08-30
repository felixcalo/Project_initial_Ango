import React from "react";
import { Route, Redirect, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";

import Inscricao from "./Inscricao";
import Login from "./Login";

export default (props) => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/inscricao" component={Inscricao} />
        <Route path="/login" component={Login} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  </div>
);
