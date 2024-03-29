import * as actionType from "../Actions/actionsType";
const initialState = {
  data: null,
  error: null,
  isLoading: false,
  userDetail: null,
  sendOtp: null,
  otpVerification: null,
  loginData: null,
  isLogin: false,
  forgotPassRespState: null,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.USER_REGISTRATION:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case actionType.USER_REGISTRATION_SUCCESS:
      return {
        ...state,

        data: action?.regData,
        isLoading: false,
        error: null,
      };
    case actionType.USER_REGISTRATION_FAIL:
      return {
        ...state,

        error: action?.regErrData,
        isLoading: false,
      };
    case actionType.EMPTY_USER:
      return {
        ...state,

        error: null,
        data: null,
        isLoading: false,
      };
    case actionType.GET_USER_DETAILS:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case actionType.GET_USER_DETAILS_SUCCESS:
      return {
        ...state,
        userDetail: action.data,
        isLoading: false,
      };
    case actionType.GET_USER_DETAILS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case actionType.VERIFY_OTP:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case actionType.VERIFY_OTP_SUCCESS:
      return {
        ...state,
        otpVerification: action?.otpResp,
        isLoading: false,
        error: null,
      };
    case actionType.VERIFY_OTP_FAIL:
      return {
        ...state,
        error: action?.otpRespErr,
        isLoading: false,
      };

    case actionType.USER_LOGIN:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case actionType.USER_LOGIN_SUCCESS:
      return {
        ...state,
        loginData: action?.loginData,
        isLoading: false,
        error: null,
      };
    case actionType.USER_LOGIN_FAIL:
      return {
        ...state,
        error: action?.loginErrData,
        isLoading: false,
      };
    case actionType.USER_LOGIN_STATUS:
      return {
        ...state,
        isLogin: action.loginStatus,
      };

    case actionType.SEND_OTP:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case actionType.SEND_OTP_SUCCESS:
      return {
        ...state,
        sendOtp: action?.otpData?.data,
        isLoading: false,
        error: null,
      };
    case actionType.SEND_OTP_FAIL:
      return {
        ...state,
        error: action?.sendOtpRespErr,
        isLoading: false,
      };

    case actionType.FORGET_PASSWORD:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case actionType.FORGET_PASSWORD_SUCCESS:
      return {
        ...state,

        forgotPassRespState: action?.ForgotPassResp,
        isLoading: false,
        error: null,
      };
    case actionType.FORGET_PASSWORD_FAIL:
      return {
        ...state,
        error: action?.ForgotPassRespErr,
        isLoading: false,
      };

    default:
      return state;
  }
};
export default AuthReducer;
