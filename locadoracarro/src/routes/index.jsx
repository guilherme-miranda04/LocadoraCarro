import { Route, Routes } from "react-router-dom";

import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import Registers from "../pages/Register/Registers";
import Rents from "../pages/Rent/Rents";
import Vehicles from "../pages/Vehicles/Vehicles";
//import RegisterForm from "../pages/Register/RegisterForm";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Registers />} />
      <Route path="/rents" element={<Rents />} />
      <Route path="/vehicles" element={<Vehicles />} />
    </Routes>
  );
}
