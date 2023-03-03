import React from "react";
import { useState } from "react";

const Form = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange= (e) => {
    setData({...data, email: e.target.value})
    
  }
//   const handleChangePass= (e) => {
//     setData({...data, password:e.target.value})
//   }

//   const handleKeyDown = (e) => {
//     if(e.key === " ") {
//         e.preventDefault()
//     }
//   }

  const validateUser= (str) => {
    const withoutSpaces = str.trim();
    if(withoutSpaces.length >2 && (str === withoutSpaces)){
        return true;
    } else {
        return false;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailIsValid = validateUser(data.email);
    const passIsValid = true;
    if(!emailIsValid && !passIsValid) {
        alert('Los datos son incorrectos')
        return 
    } 
    alert(`Sus datos son: email: ${data.email} y password: ${data.password} `);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="userEmail"
          onChange={handleChange}
        //   onKeyDown={handleKeyDown}
        ></input>
        <input
          type="text"
          name="userPassword"
          onChange={(e) => {setData({...data, password:e.target.value})}}
        ></input>
        <button>Ingresar</button>
      </form>
    </div>
  );
};

export default Form;
