import { combineReducers } from 'redux';
import user from './redux/slices/userSlice';
import phases from './redux/catalogs/phaseSlice';
import employees from './redux/catalogs/employeeSlice';

export default combineReducers({
  user,
  phases,
  employees
});
