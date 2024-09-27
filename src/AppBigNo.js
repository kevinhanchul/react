import React, { useState } from 'react';
import './App.css';

function AppBigNo() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);

  const handleNumber1Change = (e) => {
    setNumber1(Number(e.target.value));
  };

  const handleNumber2Change = (e) => {
    setNumber2(Number(e.target.value));
  };

  const addNumbers = () => {
    var a=0;
    if(number1 > number2){
      a = number1;
    }
    else {
      a = number2;
    }
    setResult(a);    
  };

  return (
    <div className="AppBigNo">
      <h1>숫자 두 개 더하기</h1>
      <div>
        <input
          type="number"
          value={number1}
          onChange={handleNumber1Change}
          placeholder="첫 번째 숫자"
        />
      </div>
      <div>
        <input
          type="number"
          value={number2}
          onChange={handleNumber2Change}
          placeholder="두 번째 숫자"
        />
      </div>
      <button onClick={addNumbers}>비교하기</button>
      <div>
        <h2>결과: {result}</h2>
      </div>
    </div>
  );
}

export default AppBigNo; 
