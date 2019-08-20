import axios from 'axios';

export function get(
  url,
  headers = {
    'Content-Type': 'application/json',
  },
  params,
) {
  return axios
    .get(url, {
      params,
      headers,
    })
    .then(response => response.data)
    .catch((error) => {
      throw error.response.data;
    });
}

export function post(
  url,
  headers = {
    'Content-Type': 'application/json',
  },
  data,
) {
  return axios
    .post(url, data, {
      headers,
    })
    .then(response => response.data)
    .catch((error) => {
      throw error.response.data;
    });
}

export function put(
  url,
  headers = {
    'Content-Type': 'application/json',
  },
  data,
) {
  return axios
    .put(url, data, {
      headers,
    })
    .then(response => response.data)
    .catch((error) => {
      throw error.response.data;
    });
}
