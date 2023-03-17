import axios from "axios";
// const base_url = process.env.REACT_BASE_URL;
const base_url = "https://paindustry.in/booky/api";
console.log(base_url, "baseurl");

export function* UserRegistrationApi(registratedData) {
  const registration = yield axios
    .post(`${base_url}/register`, registratedData)
    .then(function (response) {
      console.log(response, "Registration data responce");
      return response;
    })
    .catch(function (error) {
      console.log(error, "Registration data responce");

      return error.response;
    });

  return registration;
}
export function* UserLoginApi(loggedData) {
  const login = yield axios
    .post(`${base_url}/login`, loggedData)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });

  return login;
}

export function* SendOtpApi(payload) {
  const otp = yield axios
    .post(`${base_url}/otpsend`, payload)
    .then(function (response) {
      console.log(response, "otp sent");
      return response;
    })
    .catch(function (error) {
      console.log(error, "error in sending otp");

      return error.response;
    });

  return otp;
}

export function* VerifyOtpApi(payload) {
  const otpdata = yield axios
    .post(`${base_url}/confirmotp`, payload)
    .then(function (response) {
      console.log(response, "otp sent");
      return response;
    })
    .catch(function (error) {
      console.log(error, "error in sending otp");

      return error.response;
    });

  return otpdata;
}
