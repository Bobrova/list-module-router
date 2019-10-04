import {
  SET_ID_EDIT,
  CHANGE_SONG_EDIT,
  CHANGE_SINGER_EDIT,
} from '../constants/ActionTypes';

const initialState = {
  edit: {
    idEdit: 0,
    songEdit: '',
    singerEdit: '',
  },
};

export default function edit(state = initialState.edit, action) {
  switch (action.type) {
    case CHANGE_SONG_EDIT:
      return {
        ...state,
        songEdit: action.payload,
      };

    case CHANGE_SINGER_EDIT:
      return {
        ...state,
        singerEdit: action.payload,
      };
    case SET_ID_EDIT:
      return {
        ...state,
        idEdit: action.payload,
      };

    default:
      return state;
  }
}
