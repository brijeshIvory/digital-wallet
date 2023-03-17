import axios from "axios";
const base_url = "https://paindustry.in/booky/api";

export function* GetCountryApi() {
  const countries = yield axios
    .post(`${base_url}/country`)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return countries;
}
