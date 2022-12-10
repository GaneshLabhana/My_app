//import logo from "./logo.svg";

import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import AddUser from "./Pages/AddUser";
import EditUser from "./Pages/EditUser";
function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/adduser" element={<AddUser />} />
        <Route exact path="/edituser/:id" element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App;
