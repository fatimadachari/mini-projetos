import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CalculadoraIMC from "./projetos/calculadora-imc/CalculadoraIMC";
import RelogioDigital from "./projetos/relogio-digital/RelogioDigital";
import Cronometro from "./projetos/cronometro/Cronometro";
import RegraDeTres from "./projetos/regra-de-tres/RegraDeTres";

function AppRoutes() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/calculadora-imc" element={<CalculadoraIMC/>}></Route>
          <Route path="/relogio-digital" element={<RelogioDigital/>}></Route>
          <Route path="/cronometro" element={<Cronometro/>}></Route>
          <Route path="/regra-de-tres" element={<RegraDeTres/>}></Route>
        </Routes>
      </Router>
    );
  }
  
  export default AppRoutes;
  