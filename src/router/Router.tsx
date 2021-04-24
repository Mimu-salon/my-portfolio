import { memo, VFC } from 'react';
import { Route, Switch } from 'react-router';

import { Home } from '../components/pages/Home';
import { CareerDatail } from '../components/pages/CareerDatail';
import { Page404 } from '../components/pages/Page404';

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
