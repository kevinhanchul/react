import React, { useState } from 'react';
import './App.css';

function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);
  const [number4, setNumber4] = useState(0);
  const [number5, setNumber5] = useState(0);
  const [result, setResult] = useState(0);

  const handleNumber1Change = (e) => {
    setNumber1(Number(e.target.value));
  };

  const handleNumber2Change = (e) => {
    setNumber2(Number(e.target.value));
  };

  const handleNumber3Change = (e) => {
    setNumber3(Number(e.target.value));
  };

  const handleNumber4Change = (e) => {
    setNumber4(Number(e.target.value));
  };

  const handleNumber5Change = (e) => {
    setNumber5(Number(e.target.value));
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
/*
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
*/
/*
  //점수별 등급찾기
  const findSeason = () => {
    if ((number1 ==12) || (number1 ==1) || (number1 ==2)){
      setResult("겨울");    
    }
    else if ((number1 ==3) || (number1 ==4) || (number1 ==5)) {
      setResult("봄");    
    }    
    else if ((number1 ==6) || (number1 ==7) || (number1 ==8)) {
      setResult("여름");    
    }    
    else {
      setResult("가을");    
    }    
  };
  */
 /*
   //지하철 요금표
   const findSubwayFee = () => {
    if ((number1 == 12) || (number1 ==1) || (number1 ==2)){
      setResult("겨울");    
    }
    else if ((number1 ==3) || (number1 ==4) || (number1 ==5)) {
      setResult("봄");    
    }    
    else if ((number1 ==6) || (number1 ==7) || (number1 ==8)) {
      setResult("여름");    
    }    
    else {
      setResult("가을");    
    }    
  };
  */
/*
  const findLealNo = () => {
    var a=[];
    a[0] = number1;
    a[1] = number2;
    a[2] = number3;
    a[3] = number4;
    a[4] = number5;

    for (var i=0;i<5;i++){
      console.log(a[i]);
    }
    setResult("끝");    
  };
  */
  return (
    <div className="App">
      <h1>숫자 두 개 더하기</h1>
        <input value={number1} onChange={handleNumber1Change} /> 
        <input value={number2} onChange={handleNumber2Change} />
        <input value={number3} onChange={handleNumber3Change} />
        <input value={number4} onChange={handleNumber4Change} />
        <input value={number5} onChange={handleNumber5Change} />
      <button onClick={findLealNo}>더하기</button>
      <div>
        <h2>결과: {result}</h2>
      </div>
    </div>
  );
}

export default App; 
