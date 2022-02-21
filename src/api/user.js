import instance from "./config";

export const getAll = () => {
  const url = "/users";
  return instance.get(url);
}

export const get = (id) => {
  const url = `/users/${id}`;
  return instance.get(url);
}
export const add = (users) => {
  const url = `/users`;
  return instance.post(url, users);
}
export const remove = (id) => {
  const url = `/users/${id}`;
  return instance.delete(url);
}
export const update = (users) => {
  const url = `/users/${users.id}`;
  return instance.put(url, users);
}

export const signup = (users) => {
  const url = "/signup";
  return instance.post(url, users)
}
export const signin = (users) => {
  const url = "/signin";
  return instance.post(url, users)
}