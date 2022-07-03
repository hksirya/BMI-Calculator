import React, { useState } from "react";
import "./App.css";

function App() {

const [weight,setWeight]=useState(0);
const [height,setHeight]=useState(0);
const [BMI,setBMI]=useState('');
const [message,setMessage]=useState('');

let calcBmi = (event)=>{
    event.preventDefault()

    if(weight===0|| height===0)
    alert('Please Enter a value');
    
    else{
        let BMI=(weight/(height*height)*10000);
        setBMI(BMI.toFixed(1));


        if(BMI<=18) {
            setMessage('You are underweight')
        }
        else if(BMI>18 && BMI<=24.9){
            setMessage('You are healthy')
        }
        else {
            setMessage('You are overweight')
        }
    }
}

let reload=()=>{
    window.location.reload();
}


let imgSrc;

if(BMI<1) {
    imgSrc=null;
}
else if(BMI<=18) {
    imgSrc=require("./assets/underweight.png")
}
else if(BMI>18 && BMI<=24.9){
    imgSrc=require("./assets/healthy.png")
}
else if(BMI>25){
    imgSrc=require("./assets/overweight.png")
}


  return (
    <div className="app">
      <div className="container">

      <h2 className="center"> BMI Calculator</h2>

      <form onSubmit={calcBmi}>
        <div>
          <label>Weight(Kgs)</label>
          <input value={weight} onChange={(event)=> setWeight(event.target.value)}></input>
        </div>

        <div>
          <label>Height(cm)</label>
          <input value={height} onChange={(event)=> setHeight(event.target.value)}></input>
        </div>

        <div>
          <button className="btn" type="submit">
            Submit
          </button>
          <button className="btn btn-outline" type="submit" onClick={reload}>
           Reload
          </button>
        </div>
      </form>

      <div className="center">
        <h3>Your BMI is: {BMI}</h3>
        <p>{message}</p>
      </div>

      <div className="img-container">
      <img src={imgSrc} alt=''/>
      </div>
    
    </div>
    </div>
  );
}
export default App;
