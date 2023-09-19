import {
    take,
    takeEvery,
    takeLatest,
    put,
    all,
    delay,
    fork,
    call,
  } from "redux-saga/effects";
  import { LOAD_BOOKS_SUCCESS, LOAD_BOOKS_START } from "./constants";
import axios from "axios";

  function* onLoadBooksStartAsync() {
    try {
      const response = yield call(axios.get,'https://mocki.io/v1/abe4ce04-5c37-48d2-ab14-7ed6436e7670');
      if (response.status === 200) { 
        yield put({type: LOAD_BOOKS_SUCCESS, payload: response.data});
      }
    } catch (error) {
    console.log('error occured');
    }
  }

  function* onLoadBooks() {
    yield takeEvery(LOAD_BOOKS_START, onLoadBooksStartAsync);
  }

const usersSaga = [
   fork(onLoadBooks)
  ];
  
  export default function* rootSaga() {
    yield all([...usersSaga]);
  }
  