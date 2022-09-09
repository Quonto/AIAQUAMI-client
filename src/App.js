import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Component/home/Home";
import Login from "./Component/login/Login";
import MyProjects from "./Component/myProjects/MyProjects";
import Navbar from "./Component/navbar/Navbar";
import Register from "./Component/register/Register";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/myProjects" element={<MyProjects />}></Route>
        <Route exact path="/register" element={<Register />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
