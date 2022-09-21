import { useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../Context/Context";
import axios from "axios";

const Login = () => {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const { setUser } = useGlobalContext();

  const [invalidLogin, setInvalidLogin] = useState(false);

  const handleLogin = async () => {
    const newUser = {
      email: userLogin.email,
      passwordHash: userLogin.password,
      userName: userLogin.email,
    };

    try {
      const response = await axios.post(
        `https://localhost:7080/Account/Login/`,
        newUser
      );
      setUser(response.data);
      setInvalidLogin(false);
      window.location.replace("/");
    } catch (error) {
      console.log(error);
      setInvalidLogin(true);
    }
  };

  return (
    <div className="container body-content">
      <form
        action="/Account/Login"
        className="form-horizontal"
        method="post"
        noValidate="novalidate"
      >
        <h2>Log in</h2>
        <div className="col-md-12">
          <section id="loginForm">
            <h4>Use a local account to log in.</h4>
            <hr />
            {invalidLogin && (
              <div className="validation-summary-errors text-danger">
                <ul>
                  <li>Invalid login attempt.</li>
                </ul>
              </div>
            )}
            <div className="form-group">
              <label htmlFor="email" className="col-md-2 control-label">
                Email
              </label>
              <div className="col-md-10">
                <input
                  id="email"
                  className="form-control"
                  type="text"
                  onChange={(e) => {
                    setUserLogin({ ...userLogin, email: e.target.value });
                  }}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="password" className="col-md-2 control-label">
                Password
              </label>
              <div className="col-md-10">
                <input
                  id="password"
                  className="form-control"
                  type="password"
                  onChange={(e) => {
                    setUserLogin({ ...userLogin, password: e.target.value });
                  }}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-md-offset-2 col-md-10">
                <div className="checkbox">
                  <input
                    id="check"
                    type="checkbox"
                    style={{ margin: "0px" }}
                    onChange={() => {
                      setUserLogin({
                        ...userLogin,
                        rememberMe: !userLogin.rememberMe,
                      });
                    }}
                  />
                  <label htmlFor="check">Remeber me?</label>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="col-md-offset-2 col-md-10">
                <button
                  type="button"
                  className="btn btn-default"
                  onClick={handleLogin}
                >
                  Log in
                </button>
              </div>
            </div>
            <p>
              <Link to={"/register"}>Register as a new user</Link>
            </p>
          </section>
        </div>
      </form>
    </div>
  );
};

export default Login;
