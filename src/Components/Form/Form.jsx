import "./Form.css";
import {useState} from 'react'
import { Card } from "../Card/Card";

const Form = () => {

  const [user, setUser] = useState({
    email: "",
    password: "",
    rol: ""
  });

  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [isLogged, setIsLogged] = useState(false)

  const handleChange = (e, prop) => {
    setUser({...user, [prop]: e.target.value} )
  }

  console.log(user);

  const handleSubmit = (e) => {
    e.preventDefault();
    //validar que el email contenga un @ 
    const emailIsValid = user.email.includes('@');
    //Validar que el pass tenga por lo menos  4 caracteres
    const passwordIsValid = user.password.length > 3;
    
    if(!emailIsValid || !passwordIsValid) {
        // alert ("Los datos no son correctos")
        setError(true)
        if(!emailIsValid && !passwordIsValid) {
            setErrorMessage("El email y la contraseña es incorrecto")
        } else if(!emailIsValid) {
            setErrorMessage("El email es incorrecto")
        } else {
            setErrorMessage("La contraseña es incorrecta")
        }     
        
        return;
    }

    //El envio
    console.log("Se envio y los datos son:" , user);
    setIsLogged(true);
  }

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" name="email"  onChange={(e) => handleChange(e, "email")}/>
        {
            error && errorMessage.includes("El email es incorrecto")  && <span style={{color: "red" , fontSize: "0.7rem"}}>{errorMessage}</span>
        }
        <input type="text" name="password" onChange={(e) => handleChange(e, "password")} />
        {
            error && errorMessage.includes("La contraseña es incorrecta")  && <span style={{color: "red" , fontSize: "0.7rem"}}>{errorMessage}</span>
        }
        <select
          style={{
            width: "100%",
            height: "30px",
            fontSize: "0.9rem",
          }}
          onChange={(e) => handleChange(e, "rol")}
        >
        <option value="comprador" default>
            Seleccionar rol
          </option>
          <option value="vendedor">
            Vendedor
          </option>
          <option value="comprador">
            Comprador
          </option>
        </select>
        <button>Ingresar</button>
        {
            error && errorMessage.includes("El email y la contraseña es incorrecto") && <span style={{color: "red" , fontSize: "0.7rem"}}>{errorMessage}</span>
        }
      </form>
        {
            isLogged && <Card user={user}></Card>
        }
    </div>
  );
};

export default Form;
