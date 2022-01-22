import AuthForm from "../components/auth-form";
import QuestionLink from "../components/Question-link";
import { FaLock, FaEnvelope } from "react-icons/fa";
import useToggle from "../components/hooks/useToggle";

function Login({ header, submitPath, component }: any) {
  const [inputType, setInputType] = useToggle(false);
  return (
    <AuthForm
      properties={[
        { type: "text", text: "email", label: <FaEnvelope /> },

        {
          custom: (e: any, className: string) => {
            return (
              <>
                <input
                  className={className}
                  onChange={e}
                  id="password"
                  type={inputType ? "text" : "password"}
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={() => setInputType()}
                  className="absolute top-6 right-6 bg-white sm:text-2xl  text-sm pl-2 pr-2 text-sky-600">
                  {inputType ? "hide" : "show"}
                </button>
              </>
            );
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
      errors={{ email: "", password: "" }}
      bottomComponent={component}
      submitHandler={() => {}}
    />
  );
}
export default Login;
