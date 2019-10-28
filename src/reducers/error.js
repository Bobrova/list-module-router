import {
  FAILURE,
  CLEAR_ERROR_FIELD,
} from 'constants/ActionTypes';

const initialState = {
  error: '',
};

export default function list(state = initialState.error, action) {
  switch (action.type) {
    case FAILURE: {
      return action.payload;
    }

    case CLEAR_ERROR_FIELD: {
      return action.payload;
    }
    default:
      return state;
  }
}
