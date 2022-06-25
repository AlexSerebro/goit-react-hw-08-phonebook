import style from './Contacts.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { delContact } from 'redux/operations';
import { getContacts, getFilterValue } from 'redux/selectors';
// import store from '../../../redux/store';

export const Contacts = () => {
  const filter = useSelector(getFilterValue);
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    const normalazedFilter = filter.toLowerCase();
    // console.log(contacts);
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalazedFilter);
    });
  };
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
                onClick={() => dispatch(delContact(id))}
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
