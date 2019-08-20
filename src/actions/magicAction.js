export const FETCH_RANDOM_MAGIC_CARD = 'FETCH_RANDOM_MAGIC_CARD';
export const FETCH_RANDOM_MAGIC_CARD_SUCCESS = 'FETCH_RANDOM_MAGIC_CARD_SUCCESS';
export const FETCH_RANDOM_MAGIC_CARD_FAIL = 'FETCH_RANDOM_MAGIC_CARD_FAIL';

export function fetchRandomMagicCard() {
  return { type: FETCH_RANDOM_MAGIC_CARD };
}

export function fetchRandomMagicCardSuccess(card) {
  return { type: FETCH_RANDOM_MAGIC_CARD_SUCCESS, card };
}

export function fetchRandomMagicCardFail(error) {
  return { type: FETCH_RANDOM_MAGIC_CARD_FAIL, error };
}
