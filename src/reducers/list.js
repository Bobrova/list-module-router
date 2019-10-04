import {
  SAVE_EDIT,
  GET_LIST_REQUEST,
  GET_LIST_SUCCESS,
  DELETE_ITEM_REQUEST,
  DELETE_ITEM_SUCCESS,
  POST_ITEM_REQUEST,
  POST_ITEM_SUCCESS,
  PUT_ITEM_REQUEST,
  PUT_ITEM_SUCCESS,
} from '../constants/ActionTypes';

const initialState = {
  list: [],
};

export default function list(state = initialState.list, action) {
  switch (action.type) {
    case SAVE_EDIT:
      return state.map(item => item.id === action.payload.id
        ? {
          ...item,
          song: action.payload.song,
          singer: action.payload.singer,
        }
        : item);

    case GET_LIST_REQUEST: {
      return state;
    }
    case GET_LIST_SUCCESS: {
      return action.payload.data;
    }

    case DELETE_ITEM_REQUEST: {
      return state;
    }
    case DELETE_ITEM_SUCCESS: {
      return state.filter(item => item.id !== action.payload);
    }

    case POST_ITEM_REQUEST: {
      return state;
    }

    case POST_ITEM_SUCCESS: {
      return [...state, action.payload];
    }

    case PUT_ITEM_REQUEST: {
      return state;
    }

    case PUT_ITEM_SUCCESS: {
      return state.map(item => item.id === action.payload.id
        ? {
          ...item,
          song: action.payload.song,
          singer: action.payload.singer,
        }
        : item);
    }

    default:
      return state;
  }
}
