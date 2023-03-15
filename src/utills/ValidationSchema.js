import * as Yup from "yup";

export const BankTransferValidationSchema = Yup.object({
    bankname: Yup.string().required('Bank Name is required'),
    accountnumber: Yup.string().required('Account Number is required'),
    ifsccode: Yup.string().required('IFSC is required'),
    accountholdername: Yup.string().required('Account Holder Name is required'),
});