import React, { useState } from 'react';
import './App.css';

function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  //const [result, setResult] = useState(0);
  const [result, setResult] = useState(0);

  const handleNumber1Change = (e) => {
    setNumber1(Number(e.target.value));
  };

  const handleNumber2Change = (e) => {
    setNumber2(Number(e.target.value));
  };
/*
  //더하기
  const addNumbers = () => {
    setResult(number1 + number2);    
  };
*/

/*
  //비교하기
  const findBigNo = () => {
    if (number1 > number2){
      setResult(number1);    
    }
    if (number1 < number2){
      setResult(number2);    
    }    
  };
*/
/*
  //홀수
  const findOddNo = () => {
    if (number1 % 2 == 0){
      setResult("짝수");    
    }
    else {
      setResult("홀수");    
    }    
  };
*/

  //점수별 등급찾기
  const findScoreGrade = () => {
    if (number1 >=90){
      setResult("A");    
    }
    else if (number1 >=80) {
      setResult("B");    
    }    
    else if (number1 >=70) {
      setResult("C");    
    }    
    else if (number1 >=60) {
      setResult("D");    
    }    
  };

  return (
    <div className="App">
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
      <button onClick={findScoreGrade}>더하기</button>
      <div>
        <h2>결과: {result}</h2>
      </div>
    </div>
  );
}

export default App; 
