import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useState, useEffect } from 'react'
import { Weather } from '../Weather/Weather'

export function City({ id }) {
  const [citys, setCitys] = useState([])
  const [cityId, setCityId] = useState('')
  const statesId = id

  useEffect(() => {
    fetch(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${statesId}/municipios`,
    )
      .then((response) => response.json())
      .then((data) => {
        setCitys(data)
      })
  }, [statesId])

  return (
    <div>
      <FormControl required sx={{ m: 1, minWidth: 230 }}>
        <InputLabel id="city">Selecione um município:</InputLabel>
        <Select
          labelId="city"
          id="city"
          label="city"
          onChange={(cityId) => setCityId(cityId.target.value)}
        >
          {citys.map((citys) => (
            <MenuItem value={citys.id}>{citys.nome}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Weather id={cityId}></Weather>
    </div>
  )
}
