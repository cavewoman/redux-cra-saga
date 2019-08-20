import { mergeRight } from 'ramda';
import {
  FETCH_RANDOM_MAGIC_CARD_SUCCESS,
  FETCH_RANDOM_MAGIC_CARD_FAIL,
} from '../actions/magicAction';

const initialState = { card: {}, error: null };

export default function magic(state = initialState, action) {
  switch (action.type) {
    case FETCH_RANDOM_MAGIC_CARD_SUCCESS:
      return mergeRight(state, { card: action.card });
    case FETCH_RANDOM_MAGIC_CARD_FAIL:
      return mergeRight(state, { error: action.error });
    default:
      return state;
  }
}
