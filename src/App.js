import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './../src/store/index';
import { ToastContainer } from 'react-toastify';
import './../node_modules/react-toastify/dist/ReactToastify.css';

import Layout from './components/UI/Layout/Layout';
import Albums from './components/container/Pages/Albums/Albums';
// import Home from './components/presentation/Pages/Home/Home';
// import AlbumDetails from './components/presentation/Pages/Albums/AlbumDetails';
import NotFound from './components/UI/Common/NotFound';
import { Auth0Provider } from '@auth0/auth0-react';

import ProtectedPage from './components/presentation/Pages/ProtectedPages/ProtectedPage';

// import ProtectedRoute from './routes/ProtectedRoute';
// import { useAuth0 } from '@auth0/auth0-react';

import './App.css';

function App() {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientdID = process.env.REACT_APP_AUTH0_CLIENT_ID;
  // const { isAuthenticated } = useAuth0();

  // useEffect(() => {
  //   const timeout = setTimeout(() => {}, 1000);

  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // });

  // Code spliting
  const AlbumDetails = React.lazy(() =>
    import('./components/presentation/Pages/Albums/AlbumDetails')
  );

  const Home = React.lazy(() =>
    import('./components/presentation/Pages/Home/Home')
  );

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientdID}
      redirectUri={window.location.origin}
      audiance="http://localhost:3000"
      scope="openid profile email"
    >
      <Provider store={store}>
        <Router>
          <Layout>
            <Suspense fallback={<p>Loading...</p>}>
              <Routes>
                {/* <Route exact path="/" element={<Navigate to="albums" />} /> */}
                {/* <Route exact path="/" element={<Home />} /> */}
                <Route exact path="/albums" element={<Albums />} />
                <Route path="/albums/:id" element={<AlbumDetails />} />
                <Route exact path="/accounts" element={<Home />} />
                <Route exact path="/cards" element={<ProtectedPage />} />

                {/* <ProtectedRoute path="/accounts" element={<Home />} auth={false} /> */}
                <Route path="*" component={NotFound} />
              </Routes>
            </Suspense>
          </Layout>
        </Router>
      </Provider>
      <ToastContainer closeButton={false} position="bottom-right" />
    </Auth0Provider>
  );
}

export default App;
