import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="row">
      <div className="col-md-12">
        <section id="loginForm">
          <h4>Use a local account to log in.</h4>
          <hr />
          <div className="form-group">
            <label htmlFor="email" className="col-md-2 control-label">
              Email
            </label>
            <div className="col-md-10">
              <input id="email" className="form-control" type="text" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="password" className="col-md-2 control-label">
              Password
            </label>
            <div className="col-md-10">
              <input id="password" className="form-control" type="password" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-md-offset-2 col-md-10">
              <div className="checkbox">
                <input id="check" type="checkbox" style={{ margin: "0px" }} />
                <label htmlFor="check">Remeber me?</label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="col-md-offset-2 col-md-10">
              <input type="submit" value="Log in" className="btn btn-default" />
            </div>
          </div>
          <p>
            <Link to={"/register"}>Register as a new user</Link>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Login;
