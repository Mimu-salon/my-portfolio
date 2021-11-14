import type { VFC } from "react";
import { memo } from "react";
import { Route, Switch } from "react-router";

import { CareerDatail } from "../components/pages/CareerDatail";
import { Home } from "../components/pages/Home";
import { Page404 } from "../components/pages/Page404";

export const Router: VFC = memo(() => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/carrer_datail">
        <CareerDatail />
      </Route>
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
});
