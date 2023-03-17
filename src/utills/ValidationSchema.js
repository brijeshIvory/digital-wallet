import * as Yup from "yup";
export const loginValidationSchema = Yup.object({
    phone: Yup
    .string()
    .matches(/(\+91\ )[6-9]{1}[0-9 ]{4}[0-9 ]{4}[0-9]{3}/, {
      message: "Invalid Indian number",
      excludeEmptyString: false,
    })
    .required("A phone number is required"),
    password: Yup.string().required("Password is required"),
  });
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
export const HawalaTransferValidationSchema = Yup.object({
    hawala_value: Yup.string().required('Hawala Selection is required.'),
    amount: Yup.string().required('Amount is required'),
    screenshot: Yup.string().required('ScreenShot is required'),
});
export const DepositeAmountValidationSchema = Yup.object({
    amount: Yup.number()
    .required("Coins is Required")
    .max(10000000, "To big")
    .min(10, "To small")
    .min(0, "Not negative number")
});
