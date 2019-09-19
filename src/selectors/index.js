import { createSelector } from 'reselect';

const getSearchValue = (state) => state.search;
const getList = (state) => state.list;
const getSinger = (state) => state.form.singer;
const getSong = (state) => state.form.song;
const getIdEdit = (state) => state.edit.idEdit;
const getSongEdit = (state) => state.edit.songEdit;
const getSingerEdit = (state) => state.edit.singerEdit;

export const currentIdSelector = createSelector(
  [getList],
  list => {
    return list.length !== 0 ? list[list.length - 1].id : 0;
  },
);

export const visibleListSelector = createSelector(
  [getSearchValue, getList],
  (text = '', list) => {
    return list.filter(
      item => item.song.toUpperCase().includes(text.toUpperCase())
        || item.singer.toUpperCase().includes(text.toUpperCase()),
    );
  },
);

export const singerSelector = createSelector(
  [getSinger],
  singer => singer,
);

export const songSelector = createSelector(
  [getSong],
  song => song,
);

export const listSelector = createSelector(
  [getList],
  list => list,
);

export const searchSelector = createSelector(
  [getSearchValue],
  search => search,
);

export const idEditSelector = createSelector(
  [getIdEdit],
  idEdit => idEdit,
);

export const songEditSelector = createSelector(
  [getSongEdit],
  songEdit => songEdit,
);

export const singerEditSelector = createSelector(
  [getSingerEdit],
  singerEdit => singerEdit,
);
