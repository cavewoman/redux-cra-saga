import { takeLatest, put, call } from 'redux-saga/effects';
import {
  FETCH_RANDOM_MAGIC_CARD,
  fetchRandomMagicCardSuccess,
  fetchRandomMagicCardFail,
} from '../actions/magicAction';

import api from '../api';

export function* fetchRandomMagicCard() {
  try {
    const apiResponse = yield call(api.scryfall.random);
    yield put(fetchRandomMagicCardSuccess(apiResponse || {}));
  } catch (error) {
    yield put(fetchRandomMagicCardFail(error));
  }
}

export default function* watchFetchRandomMagicCard() {
  yield takeLatest(FETCH_RANDOM_MAGIC_CARD, fetchRandomMagicCard);
}
