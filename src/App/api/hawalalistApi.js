import axios from 'axios'
const base_url = 'https://paindustry.in/booky/api'

export function* GetHawalaListApi() {
  const hawalaList = yield axios
    .post(`${base_url}/hawalalist`)
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      return error.response
    })

  return hawalaList
}
export function* GetClientListApi() {
  const clientList = yield axios
  .post(`${base_url}/clilentlist`)
    .then(function (response) {
      console.log(response, 'Client List data responce')
      return response
    })
    .catch(function (error) {
      console.log(error, 'Cliet List data responce')

      return error.response
    })

  return clientList
}