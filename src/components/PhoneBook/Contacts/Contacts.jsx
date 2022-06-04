import style from './Contacts.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { delContact } from 'redux/actions';
import { getContacts, getFilterValue } from 'redux/selectors';

export const Contacts = () => {
  const filter = useSelector(getFilterValue);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const deleteContact = contactId => {
    const contactsFromLS = JSON.parse(localStorage.getItem('contacts')).filter(
      contact => contact.id !== contactId
    );
    localStorage.setItem('contacts', JSON.stringify(contactsFromLS));
    dispatch(delContact(contactId));
  };

  const getVisibleContacts = () => {
    const normalazedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalazedFilter)
    );
  };
  // console.log(contacts);
  return (
    <>
      <div className={style.wraper}>
        <ul className={style.list}>
          {getVisibleContacts().map(({ id, name, number }) => (
            <li key={id} className={style.list_item}>
              <div>
                <p className={style.item_text}>{name}:</p>
                <p className={style.item_text}>{number}</p>
              </div>
              <button
                className={style.button}
                onClick={() => deleteContact(id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

// Contacts.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }),
//   ),
//   onDeleteContact: PropTypes.func.isRequired,
// };
