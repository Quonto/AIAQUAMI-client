import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Manage = () => {
  const { passwordChange } = useParams();
  const [userChanged, setUserChanged] = useState(false);

  useEffect(() => {
    setUserChanged(passwordChange === "true");
  }, [passwordChange]);

  return (
    <div className="container body-content">
      <h2>Manage</h2>
      <p className="text-success"></p>
      <div>
        {userChanged && (
          <p className="text-success">Your password has been changed.</p>
        )}
        <h4>Change your account settings</h4>
        <hr />

        <dl className="dl-horizontal">
          <dt>Password:</dt>
          <dd>
            [<Link to="/change-password">Change your password</Link> ]
          </dd>
        </dl>
      </div>
    </div>
  );
};

export default Manage;
