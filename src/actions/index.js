import * as types from '../constants/ActionTypes';

export const addItem = record => ({ type: types.ADD_ITEM, record });
export const delItem = id => ({ type: types.DEL_ITEM, id });
export const setSong = song => ({ type: types.SET_SONG, song });
export const setSinger = singer => ({ type: types.SET_SINGER, singer });
export const setSearch = text => ({ type: types.SET_SEARCH, text });
export const saveEdit = payload => ({ type: types.SAVE_EDIT, payload });
