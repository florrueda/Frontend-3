import React, {useState} from 'react';

const FormMesaTrabajo = () => {

    const [data, setData] = useState({
        nombreCompleto: '',
        edad:'',
        pokemonFavorito:''});

    const handleChangeNombre = (e) => {
        setData({...data, nombreCompleto: e.target.value})
    }
    const handleChangeEdad = (e) => {
        setData({...data, edad: e.target.value})
    }
    const handleChangePokemon = (e) => {
        setData({...data, pokemonFavorito: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Sus datos son: 
                Nombre completo: ${data.nombreCompleto}, 
                Edad: ${data.edad}, 
                Pokemon favorito: ${data.pokemonFavorito}`);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h2>Registro</h2>
            <div>
                <input type='text' placeholder='Nombre Completo' onChange={handleChangeNombre}></input>
            </div>
            <div>
                <input type='text' placeholder='Edad' onChange={handleChangeEdad}></input>
            </div>
            <div>
                <input type='text' placeholder='Pokemon favorito' onChange={handleChangePokemon}></input>
            </div>
            <div style={{margin: '20px'}}>
                <button>Registrarse</button>
            </div>
                
            </form>
        </div>
    );
}

export default FormMesaTrabajo;
