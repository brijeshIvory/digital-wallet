import * as actionType from "../Actions/actionsType";
const initialState = {
  details: null,
  error: null,
  isLoading: false,
};

const ContactReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_CONTACT_DETAILS:
      return {
        ...state,

        isLoading: true,
      };
    case actionType.GET_CONTACT_DETAILS_SUCCESS:
      return {
        ...state,

        details: action.detail.data,
        isLoading: false,
      };
    case actionType.GET_CONTACT_DETAILS_FAIL:
      return {
        ...state,

        error: action.error,

        isLoading: false,
      };
    default:
      return state;
  }
};
export default ContactReducer;
