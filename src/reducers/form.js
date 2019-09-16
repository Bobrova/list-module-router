import {
  SET_SONG,
  SET_SINGER,
} from '../constants/ActionTypes';

import { initialState } from '../store/initialState';

export default function form(state = initialState.form, action) {
  switch (action.type) {
    case SET_SONG:
      return {
        ...state,
        song: action.song,
      };

    case SET_SINGER:
      return {
        ...state,
        singer: action.singer,
      };

    default:
      return state;
  }
}
