import axios from 'axios'
const base_url = 'https://paindustry.in/booky/api'

export function* UserRegistrationApi(registratedData) {
  const registration = yield axios
    .post(`${base_url}/register`, registratedData)
    .then(function (response) {
      console.log(response, 'Registration data responce')
      return response
    })
    .catch(function (error) {
      console.log(error, 'Registration data responce')

      return error.response
    })
  return registration
}
export function* UserLoginApi(loggedData) {
  const login = yield axios
    .post(`${base_url}/login`, loggedData)
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      return error.response
    })
  return login
}
export function* GetUserDetailApi(userdetailData) {
  const UserDetail = yield axios
    .post(`${base_url}/userdeatils`, userdetailData)
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      return error.response
    })

  return UserDetail
}
