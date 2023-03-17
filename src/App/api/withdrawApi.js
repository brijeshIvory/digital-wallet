import axios from 'axios'
const base_url = process.env.REACT_BASE_URL

export function* GetWallwtBalance() {
  const withdrawDetail = yield axios
    .post(`${base_url}/getwalletbalance`)
    .then(function (response) {
      console.log(response, 'withdrawDetail data responce')
      return response
    })
    .catch(function (error) {
      console.log(error, 'withdrawDetail data responce')

      return error.response
    })
  return withdrawDetail
}
