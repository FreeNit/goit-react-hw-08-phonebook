import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Register from 'pages/Register';
import { Layout } from './Layout';
import { Contacts } from './Contacts/Contacts';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import authOperations from 'redux/auth/authOperations';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import authSelectors from 'redux/auth/authSelectors';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  const isFetchingCurrentUser = useSelector(
    authSelectors.selectIsFetchingCurrentUser
  );

  return (
    !isFetchingCurrentUser && (
      <div
        style={{
          // height: '100vh',
          // display: 'flex',
          // flexDirection: 'column',
          // justifyContent: 'space-between',
          // alignItems: 'center',
          // gap: 35,
          fontSize: 16,
          // textAlign: 'center',
          color: '#010101',
        }}
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <PublicRoute>
                  <Home />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute restricted redirectTo="/contacts">
                  <Register />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute restricted redirectTo="/contacts">
                  <Login />
                </PublicRoute>
              }
            />

            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login">
                  <Contacts />
                </PrivateRoute>
              }
            />
          </Route>
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>

        <NotificationContainer />
      </div>
    )
  );
};
