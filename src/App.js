import React, { useState, useEffect } from 'react'
//https://apiprevmet3.inmet.gov.br/previsao/capitais

function App(props) {
  const [estados, setEstados] = useState([])
  const [municipios, setMunicipios] = useState([])
  const estadoId = getEstado()
  console.log(estadoId)

  useEffect(() => {
    fetch(
      'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome',
    )
      .then((response) => response.json())
      .then((data) => {
        setEstados(data)
      })

    fetch(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${
        estadoId || 12
      }/municipios`,
    )
      .then((response) => response.json())
      .then((data) => {
        setMunicipios(data)
      })
  }, [estadoId])

  function getEstado(e) {
    let estadoId = e
    //console.log(estadoId)
    return estadoId
  }

  function getMunicipio(e) {
    //const estadoId = getEstado(e)
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
      <select
        id="muninipio"
        onChange={(m) => getMunicipio({ value: m.target.value })}
      >
        {municipios.map((municipios) => (
          <option key={municipios.id} value={municipios.id}>
            {municipios.nome}
          </option>
        ))}
      </select>
    </div>
  )
}

export default App
