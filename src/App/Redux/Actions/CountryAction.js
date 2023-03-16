import * as actionType from "./actionsType";

export const getCountriesData = () => {
  return {
    type: actionType.GET_COUNTRY,
  };
};
