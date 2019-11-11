import React, { Suspense } from 'react';
import { BrowserRouter as ReactRouter, Route, Switch } from 'react-router-dom';

const SettingView = React.lazy(() => import('../views/Setting'));
const SendMessageView = React.lazy(() => import('../views/SendMessage'));
const ReportView = React.lazy(() => import('../views/Report'));
const HomeView = React.lazy(() => import('../views/Home'));

export const Router = () => {
  return (
    <ReactRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/setting">
            <SettingView />
          </Route>
          <Route path="/send">
            <SendMessageView />
          </Route>
          <Route path="/report">
            <ReportView />
          </Route>
          <Route path="/">
            <HomeView />
          </Route>
        </Switch>
      </Suspense>
    </ReactRouter>
  );
};
