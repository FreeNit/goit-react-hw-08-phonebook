import { ContactForm } from 'components/ContactForm/ContactForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNewFilterValue } from 'redux/filter/filterSlice';

export const Contacts = () => {
  const isLoading = useSelector(state => state.contacts.isLoading);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getContactThunk());
  // }, [dispatch]);

  const contacts = useSelector(state => state.contacts.items);
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
    // dispatch(deleteContactThunk(contactID));
  };

  const handleFilterChange = filterValue => {
    dispatch(setNewFilterValue(filterValue));
  };

  return (
    <>
      <div>
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
    </>
  );
};
