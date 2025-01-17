import React, { Suspense, lazy, useEffect } from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import { RouteComponentProps, withRouter } from 'react-router';
//import MyoptionGroup from './MyoptionGroup';
import DefaultGroup from './DefaultGroup';

const MyoptionGroup = lazy(() => import('./MyoptionGroup'));

const MenuGroup:React.FC<RouteComponentProps> = ({ history }) => {

  useEffect(() => {
    import('./MyoptionGroup');
  });

  return (
    <Router history={history}>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path='/ko/mypage'>
            <MyoptionGroup/>
          </Route>
          <Route path={['/ko/search', '/ko/register']}>
            <DefaultGroup/>
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
};

export default withRouter(MenuGroup);