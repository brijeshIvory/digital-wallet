import * as actionType from "./actionsType";
export const loginClick = (payload) => {
  return {
    type: actionType.USER_LOGIN,
    loggedData: payload,
  };
};

export const GetUserDetails = (payload) => {
  return {
    type: actionType.GET_USER_DETAILS,
    userdetailData:payload
  };
};
export const registrationClick = (payload) => {
  return {
    type: actionType.USER_REGISTRATION,
    registratedData: payload,
  };
};

export const emptyUser = () => {
  return {
    type: actionType.EMPTY_USER,
  };
};

export const sendOtp = (payload) => {
  return {
    type: actionType.SEND_OTP,
    otp: payload,
  };
};

export const verifyOtp = (payload) => {
  return {
    type: actionType.SEND_OTP,
    otpData: payload,
  };
};
    

