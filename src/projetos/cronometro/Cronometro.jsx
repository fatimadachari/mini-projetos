import React, { useState, useEffect } from "react";
import './style.css';

function Cronometro() {

    const [timer, setTimer] = useState(0);
    const [marks, setMarks] = useState([]);
    const [isActive, setIsActive] = useState(false);
  
    useEffect(() => {
      let intervalId = null;
  
      if (isActive) {
        intervalId = setInterval(() => {
          setTimer((timer) => timer + 1);
        }, 10);
      } else if (!isActive && timer !== 0) {
        clearInterval(intervalId);
      }
  
      return () => clearInterval(intervalId);
    }, [isActive, timer]);
  
    const formatTime = (time) => {
      const hours = Math.floor(time / 360000);
      const minutes = Math.floor((time % 360000) / 6000);
      const seconds = Math.floor((time % 6000) / 100);
      const hundredths = time % 100;
  
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${hundredths.toString().padStart(2, '0')}`;
    };
  
    const toggleTimer = () => {
      setIsActive(!isActive);
    };
  
    const markTime = () => {
      setMarks([...marks, timer]);
    };
  
    const resetTimer = () => {
      setIsActive(false);
      setTimer(0);
      setMarks([]);
    };
    
    return (
        <div className="Cronometro">
            <div id="stopwatch">
                <h2 id="timer">{formatTime(timer)}</h2>
                <div id="actions">
                    <button id="reset" onClick={resetTimer}>
                        <i className="fa-solid fa-redo"></i>
                    </button>
                    <button id="power" onClick={toggleTimer}>
                        <i className={`fa-solid ${isActive ? 'fa-pause' : 'fa-play'}`}></i>
                    </button>
                    <button id="mark" onClick={markTime}>
                        <i className="fa-solid fa-flag"></i>
                    </button>
                </div>
                <div id="marks-list">
                    {marks.map((mark, index) => (
                        <p key={index}>Marca {index + 1}: {formatTime(mark)}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Cronometro;
