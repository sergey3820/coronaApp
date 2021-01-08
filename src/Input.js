import React from 'react';
import "./Input.css";

function Input({ inputValue, setInputValue, Name, setName }) {

  const change = (e) => {
      console.log(e.target.value);
      setInputValue(e.target.value);
  }

  const Done = (e) => {
      e.preventDefault();
    console.log('YES');
    setName(inputValue);
    setInputValue(' ');
  }

    return (
        <form className="input_wrapper">
            <input onChange={change} type="text" placeholder="Enter country name" className="input_input"/>
            <input onClick={Done} type="submit" value="Submit" className="input_btn"/>
        </form>
    )
}

export default Input;
