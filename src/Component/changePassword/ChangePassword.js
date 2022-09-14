import { useState } from "react";
import { useGlobalContext } from "../../Context/Context";
import axios from "axios";

const ChangePassword = () => {
  const { user, setUser } = useGlobalContext();
  const [passwordHandle, setPasswordHandle] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [passwordValidationInccorect, setPasswordValidationInccorect] =
    useState(false);
  const [passwordValidationNewRequired, setPasswordValidationNewRequired] =
    useState(false);
  const [
    passwordValidationCurrentRequired,
    setPasswordValidationCurrentRequired,
  ] = useState(false);
  const [passwordValidationNewLeast, setPasswordValidationNewLeast] =
    useState(false);
  const [
    passwordValidationConfirmPassword,
    setPasswordValidationConfirmPassword,
  ] = useState(false);

  const handleChangePassword = async () => {
    const { currentPassword, newPassword, confirmPassword } = passwordHandle;

    let correct = true;

    if (currentPassword !== user.passwordHash) {
      setPasswordValidationInccorect(true);
      correct = false;
    } else {
      setPasswordValidationInccorect(false);
    }

    if (newPassword.length === 0) {
      setPasswordValidationNewRequired(true);
      correct = false;
    } else {
      setPasswordValidationNewRequired(false);
    }

    if (currentPassword.length === 0) {
      setPasswordValidationCurrentRequired(true);
      correct = false;
    } else {
      setPasswordValidationCurrentRequired(false);
    }

    if (newPassword.length < 5 && newPassword.length > 0) {
      setPasswordValidationNewLeast(true);
      correct = false;
    } else {
      setPasswordValidationNewLeast(false);
    }

    if (newPassword !== confirmPassword) {
      setPasswordValidationConfirmPassword(true);
      correct = false;
    } else {
      setPasswordValidationConfirmPassword(false);
    }

    if (correct) {
      const newUser = { ...user, passwordHash: newPassword };

      const { data } = await axios.put(
        `https://localhost:7080/Account/ChangePassword/`,
        newUser
      );
      setUser(data);
      window.location.replace("/manage/true");
    }
  };

  return (
    <div className="container body-content">
      <h2>Change Password</h2>
      <form
        action="/Manage/ChangePassword"
        className="form-horizontal"
        method="post"
        noValidate="novalidate"
      >
        <input
          name="__RequestVerificationToken"
          type="hidden"
          value="KitmmwnNA0mXmsQltxHMKdNevc-MCAQEh6z5svyvXmowtiN8Uf5v0YQTntOPYZ7KnUeCcJZHwI3x9xZc_hcpFrD0LBStjX7ykO_fnslv_6K9ygvwrvJFxW-Rn_e87e-QE63L8Pg8kxc6VF-0ix2xOg2"
        />{" "}
        <h4>Change Password Form</h4>
        <hr />
        <div
          className="validation-summary-valid text-danger"
          data-valmsg-summary="true"
        ></div>{" "}
        <div
          className="text-danger validation-summary-errors"
          data-valmsg-summary="true"
        >
          <ul>
            {passwordValidationInccorect && <li>Incorrect password.</li>}
            {passwordValidationNewRequired && (
              <li>The New password field is required.</li>
            )}
            {passwordValidationCurrentRequired && (
              <li>The Current password field is required.</li>
            )}
            {passwordValidationNewLeast && (
              <li>The New password must be at least 6 characters long.</li>
            )}
            {passwordValidationConfirmPassword && (
              <li>The new password and confirmation password do not match.</li>
            )}
          </ul>
        </div>
        <div className="form-group">
          <label className="col-md-2 control-label" htmlFor="OldPassword">
            Current password
          </label>
          <div className="col-md-10">
            <input
              className="form-control"
              data-val="true"
              data-val-required="The Current password field is required."
              id="OldPassword"
              name="OldPassword"
              type="password"
              onChange={(e) => {
                setPasswordHandle({
                  ...passwordHandle,
                  currentPassword: e.target.value,
                });
              }}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="col-md-2 control-label" htmlFor="NewPassword">
            New password
          </label>
          <div className="col-md-10">
            <input
              className="form-control"
              data-val="true"
              data-val-length="The New password must be at least 6 characters long."
              data-val-length-max="100"
              data-val-length-min="6"
              data-val-required="The New password field is required."
              id="NewPassword"
              name="NewPassword"
              type="password"
              onChange={(e) => {
                setPasswordHandle({
                  ...passwordHandle,
                  newPassword: e.target.value,
                });
              }}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="col-md-2 control-label" htmlFor="ConfirmPassword">
            Confirm new password
          </label>
          <div className="col-md-10">
            <input
              className="form-control"
              data-val="true"
              data-val-equalto="The new password and confirmation password do not match."
              data-val-equalto-other="*.NewPassword"
              id="ConfirmPassword"
              name="ConfirmPassword"
              type="password"
              onChange={(e) => {
                setPasswordHandle({
                  ...passwordHandle,
                  confirmPassword: e.target.value,
                });
              }}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-md-offset-2 col-md-10">
            <button
              type="button"
              className="btn btn-default"
              onClick={handleChangePassword}
            >
              Change password
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
