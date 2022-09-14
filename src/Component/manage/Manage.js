import { Link } from "react-router-dom";
import { useGlobalContext } from "../../Context/Context";

const Manage = () => {
  const { userChanged } = useGlobalContext();
  console.log(userChanged);
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
