import React, { useState, useEffect } from 'react';
import './style.css';

const RelogioDigital = () => {

    const [time, setTime] = useState({ horas: '00', minutos: '00', segundos: '00' });

    useEffect(() => {
        const intervalId = setInterval(() => {
            const date = new Date();
            const horas = date.getHours().toString().padStart(2, '0');
            const minutos = date.getMinutes().toString().padStart(2, '0');
            const segundos = date.getSeconds().toString().padStart(2, '0');

            setTime({ horas, minutos, segundos });
        }, 1000);

        // Limpeza do intervalo ao desmontar o componente
        return () => clearInterval(intervalId);
    }, []);


    return (
        <div className="RelogioDigital">
            <div className="relogio">
                <div>
                    <span id="horas">{time.horas}</span>
                    <span className="tempo">Horas</span>
                </div>

                <div>
                    <span id="minutos">{time.minutos}</span>
                    <span className="tempo">Minutos</span>
                </div>

                <div>
                    <span id="segundos">{time.segundos}</span>
                    <span className="tempo">Segundos</span>
                </div>
            </div>
        </div>
    );

};

export default RelogioDigital;
