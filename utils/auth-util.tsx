const chartersOnly = (input: string, field: string) => {
  return /\W|[0-9]/g.test(input) ? `${field} must only be letters` : "";
};
const ageVerification = (input: string) => {
  const date = new Date();
  const year = date.getFullYear() - 18;
  const month = date.getUTCMonth() + 1;
  const formattedMonth = month <= 9 ? `0${month}` : month;
  const day = date.getUTCDate();
  const fullDate = `${year}-${formattedMonth}-${day}`;
  return input > fullDate ? "must be 18 or over" : "";
};
const emailVerification = (email: string) => {
  return !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  )
    ? "email not valid"
    : "";
};

const phoneVerification = (phoneNumber: string) => {
  return /\D/.test(phoneNumber) ? "phone number not valid" : "";
};

const passwordVerification = () => {
  const errorPattens: any = [
    { patten: /[A-Z]/g, message: "one capital letter" },
    { patten: /[0-9]/g, message: "one number" },
    { patten: /\W/g, message: "one special charter" },
    { patten: /.{8}/, message: "8 letters or more" },
  ];
  return errorPattens;
};
export {
  chartersOnly,
  ageVerification,
  emailVerification,
  phoneVerification,
  passwordVerification,
};
