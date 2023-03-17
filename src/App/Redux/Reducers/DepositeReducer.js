import * as actionType from '../Actions/actionsType'
const initialState = {
  Deposit_detail: null,
  isLoading: false,
  error: null,
}

const DepositReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.DEPOSIT_DETAIL:
      return {
        ...state,
        loading: true,
        error: '',
      }
    case actionType.GET_DEPOSIT_DETAIL_SUCCESS:
      return {
        ...state,
        Deposit_detail: action.data,
        loading: false,
      }
    case actionType.GET_CLIENT_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      }
 

    default:
      return state
  }
}
export default DepositReducer
