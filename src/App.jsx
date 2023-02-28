import './App.css'
import {useState} from 'react'


function App() {

  // const [likes, setLikes] = useState(0);

  const [state, setState] = useState({
    likes: 0,
    vistas: 0
    });


  return (
    <div className="App">
      {/* <h1>Primer ejemplo</h1>
      <h2>Tus likes son: {likes}</h2>
      <button onClick={ ()=> setLikes(likes+1) }>Aumentar likes</button> */}

      <h1>Segundo ejemplo</h1>
      <h2>Tus likes son:{state.likes}</h2>
      <h2>Tus vistas son: {state.vistas}</h2>
      <button onClick={ ()=> setState(prev => ({...prev, likes: likes+1, vistas: vistas+1}))}>Aumentar likes</button>
    </div>
  )
}

export default App
