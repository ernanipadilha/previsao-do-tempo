import { Paper } from '@mui/material'
import { Box } from '@mui/system'
import { useState, useEffect } from 'react'
import Image from 'mui-image'
import './Weather.css'

const style = { paper: { m: 1 } }
export function Weather({ id }) {
  const [days, setDays] = useState([])
  const cityId = id
  console.log(days)
  useEffect(() => {
    fetch(`https://apiprevmet3.inmet.gov.br/previsao/${cityId}`)
      .then((res) => res.json())
      .then((data) => {
        const days = data[cityId]
        const daysArray = Object.keys(days).map((day) => ({
          data: day,
          ...days[day],
        }))

        setDays(daysArray)
      })
  }, [cityId])

  return (
    <main>
      {days.map((day) => (
        <div className="temp">
          <Box
            className="card"
            sx={{
              width: 360,
              height: 300,
            }}
          >
            <Paper className="resume" elevation={3} sx={style.paper}>
              {day.data} - {day?.manha?.entidade || day.entidade}
              <Image
                className="icon-temp"
                shift="center"
                fit="contain"
                width="40%"
                heigth="30%"
                src={day?.manha?.icone || day.icone}
              ></Image>
              Temperatura máxima: {day?.manha?.temp_max || day.temp_max}ºC{' '}
              <br />
              Temperatura mínima: {day?.manha?.temp_min || day.temp_min}ºC{' '}
              <br />
              Intensidade do vento: {day?.manha?.int_vento ||
                day.int_vento}{' '}
              <br />
              Resumo do dia: {day?.manha?.resumo || day.resumo} <br />
              Estação do ano: {day?.manha?.estacao || day.estacao}
            </Paper>
          </Box>
          {/* <p>
            {JSON.stringify(day?.manha?.uf || day.uf)}
            <br />
            {JSON.stringify(day.tarde || day.dia_semana)}
            <br />
            {JSON.stringify(day.noite || day.estacao)}
          </p>
          <hr /> */}
        </div>
      ))}
    </main>
  )
}
