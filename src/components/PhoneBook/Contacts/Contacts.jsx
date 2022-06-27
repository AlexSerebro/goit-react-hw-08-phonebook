import style from './Contacts.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { delContact } from 'redux/operations';
import { getContacts, getFilterValue } from 'redux/selectors';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export const Contacts = () => {
  const filter = useSelector(getFilterValue);
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    const normalazedFilter = filter.toLowerCase();

    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalazedFilter);
    });
  };
  return (
    <>
      <div className={style.wraper}>
        <h3 className={style.text}>Contacts</h3>
        <ul className={style.list}>
          {getVisibleContacts().map(({ id, name, number }) => (
            <li key={id} className={style.list_item}>
              <div className={style.contact}>
                <p className={style.item_text}>{name}:</p>
                <p className={style.item_text}>{number}</p>
              </div>

              <Button
                variant="outlined"
                startIcon={<DeleteIcon />}
                onClick={() => dispatch(delContact(id))}
              >
                Delete
              </Button>
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
