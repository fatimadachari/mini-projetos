import React, { useState } from "react";
import './style.css';

function RegraDeTres() {

    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [num3, setNum3] = useState('');
    const [result, setResult] = useState('');

    const calculate = () => {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);
        const n3 = parseFloat(num3);

        if (isNaN(n1) || isNaN(n2) || isNaN(n3) || n1 === 0) {
            setResult('Inválido');
            return;
        }

        let res = (n3 * n2) / n1;

        if (Number.isInteger(res)) {
            setResult(res);
        } else {
            setResult(res.toFixed(2).replace('.', ','));
        }
    };

    return (
        <div className="RegraDeTres">
            <div className="calculator">
                <h1>Regra de três</h1>

                <div className="input-container">
                    <div className="input-group">
                        <input type="number" value={num1} onChange={e => setNum1(e.target.value)} placeholder="A" />
                        <span>está para</span>
                        <input type="number" value={num2} onChange={e => setNum2(e.target.value)} placeholder="B" />
                    </div>

                    <p className="input-text">
                        Assim como
                    </p>

                    <div className="input-group">
                        <input type="number" value={num3} onChange={e => setNum3(e.target.value)} placeholder="C" />
                        <span>está para</span>
                        <p id="result">
                            {result || <i className="fa-solid fa-xmark"></i>}
                        </p>
                    </div>
                </div>

                <button id="calculate" onClick={calculate}>
                    Calcular
                </button>
            </div>
        </div>
    );
}

export default RegraDeTres;
