import React from "react";
import '../App.css';
import { Link } from "react-router-dom";
import imagem from './images/imagem.svg';

function Home() {
  return (
    <div className="Home">
      <img src={imagem} alt="" />
      <div className="Container">
        <h1>Mini Projetos</h1>
        <Link to="calculadora-imc"><button>Calculadora IMC</button></Link>
        <Link to="relogio-digital"><button>Relógio digital</button></Link>
        <Link to="cronometro"><button>Cronometro</button></Link>
        <Link to="regra-de-tres"><button>Regra de três</button></Link>
      </div>
    </div>
  );
}

export default Home;
