import type { VFC } from 'react';
import { memo } from 'react';
import { Route, Switch } from 'react-router';

import { CareerDetail } from '../components/pages/CareerDetail';
import { Home } from '../components/pages/Home';
import { Page404 } from '../components/pages/Page404';

export const Router: VFC = memo(() => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/carrer_detail">
        <CareerDetail />
      </Route>
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
});
