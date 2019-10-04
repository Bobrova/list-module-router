import { combineReducers } from 'redux';

import list from './list';
import form from './form';
import search from './search';
import edit from './edit';
import error from './error';

export default combineReducers({
  list,
  form,
  search,
  edit,
  error,
});
