import axios from "axios";
const base_url = "https://paindustry.in/booky/api";

export function* GetTransactionsApi(transactionPayload) {
  const transactions = yield axios
    .post(`${base_url}/transactiondetails`, transactionPayload)
    .then(function (response) {
      console.log(response, "responce of transactiondetails api call")
      return response;
    })
    .catch(function (error) {
      console.log(error.response, "Error responce of transactiondetails api call")

      return error.response;
    });
  return transactions;
}
