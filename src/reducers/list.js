import {
  ADD_ITEM,
  DEL_ITEM,
  SAVE_EDIT,
} from '../constants/ActionTypes';

import { initialState } from '../store/initialState';

export default function list(state = initialState.list, action) {
  switch (action.type) {
    case ADD_ITEM:
      return [
        ...state,
        action.record,
      ];

    case DEL_ITEM:
      return state.filter(item => item.id !== action.id);

    case SAVE_EDIT:
      return state.map(item => item.id === action.payload.idEdit
        ? { ...item, song: action.payload.song, singer: action.payload.singer }
        : item);

    default:
      return state;
  }
}
