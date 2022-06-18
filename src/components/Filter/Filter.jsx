import style from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterActions } from 'redux/filterSlice';
import { getFilterValue } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilterValue);
  console.log(value);

  function handleFilterValue(e) {
    dispatch(filterActions.setFilterValue(e.target.value));
  }

  return (
    <label>
      <p className={style.text}>Find contacts by name</p>
      <input
        className={style.input}
        type="text"
        value={value}
        onChange={handleFilterValue}
      />
    </label>
  );
};
