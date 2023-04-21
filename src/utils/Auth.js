// базовый URL
const BASE_AUTH_URL = "https://auth.nomoreparties.co";

const handleRes = (response) => {
  return response.ok
    ? response.json()
    : Promise.reject(`Ошибка: ${response.status}`);
};

export const register = (email, password) => {
  return fetch(`${BASE_AUTH_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify( email, password ),
  })
  .then(handleRes)
};

export const signin = (email, password) => {
  console.log(email, password);
  return fetch(`${BASE_AUTH_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then(handleRes);
};

export const checkAuth = () => {
  
}