import * as actionType from '../Actions/actionsType'
const initialState = {
  data: null,
  error: null,
  isLoading: false,
  userDetail: null,
}

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    // case actionType.USER_REGISTRATION:
    //   return {
    //     ...state,
    //     users: {
    //       error: null,
    //       data: [],
    //       status: "loading",
    //       isLoading: true,
    //     },
    //   };
    // case actionType.USER_REGISTRATION_SUCCESS:
    //   return {
    //     ...state,
    //     users: {
    //       error: null,
    //       data: action?.regData,
    //       status: "success",
    //       isLoading: false,
    //     },
    //   };
    // case actionType.USER_REGISTRATION_FAIL:
    //   return {
    //     ...state,
    //     users: {
    //       error: action?.regErrData,
    //       data: [],
    //       status: "fail",
    //       isLoading: false,
    //     },
    //   };
    case actionType.GET_USER_DETAILS:
      return {
        ...state,
        isLoading: true,
        error: '',
      }
    case actionType.GET_USER_DETAILS_SUCCESS:
      return {
        ...state,
        userDetail: action.data,
        isLoading: false,
      }
    case actionType.GET_USER_DETAILS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }

    default:
      return state
  }
}
export default AuthReducer
