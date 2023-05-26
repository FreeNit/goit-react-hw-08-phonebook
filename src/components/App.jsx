import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { useEffect } from 'react';
import { getContactThunk, deleteContactThunk } from 'redux/store/thunks';
import { setNewFilterValue } from 'redux/store/filterSlice';

import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Register from 'pages/Register';
import { Layout } from './Layout';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContactThunk());
  }, [dispatch]);

  const contacts = useSelector(state => state.contacts.items);
  const isLoading = useSelector(state => state.contacts.isLoading);
  const filter = useSelector(state => state.filter.filter);

  const normalizedFilter = filter ? filter.toLowerCase() : '';

  const visibleContacts =
    contacts.length > 0
      ? contacts.filter(contact =>
          contact.name.toLowerCase().includes(normalizedFilter)
        )
      : [];

  // console.log('contacts -> ', contacts);

  const handleDeleteContact = contactID => {
    dispatch(deleteContactThunk(contactID));
  };

  const handleFilterChange = filterValue => {
    dispatch(setNewFilterValue(filterValue));
  };

  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        // flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 35,
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
        </Route>

        {/* 
        <Route path='/todos' component={Todos}/> */}
      </Routes>

      {/* <div>
        <ContactForm />
      </div>
      <div>
        {isLoading && <h3>...Loading</h3>}

        {contacts.length > 0 && (
          <div>
            <div>
              <label>
                Find contacts by name
                <input
                  type="text"
                  onChange={evt => {
                    handleFilterChange(evt.target.value);
                  }}
                />
              </label>
            </div>

            <ul>
              {visibleContacts.map(({ id, name, phone }) => (
                <li key={id}>
                  {name + ' ' + phone}
                  <button
                    type="button"
                    onClick={() => {
                      handleDeleteContact(id);
                    }}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <NotificationContainer /> */}
    </div>
  );
};
