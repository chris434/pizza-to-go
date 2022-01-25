import AuthForm from "../components/auth-form";
import QuestionLink from "../components/Question-link";
import Password from "../components/Password";
import { FaLock, FaEnvelope } from "react-icons/fa";
import useToggle from "../components/hooks/useToggle";

function Login({ header, submitPath, component }: any) {
  const [inputType, setInputType] = useToggle(false);
  return (
    <AuthForm
      properties={[
        { type: "text", text: "email", label: <FaEnvelope /> },

        {
          custom: (e: any) => {
            return <Password event={e} />;
          },

          label: <FaLock />,
          text: "password",
          bottomInfo: (
            <QuestionLink
              path="/forgotten-password"
              question="forgotten your password? "
              linkText="reset password"
            />
          ),
        },
      ]}
      header={header}
      submitText="login"
      errors={{}}
      bottomComponent={component}
      submitHandler={() => {}}
    />
  );
}
export default Login;
