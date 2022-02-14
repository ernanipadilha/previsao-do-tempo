import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import Image from "mui-image";
import "./Weather.css";

export function Weather({ id }) {
  const [days, setDays] = useState([]);
  const cityId = id;
  console.log(days);
  useEffect(() => {
    fetch(`https://apiprevmet3.inmet.gov.br/previsao/${cityId}`)
      .then((res) => res.json())
      .then((data) => {
        const days = data[cityId];
        const daysArray = Object.keys(days).map((day) => ({
          data: day,
          ...days[day],
        }));

        setDays(daysArray);
      });
  }, [cityId]);

  return (
    <main>
      {days.map((day) => (
        <Box className="card" sx={{ width: 350, height: 450 }}>
          
            <h2>
              {day?.manha?.entidade || day.entidade} <br />
              {day?.manha?.dia_semana || day.dia_semana} <br />
              {day.data}
            </h2>
            <div className="weather-card">
              <Image
                className="icon-temp"
                height="50%"
                width="50%"
                showLoading={true}
                src={day?.manha?.icone || day.icone}
              ></Image>
              <div>
                <h3>Temperatura máxima:</h3>{" "}
                <h4>{day?.manha?.temp_max || day.temp_max}ºC</h4>
                <h3>Temperatura mínima:</h3>{" "}
                <h4>{day?.manha?.temp_min || day.temp_min}ºC</h4>
                <br />
              </div>
            </div>
            Intensidade do vento: {day?.manha?.int_vento || day.int_vento}
            <br />
            Resumo do dia: {day?.manha?.resumo || day.resumo} <br />
            Estação do ano: {day?.manha?.estacao || day.estacao}
       
        </Box>
        /* <p>
            {JSON.stringify(day?.manha?.uf || day.uf)}
            <br />
            {JSON.stringify(day.tarde || day.dia_semana)}
            <br />
            {JSON.stringify(day.noite || day.estacao)}
          </p>
          <hr /> */
      ))}
    </main>
  );
}
