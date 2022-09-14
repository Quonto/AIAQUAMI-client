import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Component/footer/footer";
import Home from "./Component/home/Home";
import Login from "./Component/login/Login";
import MyProjects from "./Component/myProjects/MyProjects";
import Navbar from "./Component/navbar/Navbar";
import Register from "./Component/register/Register";
import { HelmetProvider } from "react-helmet-async";
import "./app.css";
import Manage from "./Component/manage/Manage";
import ChangePassword from "./Component/changePassword/ChangePassword";

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <div className="container">
          <div className="row-navbar">
            {" "}
            <Navbar />
          </div>{" "}
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/myProjects" element={<MyProjects />}></Route>
            <Route exact path="/register" element={<Register />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route
              exact
              path="/manage/:passwordChange"
              element={<Manage />}
            ></Route>
            <Route
              exact
              path="/change-password"
              element={<ChangePassword />}
            ></Route>
          </Routes>
        </div>

        <Footer />
      </Router>
    </HelmetProvider>
  );
};

export default App;
