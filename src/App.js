import React from "react";
import { Routes, Route} from "react-router-dom";
import Login from "./register/Login";
import Register from "./register/Register";

const App = () => {
  return (
   
      <Routes>
        <Route path="/register" element={<Register />}></Route>
      <Route path="/login" element={<Login />}></Route>
        </Routes>
  );
};

export default App;