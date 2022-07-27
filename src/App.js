import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './../src/store/index';
import { ToastContainer } from 'react-toastify';
import './../node_modules/react-toastify/dist/ReactToastify.css';
// const dotenv = require('dotenv');
// dotenv.config();

console.log('process.env', process.env);

import Layout from './components/UI/Layout/Layout';
import Albums from './components/container/Pages/Albums/Albums';
// import Home from './components/presentation/Pages/Home/Home';
// import AlbumDetails from './components/presentation/Pages/Albums/AlbumDetails';
import NotFound from './components/UI/Common/NotFound';
// import { Auth0Provider } from '@auth0/auth0-react';
// import { useNavigate } from 'react-router-dom';

import ProtectedPage from './components/presentation/Pages/ProtectedPages/ProtectedPage';

// import ProtectedRoute from './routes/ProtectedRoute';
// import { useAuth0 } from '@auth0/auth0-react';

import './App.css';

function App() {
  // const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  // const clientdID = process.env.REACT_APP_AUTH0_CLIENT_ID;

  // const navigate = useNavigate();

  // const { isAuthenticated } = useAuth0();

  // useEffect(() => {
  //   const timeout = setTimeout(() => {}, 1000);

  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // });

  // Code spliting
  const AlbumDetails = React.lazy(() =>
    import('./components/container/Pages/Albums/AlbumDetails')
  );

  const Home = React.lazy(() =>
    import('./components/presentation/Pages/Home/Home')
  );

  return (
    <>
      {/* <Auth0Provider
        domain={domain}
        clientId={clientdID}
        redirectUri={window.location.origin}
        audiance={process.env.REACT_APP_AUDIANCE}
        scope="openid profile email"
      > */}
      <Provider store={store}>
        <Router>
          <Layout>
            <Suspense fallback={<p>Loading...</p>}>
              <Routes>
                <Route exact path="/" element={<Albums />} />
                <Route exact path="/albums" element={<Albums />} />
                <Route path="/albums/:id" element={<AlbumDetails />} />
                <Route exact path="/support-request" element={<Home />} />
                <Route exact path="/cards" element={<ProtectedPage />} />
                {/* <ProtectedRoute
                    path="/admin"
                    element={<Home />}
                    auth={false}
                  /> */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </Layout>
        </Router>
      </Provider>
      <ToastContainer closeButton={false} position="bottom-right" />
      {/* </Auth0Provider> */}
    </>
  );
}

export default App;
