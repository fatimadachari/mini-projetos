import React from "react";
import Home from "./pages/Home";
import CalculadoraIMC from "./projetos/calculadora-imc/CalculadoraIMC";
import RelogioDigital from "./projetos/relogio-digital/RelogioDigital";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function AppRoutes() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/calculadora-imc" element={<CalculadoraIMC/>}></Route>
          <Route path="/relogio-digital" element={<RelogioDigital/>}></Route>
        </Routes>
      </Router>
    );
  }
  
  export default AppRoutes;
  