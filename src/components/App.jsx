import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Register from 'pages/Register';
import { Layout } from './Layout';
import { Contacts } from './Contacts/Contacts';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import authOperations from 'redux/auth/authOperations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
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
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>

      <NotificationContainer />
    </div>
  );
};
