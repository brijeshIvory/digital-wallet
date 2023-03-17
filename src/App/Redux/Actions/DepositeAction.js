import * as actionType from "./actionsType";
export const GetDepositDetail = () => {
  return {
    type: actionType.DEPOSIT_DETAIL
  };
};
export const RequestDeposite = (depositData) => {
  return {
    type: actionType.REQUEST_DEPOSIT,
    depositData
  };
};
