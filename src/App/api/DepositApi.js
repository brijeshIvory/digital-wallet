import axios from 'axios'
const base_url = 'https://paindustry.in/booky/api'

export function* GetDepositDetailApi() {
  const depositDetail = yield axios
    .post(`https://paindustry.in/booky/api/getdepositdetail`)
    .then(function (response) {
      console.log(response,"res")
      return response
    })
    .catch(function (error) {
      return error.response
    })

  return depositDetail
}