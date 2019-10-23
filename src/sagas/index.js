import {
  call,
  all,
  put,
  takeLatest,
} from 'redux-saga/effects';
import {
  GET_LIST_REQUEST,
  POST_ITEM_REQUEST,
  DELETE_ITEM_REQUEST,
  PUT_ITEM_REQUEST,
} from 'constants/ActionTypes';
import {
  getListSuccessAction,
  postItemSuccessAction,
  deleteItemSuccessAction,
  putItemSuccessAction,
  failureAction,
} from 'actions';
import api from 'api';

function* getList() {
  try {
    const list = yield call(api.getList);
    yield put(getListSuccessAction(list));
  } catch (e) {
    yield put(failureAction(e.message));
  }
}

function* watchGetList() {
  yield takeLatest(GET_LIST_REQUEST, getList);
}

function* postItem({ payload }) {
  try {
    const response = yield call(api.postItem, payload);
    yield put(postItemSuccessAction(response.data));
  } catch (e) {
    yield put(failureAction(e.message));
  }
}

function* watchPostItem() {
  yield takeLatest(POST_ITEM_REQUEST, postItem);
}

function* deleteItem({ payload }) {
  try {
    yield call(api.deleteItem, payload);
    yield put(deleteItemSuccessAction(payload));
  } catch (e) {
    yield put(failureAction(e.message));
  }
}

function* watchDeleteItem() {
  yield takeLatest(DELETE_ITEM_REQUEST, deleteItem);
}

function* putItem({ payload }) {
  try {
    yield call(api.putItem, payload);
    yield put(putItemSuccessAction(payload));
  } catch (e) {
    yield put(failureAction(e.message));
  }
}

function* watchChangeItem() {
  yield takeLatest(PUT_ITEM_REQUEST, putItem);
}

export default function* rootSaga() {
  yield all([
    watchGetList(),
    watchPostItem(),
    watchDeleteItem(),
    watchChangeItem(),
  ]);
}
