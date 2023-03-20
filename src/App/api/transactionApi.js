import axios from "axios";
const base_url = "https://paindustry.in/booky/api";

export function* GetTransactionsApi(transactionPayload) {
  const transactions = yield axios
    .post(`${base_url}/transactiondetails`, transactionPayload)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return transactions;
}
