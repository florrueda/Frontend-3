import React, {useState, useEffect} from 'react';

const Counter = () => {

    const [counter, setCounter] = useState(0);
    const[nombre, setNombre] = useState("");
    const[apellido, setApellido] = useState("")

    useEffect(() => {
        setCounter(10)
        console.log("Me ejecuto");
    }, [counter]);
    
    console.log("estoy debajo del efecto");
    
    return (
        <div>
            <h1>Contador {counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>sumar</button>
            <button onClick={() => setCounter(counter - 1)}>restar</button>
            <button onClick={() => setNombre("pepito")}>{nombre}</button>
            <button onClick={() => setApellido("lopez")}>{apellido}</button>
        </div>
    );
}

export default Counter;
