import { useState } from "react";
import "./Login.css";
export default function Login() {
  const [loginfrom, setloginform] = useState(null);
  const [registerfrom, setregisterfrom] = useState(null);
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");
  const [occupation, setOccupation] = useState("Student");
  const [loginnav, setloginnav] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleLoginForm = (data) => {
    setloginform(data);
  };
  const handleRegisterform = (data) => {
    setregisterfrom(data);
  };
  return (
    <div className="login">
      <form className="loginForm" onSubmit={handleSubmit}>
        <LoginNav setloginnav={setloginnav} />
        {loginnav ? (
          <LoginForm
            loginUsername={loginUsername}
            setLoginUsername={setLoginUsername}
            loginPassword={loginPassword}
            setLoginPassword={setLoginPassword}
            handleLoginForm={handleLoginForm}
          />
        ) : (
          <RegisterFrom />
        )}
      </form>
    </div>
  );
}

const LoginNav = ({ setloginnav }) => {
  return (
    <div className="loginNav">
      <button onClick={() => setloginnav(true)}>Login</button>
      <button onClick={() => setloginnav(false)}>Register</button>
    </div>
  );
};

const LoginForm = ({
  loginUsername,
  setLoginUsername,
  loginPassword,
  setLoginPassword,
  handleLoginForm,
}) => {
  const loginSubmit = () => {
    const data = {
      username: loginUsername,
      password: loginPassword,
    };
    handleLoginForm(data);
  };
  return (
    <>
      <h2>Login</h2>
      <hr />
      <input
        type="text"
        value={loginUsername}
        placeholder="Username or email"
        onChange={(e) => setLoginUsername((prev) => e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={loginPassword}
        onChange={(e) => setLoginPassword((prev) => e.target.value)}
      />
      <button onClick={loginSubmit}>Sign In</button>
    </>
  );
};

const RegisterFrom = () => {
  return (
    <>
      <h2>Register</h2>
      <hr />
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <input type="text" placeholder="Confirm Password" />
      <div className="option">
        <label>Occupation</label>
        <select>
          <option>Teacher</option>
          <option>Student</option>
        </select>
      </div>
      <button>Sign Up</button>
    </>
  );
};
