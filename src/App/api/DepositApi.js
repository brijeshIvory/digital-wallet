import axios from 'axios'
const base_url = 'https://paindustry.in/booky/api'

export function* GetDepositDetailApi() {
  const depositDetail = yield axios
    .post(`${base_url}/getdepositdetail`)
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      return error.response
    })
  return depositDetail
}

export function* RequestDepositApi(depositData) {
  const ReqDeposit = yield axios
    .post(`${base_url}/depositrequest`, depositData)
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      return error.response
    })
  return ReqDeposit
}
