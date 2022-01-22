import QuestionLink from "../components/Question-link";
import Login from "../components/Login-component";
function UserLogin() {
  return (
    <Login
      header="login"
      submitPath="/home"
      component={
        <QuestionLink
          path="/sign-up"
          question=" Not got a account yet? "
          linkText="create account"
        />
      }
    />
  );
}
export default UserLogin;
