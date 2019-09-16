import { createSelector } from 'reselect';

const getSearchValue = (state) => state.search;
const getlist = (state) => state.list;
const getSinger = (state) => state.form.singer;
const getSong = (state) => state.form.song;

export const currentIdSelector = createSelector(
  [getlist],
  list => {
    return list.length !== 0 ? list[list.length - 1].id : 0;
  },
);

export const visibleListSelector = createSelector(
  [getSearchValue, getlist],
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
  [getlist],
  list => list,
);
