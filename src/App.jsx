import './App.css'
// import Productos from './Productos'
import ProductosList from './ProductosList'
// import {useState} from 'react'
// import CustomCss from './CustomCss'
// import Home from './home'
// import Inmutable from './Inmutable'

// const disciplinas = [ "Banco de datos", "Frontend", "Backend", "Metodologias agiles", "Infraestructura"]

function App() {

  // const [modo, setModo] = useState("light");
  // const [isDark, setIsDark] = useState(true)

  // const cambiarModoOscuro =() => {
  //   setModo("dark")
  // }

  // const cambiarModo =() => {
  //   setIsDark(!isDark)
  // }

  return (
    <div className="App">
    {/* <h2>Lista sin map</h2>
      <ul>
        <li>{disciplinas[0]}</li>
        <li>{disciplinas[1]}</li>
        <li>{disciplinas[2]}</li>
        <li>{disciplinas[3]}</li>
        <li>{disciplinas[4]}</li>
      </ul>
      <h2>Lista con map</h2>
      <ul>
        {disciplinas.map( (element, index) => <li key={index}>{element}</li> )}
      </ul> */}
{/* 
      <Inmutable></Inmutable>
      <CustomCss></CustomCss>
      <Home isDark={isDark}></Home>
      <button onClick={cambiarModo}>Cambiar modo</button> */}
      {/* <Productos></Productos> */}
      <ProductosList></ProductosList>
    </div>
  )
}

export default App
