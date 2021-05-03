import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import MainPage from "../page/MainPage";
import NotExistPage from "../page/NotExistPage";

const RootRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route component={NotExistPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default RootRouter;
