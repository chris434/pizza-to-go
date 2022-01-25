import { useState } from "react";
import AuthForm from "../components/auth-form";
import Password from "../components/Password";
import QuestionLink from "../components/Question-link";
import {
  ageVerification,
  chartersOnly,
  passwordVerification,
  emailVerification,
  phoneVerification,
} from "../utils/auth-util";
import {
  FaAddressCard,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaBirthdayCake,
} from "react-icons/fa";

function SignUp() {
  const [password, setPassword] = useState("");

  return (
    <AuthForm
      properties={[
        {
          type: "text",
          text: "first_name",
          placeholder: "first name",
          label: <FaAddressCard />,
          addOn: (input: any) => {
            return chartersOnly(input, "first name");
          },
        },
        {
          type: "text",
          text: "last_name",
          placeholder: "last name",
          label: <FaAddressCard />,
          addOn: (input: any) => {
            return chartersOnly(input, "last name");
          },
        },
        {
          type: "date",
          text: "date",
          label: <FaBirthdayCake />,
          addOn: (input: any) => {
            ageVerification(input);
          },
        },

        {
          type: "text",
          text: "email",
          label: <FaEnvelope color="blue" />,
          addOn: (input: any) => {
            return emailVerification(input);
          },
        },
        {
          type: "text",
          text: "phone_number",
          placeholder: "phone number (optional)",
          optional: true,
          label: <FaPhone color="blue" />,
          addOn: (input: any) => {
            return phoneVerification(input);
          },
        },
        {
          custom: (e: any) => {
            return (
              <Password
                event={e}
                getValue={(value: string) => setPassword(value)}
              />
            );
          },
          addOn: (input: any) => {
            return {
              customHtml: true,
              message: (
                <ul className="ml-7 list-disc text-red-600 sm:text-lg text-sm">
                  {passwordVerification().map((error: any) => {
                    const { patten, message } = error;

                    if (!patten.test(input)) {
                      return <li>must contain {message}</li>;
                    }
                  })}
                </ul>
              ),
            };
          },
          text: "password",
          label: <FaLock color="red" />,
        },
        {
          custom: (e: any) => {
            return (
              <Password
                event={e}
                placeholder="confirm password"
                id="confirm_password"
              />
            );
          },
          addOn: (input: any) => {
            return input !== password ? "password must match" : "";
          },
          text: "confirm_password",
          label: <FaLock color="red" />,
        },
        {
          custom: (e: any) => {
            return (
              <>
                <input
                  className="w-7 h-7  m-4 cursor-pointer"
                  id="mail_list"
                  onChange={e}
                  type="checkbox"
                />
                <small className="self-center sm:text-lg text-sm m-3">
                  subscribe to mailing list (optional)
                </small>
              </>
            );
          },
          optional: true,
        },
        {
          custom: (e: any) => {
            return (
              <>
                <input
                  className="w-7 h-7 m-4 cursor-pointer"
                  id="terms_and_conditions"
                  onChange={e}
                  type="checkbox"
                />
                <QuestionLink
                  path="/terms-and-conditions"
                  question={"agree to terms & conditions"}
                  linkText=" terms & conditions"
                />
              </>
            );
          },
          text: "terms_and_conditions",
        },
      ]}
      errors={{}}
      submitText="create account"
      header="Create Account"
      bottomComponent={
        <QuestionLink
          path="/login"
          question={"already have an account?"}
          linkText=" login"
        />
      }
    />
  );
}
export default SignUp;
