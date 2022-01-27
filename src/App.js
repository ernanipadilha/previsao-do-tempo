import React, { useState, useEffect } from 'react'
//https://apiprevmet3.inmet.gov.br/previsao/capitais

function App(props) {
  const [estados, setEstados] = useState([])
  //const []
  useEffect(() => {
    fetch(
      'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome',
    )
      .then((response) => response.json())
      .then((data) => {
        setEstados(data)
      })
  }, [])

  function getEstado(e) {
    const estadoId = e
    console.log(estadoId.value)
    return estadoId.value
  }

  function getMunicipio(e) {
    const estadoId = getEstado(e)
    fetch(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoId}/municipios`,
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
      })
  }

  return (
    <div className="App">
      <label for="estado">Selecione o estado: </label>
      <select onChange={(e) => getEstado({ value: e.target.value })}>
        {estados.map((estados) => (
          <option key={estados.id} value={estados.id}>
            {estados.nome}
          </option>
        ))}
      </select>
      <label for="municipio">Selecione o municipio: </label>
      <select>
        {estados.map((estados) => (
          <option key={estados.id} value={estados.id}>
            {estados.nome}
          </option>
        ))}
      </select>
    </div>
  )
}

export default App
