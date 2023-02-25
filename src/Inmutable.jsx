import React, {useState} from 'react'


const Inmutable = () => {

    let contadorInicial = 0

    const [contador, setContador] = useState(contadorInicial);

    let sumar = () => {
        setContador(contador+1)
    }

    let restar = () => {
        setContador(contador-1)
    }

  return (
    <>
        <h1>Este es el componente inmutable</h1>
        <h2>Contador: {contador}</h2>
        <button onClick={sumar}>Sumar</button>
        <button onClick={restar}>Restar</button>
    </>
  )
}

export default Inmutable;