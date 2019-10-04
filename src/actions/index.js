import * as types from '../constants/ActionTypes';

export const setSong = song => ({ type: types.SET_SONG, song });
export const setSinger = singer => ({ type: types.SET_SINGER, singer });
export const setSearch = text => ({ type: types.SET_SEARCH, text });
export const saveEdit = payload => ({ type: types.SAVE_EDIT, payload });
export const changeIdEdit = payload => ({ type: types.SET_ID_EDIT, payload });
export const changeSongEdit = payload => ({ type: types.CHANGE_SONG_EDIT, payload });
export const changeSingerEdit = payload => ({ type: types.CHANGE_SINGER_EDIT, payload });

export const getListRequest = () => ({ type: types.GET_LIST_REQUEST });
export const getListSuccess = list => ({ type: types.GET_LIST_SUCCESS, payload: list });
export const deleteItemRequest = id => ({ type: types.DELETE_ITEM_REQUEST, payload: id });
export const deleteItemSuccess = id => ({ type: types.DELETE_ITEM_SUCCESS, payload: id });
export const postItemRequest = item => ({ type: types.POST_ITEM_REQUEST, payload: item });
export const postItemSuccess = item => ({ type: types.POST_ITEM_SUCCESS, payload: item });
export const putItemRequest = item => ({ type: types.PUT_ITEM_REQUEST, payload: item });
export const putItemSuccess = item => ({ type: types.PUT_ITEM_SUCCESS, payload: item });
export const failure = error => ({ type: types.FAILURE, payload: error });
