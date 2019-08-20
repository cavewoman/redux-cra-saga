import { all } from 'redux-saga/effects';
import watchFetchRandomMagicCard from './fetchRandomMagicCard';

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([watchFetchRandomMagicCard()]);
}
