import { useDispatch, useSelector } from 'react-redux';

import { NotificationManager } from 'react-notifications';
import { addContact } from 'redux/contacts/contactsOperations';
import { ContactFormWrapper } from './ContactForm.styled';

const checkUserAvailability = (contacts, userName) => {
  const userNameNormalized = userName.toLowerCase();
  return contacts.find(
    contact => contact.name.toLowerCase() === userNameNormalized
  );
};

export const ContactForm = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.items);

  // -> Prevent default from behavior
  const handleSubmit = evt => {
    evt.preventDefault();

    const contact = {
      name: evt.target.elements.name.value,
      number: evt.target.elements.number.value,
    };

    // -> Check if user name is already in the list
    const isUserAvailable = checkUserAvailability(contacts, contact.name);

    if (isUserAvailable) {
      NotificationManager.warning(`${contact.name} is already in contacts`);
      return;
    }

    dispatch(addContact(contact));
    // -> Reset form`s fields
    evt.target.reset();
  };

  return (
    <ContactFormWrapper>
      <h3>Phonebook</h3>
      <form className="newContactForm" onSubmit={handleSubmit}>
        <label>
          <span>Name</span>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label>
          <span>Number</span>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button className="addContactBtn" type="submit">
          Add contact
        </button>
      </form>
    </ContactFormWrapper>
  );
};
