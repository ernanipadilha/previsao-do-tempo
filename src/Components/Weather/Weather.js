import { useState, useEffect } from "react";

export function Weather({ id }) {
  const [days, setDays] = useState([]);
  const cityId = id;
 console.log(days)
  useEffect(() => {
    fetch(`https://apiprevmet3.inmet.gov.br/previsao/${cityId}`)
    .then(res => res.json())
    .then((data) => {
      const days = data[cityId];
      const daysArray = Object.keys(days).map((day) => ({
        data: day,
        ...days[day]
      }));
      
      setDays(daysArray);
      });
  }, [cityId]);

  return (
    <main>
    {days.map((day) => (
        <div>
          <p>{day.data} <br />
          
          {JSON.stringify(day?.manha?.uf || day.uf)}<br />
          {JSON.stringify(day.tarde||day.dia_semana)}<br />
          {JSON.stringify(day.noite||day.estacao)}
          </p>
          <hr />
        </div>
      ))}
    </main>
  );
}
