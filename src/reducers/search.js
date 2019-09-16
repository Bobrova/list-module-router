import {
  SET_SEARCH,
} from '../constants/ActionTypes';

import { initialState } from '../store/initialState';

export default function search(state = initialState.search, action) {
  switch (action.type) {
    case SET_SEARCH:
      return action.text;
    default:
      return state;
  }
}
