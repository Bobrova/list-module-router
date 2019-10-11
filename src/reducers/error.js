
import {
  FAILURE,
} from 'constants/ActionTypes';

const initialState = {
  error: '',
};

export default function list(state = initialState.error, action) {
  switch (action.type) {
    case FAILURE: {
      return action.payload;
    }

    default:
      return state;
  }
}
