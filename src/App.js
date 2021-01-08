import React, { useEffect, useState } from 'react';
import { BrowserRouter, Link, Route } from "react-router-dom";
import Test from "./Test";
import Silka from "./Silka";
import { Line } from "react-chartjs-2";
import Input from './Input';
import Footer from './Footer';
import "./App.css"; 
import Erkir from './Erkir';

function App() {

  const [country, setCountry] = useState([]);
  const [Name, setName] = useState('Armenia');
  const [flag, setFlag] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [wait, setWait] = useState(false);

  useEffect(() => {
      setTimeout(() => {
        getData();
      setWait(true);
      }, 1500);
  }, [Name]);

  const getData = async() => {
    const res = await fetch(`https://disease.sh/v3/covid-19/countries/${Name}`);
    const data = await res.json();
    setCountry(data);
    console.log(data);
    setFlag(data.countryInfo.flag);
    console.log(data.countryInfo.flag);
  }

  return (
     <div className={wait === false ? "black" : ""}>
       { wait === false 
        ? <div className="loadingWrapper">
          <h1 className="lodaing_title">Loading...</h1>
          <div class="lds-spinner loading_wrapper"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
        : <div className="main">
          <h1 className="main_title" style={{textAlign: "center"}}>Covid App</h1>
       <Input setName={setName} Name={Name} inputValue={inputValue} setInputValue={setInputValue} />
       <Silka flag={flag} country={country} />
       <Erkir flag={flag} country={country} />
         <Footer />
        </div>
       }
    </div>
  )
}

export default App;
