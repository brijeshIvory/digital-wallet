import * as actionType from '../Actions/actionsType'
const initialState = {
  data: null,
  error: null,
  isLoading: false,
  userDetail: null,
}

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

        data: action?.regData?.data?.data,
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
