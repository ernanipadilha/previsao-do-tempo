import './App.css'
import { Box } from '@mui/material'
import { State } from './Components/State/State'
//https://apiprevmet3.inmet.gov.br/previsao/5300108

function App() {
  return (
    <div className="App">
      <h1>Previsão do Tempo ⛅</h1>
      <Box className="teste">
        <State></State>
      </Box>
    </div>
  )
}

export default App
