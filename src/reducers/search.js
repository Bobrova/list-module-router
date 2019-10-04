import {
  SET_SEARCH,
} from '../constants/ActionTypes';

const initialState = {
  search: '',
};

export default function search(state = initialState.search, action) {
  switch (action.type) {
    case SET_SEARCH:
      return action.text;
    default:
      return state;
  }
}
