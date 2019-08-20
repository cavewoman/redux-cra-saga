import { get } from './utils/api';

const api = {
  scryfall: {
    random: () => {
      const headers = {
        'Content-Type': 'application/json',
      };
      return get(
        "https://api.scryfall.com/cards/random",
        headers,
        {},
      );
    },
  }
};

export default api;
