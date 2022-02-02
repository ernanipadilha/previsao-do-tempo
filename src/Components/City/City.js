import { useState, useEffect } from "react";

export function City({id}) {
  const [citys, setCitys] = useState([]);
  const statesId = id||12;
  console.log(statesId)
  useEffect(() => {
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${statesId}/municipios`)
      .then((response) => response.json())
      .then((data) => {
        setCitys(data);
      });
  }, [statesId]);

  function getMunicipio(m) {
    let municipioId = m;
    console.log(municipioId)
    return municipioId;
  }

  return (
    <div>
      <label for="municipio">Selecione o municipio: </label>
<select
  id="municipio"
  onChange={(m) => getMunicipio( m.target.value )}
>
  {citys.map((citys) => (
    <option key={citys.id} value={citys.id}>
      {citys.nome}
    </option>
  ))}
</select>
    </div>
  );
}


