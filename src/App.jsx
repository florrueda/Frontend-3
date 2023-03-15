import { useState } from 'react'
import './App.css'
import Counter from './Components/Counter/Counter'

function App() {

  const [show, setShow] = useState(false);

  return (
    <div className="App">
    <button onClick={()=>setShow(true)}>Montar y desmontar componente</button>
      {
        show ? <Counter></Counter> : <h1>No esta</h1>
      }

    </div>
  )
}

export default App
