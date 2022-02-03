import { useState, useEffect } from "react";
import { City } from "../City/City";
export function State() {
  const [states, setStates] = useState([]);
  const [statesId, setStatesId] = useState("");
  console.log(statesId);
  useEffect(() => {
    fetch(
      "https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome"
    )
      .then((response) => response.json())
      .then((data) => {
        setStates(data);
      });
  }, []);

  return (
    <div>
      <label for="state">Selecione o estado: </label>
      <select id="state" onChange={(stateId) => setStatesId(stateId.target.value)}>
      <option>Selecione um estado</option>
        {states.map((states) => (
          <option key={states.id} value={states.id}>
            {states.nome}
          </option>
        ))}
      </select>
      <City id={statesId}></City>
    </div>
  );
}
