import http from 'k6/http';
import { check } from 'k6';
import { getToken } from './login.js';
import { generateUniqueTitle } from './utils.js';

export let options = {
  scenarios: {
    tps_50: {
      executor: 'constant-arrival-rate',
      rate: 50,
      timeUnit: '1s',
      duration: '1m',
      preAllocatedVUs: 100,
      exec: 'test50'
    },
    tps_100: {
      executor: 'constant-arrival-rate',
      rate: 100,
      timeUnit: '1s',
      duration: '1m',
      preAllocatedVUs: 200,
      startTime: '1m10s',
      exec: 'test100'
    }
  }
};

export function setup() {
  const token = getToken();
  return { token };
}

function executeAddProduct(token) {
  const url = 'https://dummyjson.com/products/add';
  const payload = JSON.stringify({
    title: generateUniqueTitle(),
    price: 9.99
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  };

  const res = http.post(url, payload, params);
  check(res, {
    'status 200': (r) => r.status === 200,
    'title included': (r) => r.json().title !== undefined,
  });
}

export function test50(data) {
  executeAddProduct(data.token);
}

export function test100(data) {
  executeAddProduct(data.token);
}
