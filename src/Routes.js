import React from "react";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import ClaculadoraIMC from "./projetos/calculadora-imc/ClaculadoraIMC";
import RelogioDigital from "./projetos/relogio-digital/RelogioDigital";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function AppRoutes() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/sobre" element={<Sobre/>}></Route>
          <Route path="/calculadora-imc" element={<ClaculadoraIMC/>}></Route>
          <Route path="/relogio-digital" element={<RelogioDigital/>}></Route>
        </Routes>
      </Router>
    );
  }
  
  export default AppRoutes;
  