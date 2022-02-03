import { useState, useEffect } from "react";
import { Weather } from "../Weather/Weather";

export function City({ id }) {
  const [citys, setCitys] = useState([]);
  const [cityId, setCityId] = useState("");
  const statesId = id;

  useEffect(() => {
    fetch(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${statesId}/municipios`
    )
      .then((response) => response.json())
      .then((data) => {
        setCitys(data);
      });
  }, [statesId]);

  return (
    <div>
      <label for="city">Selecione o municipio: </label>
      <select id="city" onChange={(cityId) => setCityId(cityId.target.value)}>
        <option>Selecione um municipio</option>
        {citys.map((citys) => (
          <option key={citys.id} value={citys.id}>
            {citys.nome}
          </option>
        ))}
      </select>
      <Weather id={cityId}></Weather>
    </div>
  );
}