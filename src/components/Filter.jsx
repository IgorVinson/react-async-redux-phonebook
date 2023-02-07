import { useDispatch, useSelector } from 'react-redux';
import { getContactsSelector, getFilterSelector } from '../redux/selectors';
import { changeFilter } from '../redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = (evt) => {
    dispatch(changeFilter(evt.target.value));
  };

  return (
    <>
      <input
        placeholder='Enter name to filter list'
        onChange={handleFilter} type='text' />
    </>
  );
};

