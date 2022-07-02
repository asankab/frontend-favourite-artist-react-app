import React from 'react';
import { Route, Navigate } from 'react-router-dom';
// import { useAuth0 } from '@auth0/auth0-react';

const ProtectedRoute = ({ auth, component: Component, ...rest }) => {
  // const { user, isAuthenticated } = useAuth0();

  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth) return <Component {...props} />;
        if (!auth)
          return (
            <Navigate to={{ path: '/', state: { from: props.location } }} />
          );
      }}
      // render={(props) => {
      //   if (isAuthenticated) return <Component {...props} />;
      //   if (!isAuthenticated)
      //     return (
      //       <Navigate to={{ path: '/', state: { from: props.location } }} />
      //     );
      // }}
    />
  );
};

export default ProtectedRoute;
