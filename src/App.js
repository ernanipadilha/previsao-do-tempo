import './App.css'
import { State } from './Components/State/State'
//https://apiprevmet3.inmet.gov.br/previsao/5300108

function App() {
  return (
    <div className="App">
      <h1 className='title'>Previsão do Tempo ⛅</h1>
      
        <State></State>
      
    </div>
  )
}

export default App
