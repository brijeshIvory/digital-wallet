import * as actionType from "../Actions/actionsType";
const initialState = {
  advertisment: null,
  error: null,
  isLoading: false,
};

const AdvertismentReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_ADVERTISMENT:
      return {
        ...state,

        isLoading: true,
      };
    case actionType.GET_ADVERTISMENT_SUCCESS:
      return {
        ...state,

        advertisment: action.advertisment.data,
        isLoading: false,
      };
    case actionType.GET_ADVERTISMENT_FAIL:
      return {
        ...state,

        error: action.error,

        isLoading: false,
      };
    default:
      return state;
  }
};
export default AdvertismentReducer;
