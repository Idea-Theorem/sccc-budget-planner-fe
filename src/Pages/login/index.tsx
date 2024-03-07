import { useState } from "react";
import TextInput from "../../components/TextInput";
import ButtonComponent from "../../components/Buttton";

const Login = () => {
  const [email, setEmail] = useState("");
  const handleUsernameChange = (value: string) => {
    setEmail(value);
  };
  return (
    <div>
      <div>
        <img src="./assets/svgs/logo.svg" />
      </div>
      <div>
        <p>Continue with email</p>
        <TextInput value={email} onChange={handleUsernameChange} />
        <p>
          By continuing, you agree that we create an account for you (unless
          already created), and accept our Terms and Conditions and Privacy
          Policy.
        </p>
        <ButtonComponent buttonTitle="Cotinue" />
      </div>
    </div>
  );
};

export default Login;
