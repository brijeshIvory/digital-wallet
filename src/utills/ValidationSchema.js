import * as yup from "yup";
export const loginValidationSchema = yup.object({
  phone: yup
    .string()
    .matches(/(\+91\ )[6-9]{1}[0-9 ]{4}[0-9 ]{4}[0-9]{3}/, {
      message: "Invalid Indian number",
      excludeEmptyString: false,
    })
    .required("A phone number is required"),
  password: yup.string().required("Password is required"),
});
export const BankTransferValidationSchema = yup.object({
  bankname: yup.string().required("Bank Name is required"),
  accountnumber: yup.string().required("Account Number is required"),
  ifsccode: yup.string().required("IFSC is required"),
  accountholdername: yup.string().required("Account Holder Name is required"),
});
export const PaytmTransferValidationSchema = yup.object({
  name: yup.string().required("Name is required"),
  paytmnumber: yup.string().required("Paytm Number is required"),
});

export const GooglePayTransferValidationSchema = yup.object({
  name: yup.string().required("Name is required"),
  googlepaynumber: yup.string().required("Google Pay Number is required"),
});
export const PhonePayTransferValidationSchema = yup.object({
  name: yup.string().required("Name is required"),
  phonepenumber: yup.string().required("Phone Pe Number is required"),
});

export const UpiTransferValidationSchema = yup.object({
  name: yup.string().required("Name is required"),
  upiId: yup.string().required("UPI ID is required"),
});
export const HawalaTransferValidationSchema = yup.object({
  hawala_value: yup.string().required("Hawala Selection is required."),
  AccountNumber: yup.string().required("Account Number is required")
});

export const RegistationValidationSchema = yup.object({
  name: yup.string().required("Required !"),
  email: yup
    .string()
    .email("Invalid Email")
    .matches(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Invalid email address"
    )
    .required("Required !"),
  country: yup.string().required("Required !"),

  phone: yup.string().required("Required !"),
  password: yup.string().required("Required !"),
  // .min(8, "Must be 8 characters or more")
  // .matches(/[a-z]+/, "One lowercase character")
  // .matches(/[A-Z]+/, "One uppercase character")
  // .matches(/[@$!%*#?&]+/, "One special character(@$!%*#?&)")
  // .matches(/\d+/, "One number"),

  confirmPassword: yup.string().required("Required !"),
  //   when("password", {
  //     is: (val) => (val && val.length > 0 ? true : false),
  //     then: yup
  //       .string()
  //       .oneOf([yup.ref("password")], "password need to be the same"),
  //   }),
});
export const DepositeAmountValidationSchema = yup.object({
  amount: yup
    .number()
    .required("Coins is Required")
    .max(10000000, "To big")
    .min(10, "To small")
    .min(0, "Not negative number"),
});
