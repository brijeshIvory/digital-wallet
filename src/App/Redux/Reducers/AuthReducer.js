import * as actionType from "../Actions/actionsType";
const initialState = {
  data: null,
  error: null,
  isLoading: false,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.USER_REGISTRATION:
      return {
        ...state,

        error: null,
        data: [],
        isLoading: true,
      };
    case actionType.USER_REGISTRATION_SUCCESS:
      return {
        ...state,

        error: null,
        data: action?.regData,
        isLoading: false,
      };
    case actionType.USER_REGISTRATION_FAIL:
      return {
        ...state,

        error: action?.regErrData,
        data: [],
        isLoading: false,
      };
    case actionType.EMPTY_USER:
      return {
        ...state,

        error: null,
        data: null,
        isLoading: false,
      };
    default:
      return state;
  }
};
export default AuthReducer;
