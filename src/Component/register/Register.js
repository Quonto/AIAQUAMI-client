import { useState } from "react";
import axios from "axios";
const Register = () => {
  const [user, setUser] = useState({
    id: "",
    firstName: "",
    lastName: "",
    institution: "",
    phoneNumber: "",
    domain: "Academy",
    intendedUse: "Informative",
    email: "",
    userName: "",
    passwordHash: "",
    confirmPassword: "",
  });

  const [registerHandle, setRegisterHandle] = useState({
    match: false,
    changedPassword: false,
    changedMail: false,
  });

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleRegister = async () => {
    if (!validateEmail(user.email) || user.email.length === 0) {
      return;
    }
    if (user.passwordHash.length < 6) {
      return;
    }

    if (user.passwordHash !== user.confirmPassword) {
      return;
    }

    try {
      const response = await axios.post(
        `https://localhost:7080/Account/RegisterUser/`,
        user
      );
      user.id = response.data.id;
      window.location.replace("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      action="/Account/Register"
      className="form-horizontal"
      method="post"
      noValidate="novalidate"
    >
      <h2>Register</h2>
      <h4>Create a new account.</h4>
      <hr />
      <div className="form-group">
        <label htmlFor="firstname" className="col-md-2 control-label">
          FirstName{" "}
        </label>
        <div className="col-md-10">
          <input
            id="firstname"
            type="text"
            className="form-control"
            onChange={(e) => {
              setUser({ ...user, firstName: e.target.value });
            }}
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="lastname" className="col-md-2 control-label">
          LastName
        </label>
        <div className="col-md-10">
          <input
            id="lastname"
            type="text"
            className="form-control"
            onChange={(e) => {
              setUser({ ...user, lastName: e.target.value });
            }}
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="institution" className="col-md-2 control-label">
          Institution
        </label>
        <div className="col-md-10">
          <input
            type="text"
            className="form-control"
            id="institution"
            onChange={(e) => {
              setUser({ ...user, institution: e.target.value });
            }}
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="domain" className="col-md-2 control-label">
          Domain
        </label>
        <div className="col-md-10">
          <select
            id="selectItemList"
            className="form-control"
            onChange={(e) => {
              setUser({ ...user, domain: e.target.value });
            }}
          >
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
          <select
            id="intendeduse"
            className="form-control"
            onChange={(e) => {
              setUser({ ...user, intendedUse: e.target.value });
            }}
          >
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
          <input
            id="email"
            type="text"
            className="form-control"
            onChange={(e) => {
              setUser({
                ...user,
                email: e.target.value,
                userName: e.target.value,
              });
              setRegisterHandle({ ...registerHandle, changedMail: true });
            }}
          />
          {user.email.length === 0 && registerHandle.changedMail && (
            <span
              className="text-danger field-validation-error"
              data-valmsg-for="Email"
              data-valmsg-replace="true"
            >
              <span id="Email-error" className="">
                The Email field is required.
              </span>
            </span>
          )}
          {!validateEmail(user.email) && user.email.length > 0 && (
            <span
              className="text-danger field-validation-error"
              data-valmsg-for="Email"
              data-valmsg-replace="true"
            >
              <span id="Email-error" className="">
                The Email field is not a valid e-mail address.
              </span>
            </span>
          )}
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="password" className="col-md-2 control-label">
          Password
        </label>
        <div className="col-md-10">
          <input
            id="password"
            type="password"
            className="form-control"
            onChange={(e) => {
              setUser({ ...user, passwordHash: e.target.value });
              setRegisterHandle({ ...registerHandle, changedPassword: true });
            }}
          />
          {user.passwordHash.length < 5 && user.passwordHash.length > 0 && (
            <span
              className="text-danger field-validation-error"
              data-valmsg-for="Password"
              data-valmsg-replace="true"
            >
              <span id="Password-error" className="">
                "The Password must be at least 6 characters long."
              </span>
            </span>
          )}
          {user.passwordHash.length === 0 && registerHandle.changedPassword && (
            <span
              className="text-danger field-validation-error"
              data-valmsg-for="Password"
              data-valmsg-replace="true"
            >
              <span id="Password-error" className="">
                "The Password field is required."
              </span>
            </span>
          )}
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
            onChange={(e) => {
              setUser({ ...user, confirmPassword: e.target.value });
              if (user.passwordHash !== e.target.value) {
                setRegisterHandle({ ...registerHandle, match: true });
              } else {
                setRegisterHandle({ ...registerHandle, match: false });
              }
            }}
          />
          {registerHandle.match && user.passwordHash !== "" && (
            <span
              className="text-danger field-validation-error"
              data-valmsg-for="ConfirmPassword"
              data-valmsg-replace="true"
            >
              <span id="ConfirmPassword-error" className="">
                The password and confirmation password do not match.
              </span>
            </span>
          )}
        </div>
      </div>
      <div className="form-group">
        <div className="col-md-offset-2 col-md-10">
          <button
            type="button"
            className="btn btn-default"
            onClick={handleRegister}
          >
            {" "}
            Register
          </button>
        </div>
      </div>
    </form>
  );
};

export default Register;
