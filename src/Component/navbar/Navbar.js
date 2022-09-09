import { Link } from "react-router-dom";
import "../../Content/bootstrap.css";
const Navbar = () => {
  return (
    <div className="navbar navbar-inverse navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="/">
            AIAQUAMI
          </a>
        </div>
        <div className="navbar-collapse collapse" aria-expanded="false">
          <ul className="nav navbar-nav">
            <li>
              <Link to="/">AIAQUAMI</Link>
            </li>
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
            {
              //Ova tri li taga iznad treba da budu linkovi
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
