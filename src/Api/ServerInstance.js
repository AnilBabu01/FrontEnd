import { BASE_URL } from "@/config";

export const serverInstance = (path, method = "get", payload, token) => {
  let headers = {
    "Content-Type": "application/json",
    Authorization: `${localStorage.getItem("token")}`,
  };
  return new Promise((resolve, reject) => {
    let fetchOptions = {
      method,
      headers,
    };
    if (payload) fetchOptions.body = JSON.stringify(payload);
    fetch(BASE_URL + path, fetchOptions)
      .then((res) => resolve(res.json()))
      .catch((err) => reject(err));
  });
};

export const serverFormdataInstance = async (path, method = 'get', payload, token) => {
    let headers = {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("token")}`,
      };
  return new Promise((resolve, reject) => {
    let fetchOptions = {
      method,
      headers,
    };
    if (payload) fetchOptions.body = JSON.stringify(payload);
    fetch(BASE_URL + path, fetchOptions)
      .then(res => resolve(res.json()))
      .catch(err => reject(err));
  });
};

