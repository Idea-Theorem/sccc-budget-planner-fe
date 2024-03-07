import { useState } from "react";
import TextInput from "../../components/TextInput";
import "./index.scss";
import ButtonComponent from "../../components/Buttton";

const Login = () => {
  const [email, setEmail] = useState("");
  const handleUsernameChange = (value: string) => {
    setEmail(value);
  };

  return (
    <div className="login_area d-flex">
      <div className="login_from">
        <strong className="login_logo">
          <img src="./assets/svgs/logo.svg" alt="Logo" />
        </strong>
        <div className="form_holder">
          <h1>Continue with email</h1>
          <div className="email_field">
            <TextInput value={email} onChange={handleUsernameChange} />
          </div>
          <div className="login_discription">
            <p>
              By continuing, you agree that we create an account for you (unless
              already created), and accept our Terms and Conditions and Privacy
              Policy.
            </p>
          </div>
          <ButtonComponent text="Continue" variant="primary" size="large" />
        </div>
      </div>
    </div>
  );
};

export default Login;
