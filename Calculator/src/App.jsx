import React, { useState } from 'react'
import './App.css'

const Button = () => {

  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult('Hata');
    }
  };

  const handleClear = () => {
    setInput("");
    setResult(0);
  };


  return (
    <>

      <div className='container'>

        <input type="text" className='inputfield' value={input} readOnly />

        <div className='button-area'>

          <button className="key" onClick={() => handleClick('7')}>7</button>
          <button className="key" onClick={() => handleClick('8')}>8</button>
          <button className="key" onClick={() => handleClick('9')}>9</button>
          <button className="key" onClick={() => handleClick('/')}>/</button>

          <button className="key" onClick={() => handleClick('4')}>4</button>
          <button className="key" onClick={() => handleClick('5')}>5</button>
          <button className="key" onClick={() => handleClick('6')}>6</button>
          <button className="key" onClick={() => handleClick('*')}>*</button>

          <button className="key" onClick={() => handleClick('1')}>1</button>
          <button className="key" onClick={() => handleClick('2')}>2</button>
          <button className="key" onClick={() => handleClick('3')}>3</button>
          <button className="key" onClick={() => handleClick('-')}>-</button>


          <button className="key" onClick={() => handleClick('0')}>0</button>
          <button className="key" onClick={handleCalculate}>=</button>
          <button className="key" onClick={() => handleClick('+')}>+</button>
          <button className="key" onClick={handleClear}>C</button>

        </div>

        <div className='result'>
          <p>Sonuç: {result}</p>
        </div>

      </div>

    </>

  )
}

function App() {

  return (
    <>
      <div className='wrapper'>
        <Button />
      </div>
    </>
  )
}

export default App
