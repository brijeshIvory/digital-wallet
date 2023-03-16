import * as actionType from "./actionsType";
export const loginClick = (payload) => {
  return {
    type: actionType.LOGIN_CLICK,
    loggedData: payload,
  };
};
export const registrationClick = (payload) => {
  return {
    type: actionType.REGISTRATION_CLICK,
    registratedData: payload,
  };
};
