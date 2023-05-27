import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  deleteContact,
  fetchContacts,
} from 'redux/contacts/contactsOperations';
import { setNewFilterValue } from 'redux/filter/filterSlice';
import {
  ContactListSection,
  ContactsList,
  FilterWrapper,
} from './ContactList.styled';

export const ContactList = () => {
  const isLoading = useSelector(state => state.contacts.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
    dispatch(deleteContact(contactID));
  };

  const handleFilterChange = filterValue => {
    dispatch(setNewFilterValue(filterValue));
  };
  return (
    <ContactListSection>
      {isLoading && <h3>...Loading</h3>}

      {contacts.length > 0 && (
        <div>
          <FilterWrapper>
            <label>
              Find contacts by name:
              <input
                type="text"
                onChange={evt => {
                  handleFilterChange(evt.target.value);
                }}
              />
            </label>
          </FilterWrapper>

          <ContactsList>
            {visibleContacts.map(({ id, name, number }) => (
              <li key={id}>
                {name + ' ' + number}
                <button
                  className="deleteContactBtn"
                  type="button"
                  onClick={() => {
                    handleDeleteContact(id);
                  }}
                >
                  Delete
                </button>
              </li>
            ))}
          </ContactsList>
        </div>
      )}
    </ContactListSection>
  );
};
