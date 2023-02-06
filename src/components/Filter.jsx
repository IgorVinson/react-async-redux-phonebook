import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from '../redux/selectors';
import { changeFilter } from '../redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts)
  const dispatch = useDispatch();

  const handleFilter = (evt) => {
    // evt.preventDefault()
    dispatch(changeFilter(evt.target.value));
  }

  return (
    <>
      <input
        placeholder='Enter name to filter list'
        onChange={handleFilter} type='text' />
    </>
  );
};

