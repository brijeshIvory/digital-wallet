import * as actionType from "../Actions/actionsType";
const initialState = {
  users: {
    data: null,
    error: null,
    status: "idle",
    isLoading: false,
  },
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.USER_REGISTRATION:
      return {
        ...state,
        users: {
          error: null,
          data: [],
          status: "loading",
          isLoading: true,
        },
      };
    case actionType.USER_REGISTRATION_SUCCESS:
      return {
        ...state,
        users: {
          error: null,
          data: action?.regData,
          status: "success",
          isLoading: false,
        },
      };
    case actionType.USER_REGISTRATION_FAIL:
      return {
        ...state,
        users: {
          error: action?.regErrData,
          data: [],
          status: "fail",
          isLoading: false,
        },
      };
    default:
      return state;
  }
};
export default AuthReducer;
