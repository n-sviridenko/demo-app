import MainLayout from 'bundles/App/layouts/MainLayout';
import HomeRoute from 'bundles/Home/routes/HomeRoute';
import CounterRoute from 'bundles/Counter/routes/CounterRoute';

function AppRoute(store) {
  return {
    path: '/',
    component: MainLayout,
    indexRoute: HomeRoute,
    childRoutes: [
      new CounterRoute(store),
    ],
  };
}

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

export default AppRoute;
