import axios from "axios";
export const base_url = process.env.REACT_APP_API_URL;

export function* GetAdvertismentApi() {
  const advertisment = yield axios
    .post(`${base_url}/advertisment`)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return advertisment;
}
