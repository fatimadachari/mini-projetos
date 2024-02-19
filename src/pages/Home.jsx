import React from "react";
import '../App.css';
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="Home">
      <div className="Container">
        <h1>Mini Projetos</h1>
        <Link to="calculadora-imc"><button>Calculadora IMC</button></Link>
        <Link to="relogio-digital"><button>Relógio digital</button></Link>
      </div>
    </div>
  );
}

export default Home;
