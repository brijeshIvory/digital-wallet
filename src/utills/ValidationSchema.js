import * as Yup from "yup";

export const BankTransferValidationSchema = Yup.object({
    bankname: Yup.string().required('Bank Name is required'),
    accountnumber: Yup.string().required('Account Number is required'),
    ifsccode: Yup.string().required('IFSC is required'),
    accountholdername: Yup.string().required('Account Holder Name is required'),
});
export const PaytmTransferValidationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    paytmnumber: Yup.string().required('Paytm Number is required'),
});

export const GooglePayTransferValidationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    googlepaynumber: Yup.string().required('Google Pay Number is required'),
});
export const PhonePayTransferValidationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    phonepenumber: Yup.string().required('Phone Pe Number is required'),
});

export const UpiTransferValidationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    upiId: Yup.string().required('UPI ID is required'),
});
