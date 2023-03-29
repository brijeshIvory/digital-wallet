import axios from "axios";
export const base_url = process.env.REACT_APP_API_URL;

export function* GetDetailsApi() {
  const details = yield axios
    .post(`${base_url}/details`)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return details;
}
