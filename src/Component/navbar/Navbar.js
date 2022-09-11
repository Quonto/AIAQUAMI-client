import { useState } from "react";
import { Link } from "react-router-dom";
import "../../Content/bootstrap.css";
const Navbar = () => {
  const [menuCollapsed, setMenuCollapsed] = useState(false);

  return (
    <div className="navbar navbar-inverse navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target=".navbar-collapse"
            onClick={() => setMenuCollapsed(!menuCollapsed)}
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>

          <a className="navbar-brand" href="/">
            AIAQUAMI
          </a>
        </div>
        <div
          className={
            menuCollapsed
              ? "navbar-collapse collapse in"
              : "navbar-collapse collapse"
          }
          aria-expanded={menuCollapsed}
        >
          <ul className="nav navbar-nav">
            <li>
              <Link to="/myProjects">My Projects</Link>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Log in</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
