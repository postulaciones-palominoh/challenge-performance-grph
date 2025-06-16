import http from 'k6/http';

export function getToken() {
  const url = 'https://dummyjson.com/auth/login';
  const payload = JSON.stringify({
    username: 'emilys',
    password: 'emilyspass'
  });

  const params = {
    headers: { 'Content-Type': 'application/json' },
  };

  const res = http.post(url, payload, params);
  return res.json('token');
}