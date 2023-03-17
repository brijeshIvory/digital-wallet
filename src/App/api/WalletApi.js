import axios from 'axios'
const base_url = 'https://paindustry.in/booky/api'

// Get Country List
export function* GetCountryApi() {
    const countries = yield axios
        .post(`${base_url}/country`)
        .then(function (response) {
            return response
        })
        .catch(function (error) {
            return error.response
        })
    return countries
}

// get depositDetail
export function* GetDepositDetailApi() {
    const depositDetail = yield axios
        .post(`${base_url}/getdepositdetail`)
        .then(function (response) {
            return response
        })
        .catch(function (error) {
            return error.response
        })
    return depositDetail
}
// request Deposit
export function* RequestDepositApi(depositData) {
    const ReqDeposit = yield axios
        .post(`${base_url}/depositrequest`, depositData)
        .then(function (response) {
            return response
        })
        .catch(function (error) {
            return error.response
        })
    return ReqDeposit
}
// GET HAWALA LIST
export function* GetHawalaListApi() {
    const hawalaList = yield axios
        .post(`${base_url}/hawalalist`)
        .then(function (response) {
            return response
        })
        .catch(function (error) {
            return error.response
        })

    return hawalaList
}
// GET CLIENT DETAILS
export function* GetClientListApi() {
    const clientList = yield axios
        .post(`${base_url}/clilentlist`)
        .then(function (response) {
            console.log(response, 'Client List data responce')
            return response
        })
        .catch(function (error) {
            console.log(error, 'Cliet List data responce')

            return error.response
        })

    return clientList
}

// get wallet balance
export function* GetWallwtBalance() {
    const withdrawDetail = yield axios
        .post(`${base_url}/getwalletbalance`)
        .then(function (response) {
            console.log(response, 'withdrawDetail data responce')
            return response
        })
        .catch(function (error) {
            console.log(error, 'withdrawDetail data responce')

            return error.response
        })
    return withdrawDetail
}
