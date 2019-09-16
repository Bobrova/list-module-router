import { combineReducers } from 'redux';

import list from './list';
import form from './form';
import search from './search';

export default combineReducers({
  list,
  form,
  search,
});
