import * as actionType from '../Actions/actionsType'
const initialState = {
  wallet_bal: null,
  isLoading: false,
  error: null,
}

const WalletReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_WALLET_BALANCE:
      return {
        ...state,
        isLoading: true,
        error: '',
      }
    case actionType.GET_WALLET_BALANCE_SUCCESS:
      return {
        ...state,
        wallet_bal: action.data,
        isLoading: false,
      }
    case actionType.GET_WALLET_BALANCE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }

    default:
      return state
  }
}
export default WalletReducer
