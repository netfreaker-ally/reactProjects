import AuthButton from "../Buttons/AuthButton";
import Input from "./Input";

const Login = () => {
  return (
    <div className="login">
      <Input type="email">UserName</Input>
      <Input type="password">Password</Input>
      <AuthButton className="button">Submit</AuthButton>
    </div>
  );
};

export default Login;
