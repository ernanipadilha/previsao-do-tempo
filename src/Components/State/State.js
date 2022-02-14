import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useState, useEffect } from 'react'
import { City } from '../City/City'
export function State() {
  const [states, setStates] = useState([])
  const [statesId, setStatesId] = useState('')

  useEffect(() => {
    fetch(
      'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome',
    )
      .then((response) => response.json())
      .then((data) => {
        setStates(data)
      })
  }, [])

  return (
    <div>
      <FormControl required sx={{ m: 1, minWidth: 230}}>
        <InputLabel id="state" >Selecione um estado:</InputLabel>
        <Select
          labelId="state"
          id="state"
          label="state"
          onChange={(stateId) => setStatesId(stateId.target.value)}
        >
          {states.map((states) => (
            <MenuItem value={states.id}>{states.nome}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <City id={statesId}></City>
    </div>
  )
}
