const Register = () => {
  return (
    <div className="register">
      {" "}
      <h4>Create a new account.</h4>
      <hr />
      <div className="form-group">
        <label htmlFor="firstname" className="col-md-2 control-label">
          {" "}
          FirstName{" "}
        </label>
        <div className="col-md-10">
          <input id="firstname" type="text" className="form-control" />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="lastname" className="col-md-2 control-label">
          LastName
        </label>
        <div className="col-md-10">
          <input id="lastname" type="text" className="form-control" />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="institution" className="col-md-2 control-label">
          Institution
        </label>

        <div className="col-md-10">
          <input type="text" className="form-control" id="institution" />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="domain" className="col-md-2 control-label">
          Domain
        </label>
        <div className="col-md-10">
          <select id="selectItemList" className="form-control">
            <option value="Academy">Academy</option>
            <option value="Industry">Industry</option>
            <option value="NGO">NGO</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="intendeduse" className="col-md-2 control-label">
          Intended Use
        </label>
        <div className="col-md-10">
          <select id="intendeduse" className="form-control">
            <option value="Informative">Informative</option>
            <option value="For education">For education</option>
            <option value="Professional">Professional</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
      <hr />
      <div className="form-group">
        <label htmlFor="email" className="col-md-2 control-label">
          Email
        </label>
        <div className="col-md-10">
          <input id="email" type="text" className="form-control" />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="password" className="col-md-2 control-label">
          Password
        </label>
        <div className="col-md-10">
          <input id="password" type="password" className="form-control" />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="cofirmpassword" className="col-md-2 control-label">
          Confirm Password
        </label>

        <div className="col-md-10">
          <input
            id="confirmpassword"
            type="password"
            className="form-control"
          />
        </div>
      </div>
      <div className="form-group">
        <div className="col-md-offset-2 col-md-10">
          <input type="submit" className="btn btn-default" value="Register" />
        </div>
      </div>
    </div>
  );
};

export default Register;
