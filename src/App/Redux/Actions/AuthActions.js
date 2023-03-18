import * as actionType from "./actionsType";
// export const loginClick = (payload) => {
//   return {
//     type: actionType.LOGIN_CLICK,
//     loggedData: payload,
//   };
// };
// export const registrationClick = (payload) => {
//   return {
//     type: actionType.REGISTRATION_CLICK,
//     registratedData: payload,
//   };
// };

export const GetUserDetails = (payload) => {
  return {
    type: actionType.GET_USER_DETAILS,
    userdetailData:payload
  };
};

export const Forgetpassword = (payload) => {
  return {
    type: actionType.FORGET_PASSWORD,
    ForgetPasswordDetails : payload
  }
}