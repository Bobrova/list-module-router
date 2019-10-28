import * as types from '../constants/ActionTypes';

export const setSongAction = song => ({ type: types.SET_SONG, song });
export const setSingerAction = singer => ({ type: types.SET_SINGER, singer });
export const setSearchAction = text => ({ type: types.SET_SEARCH, text });
export const changeIdEditAction = payload => ({ type: types.SET_ID_EDIT, payload });
export const changeSongEditAction = payload => ({ type: types.CHANGE_SONG_EDIT, payload });
export const changeSingerEditAction = payload => ({ type: types.CHANGE_SINGER_EDIT, payload });

export const getListRequestAction = () => ({ type: types.GET_LIST_REQUEST });
export const getListSuccessAction = list => ({ type: types.GET_LIST_SUCCESS, payload: list });
export const deleteItemRequestAction = id => ({ type: types.DELETE_ITEM_REQUEST, payload: id });
export const deleteItemSuccessAction = id => ({ type: types.DELETE_ITEM_SUCCESS, payload: id });
export const postItemRequestAction = item => ({ type: types.POST_ITEM_REQUEST, payload: item });
export const postItemSuccessAction = item => ({ type: types.POST_ITEM_SUCCESS, payload: item });
export const putItemRequestAction = item => ({ type: types.PUT_ITEM_REQUEST, payload: item });
export const putItemSuccessAction = item => ({ type: types.PUT_ITEM_SUCCESS, payload: item });
export const failureAction = error => ({ type: types.FAILURE, payload: error });
export const clearErrorFieldAction = error => ({ type: types.CLEAR_ERROR_FIELD, payload: error });
