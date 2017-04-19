const routes = [
  {
    path: '/',
    onEnter: (nextState, replace) => replace('/london')
  },
  {
    path: '/london',
    getComponent(nextState, cb) {
      require.ensure([], require => {
        cb(null, require('./containers/london').default);
      });
    },
    childRoutes: [
      {
        indexRoute: {
          component: require('./components/industry-list').default
        }
      },
      {
        path: 'industry/:industry',
        component: require('./components/company-list').default
      },
      {
        path: 'station/:station',
        component: require('./components/company-list').default
      },
      {
        path: 'company/:company',
        component: require('./components/company-details').default
      }
    ]
  },

  // Catch unmatching routes
  {
    path: '*',
    getComponent(nextState, cb) {
      require.ensure([], require => {
        cb(null, require('./containers/404').default);
      });
    }
  }
];

export default routes;
