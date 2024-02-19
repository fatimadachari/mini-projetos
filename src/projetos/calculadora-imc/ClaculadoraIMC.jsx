import React, { useState } from 'react';
import './style.css'; 
import imagem from "./images/desenho.svg"

const CalculadoraIMC = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [description, setDescription] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const calculatedBMI = Number(weight) / (Number(height) * Number(height));
    setBmi(calculatedBMI.toFixed(2).replace('.', ','));

    let desc = '';
    if (calculatedBMI < 18.5) {
      desc = 'Cuidado! Você está abaixo do peso!';
    } else if (calculatedBMI >= 18.5 && calculatedBMI <= 25) {
      desc = 'Você está no peso ideal!';
    } else if (calculatedBMI > 25 && calculatedBMI <= 30) {
      desc = 'Cuidado! Você está com sobrepeso!';
    } else if (calculatedBMI > 30 && calculatedBMI <= 35) {
      desc = 'Cuidado! Você está com obesidade moderada!';
    } else if (calculatedBMI > 35 && calculatedBMI <= 40) {
      desc = 'Cuidado! Você está com obesidade severa!';
    } else {
      desc = 'Cuidado! Você está com obesidade mórbida!';
    }
    setDescription(desc);
    setIsVisible(true);
  };

  return (
    <div className='CalculadoraIMC'>
      <main id="container">
        <section id="img">
          <img src={imagem} alt=""/>
        </section>

        <section id="calculator">
          <form id="form" onSubmit={handleSubmit}>
            <h1 id="title">Calculadora - IMC</h1>
            <div className="input-box">
              <label htmlFor="weight">Peso em kg</label>
              <div className="input-field">
                <i className="fa-solid fa-weight-hanging"></i>
                <input
                  type="number"
                  id="weight"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  required
                />
                <span>kg</span>
              </div>
            </div>

            <div className="input-box">
              <label htmlFor="height">Altura em metros</label>
              <div className="input-field">
                <i className="fa-solid fa-ruler"></i>
                <input
                  type="number"
                  step="0.01"
                  id="height"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  required
                />
                <span>m</span>
              </div>
            </div>

            <button id="calculate">Calcular</button>
          </form>

          {isVisible && (
            <div id="infos">
              <div id="result">
                <div id="bmi">
                  <span id="value">{bmi}</span>
                  <span>Seu IMC</span>
                </div>
                <div id="description">
                  <span>{description}</span>
                </div>
              </div>

              <div id="more-info">
                <a href="https://mundoeducacao.uol.com.br/saude-bem-estar/imc.htm" target='_blank'>
                  Mais informações sobre o IMC <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default CalculadoraIMC;
