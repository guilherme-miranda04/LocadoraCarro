import { Route, Routes } from "react-router-dom";

import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
//import RegisterForm from "../pages/Register/RegisterForm";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      {/*<Route path="/register" element={<RegisterForm />} /> */}
    </Routes>
  );
}
