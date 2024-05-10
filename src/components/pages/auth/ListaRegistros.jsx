import React from "react";

function ListaRegistros({ registros }) {
  return (
    <div>
      <h2 className="poetsen-one-regular">Registros</h2>
      <ul>
        {registros.map((registro, index) => (
          <li className="briem-hand" key={index}>
            Nombre: {registro.nombre}, Apellido: {registro.apellido}, Edad:{" "}
            {registro.edad}, Email: {registro.email}, Nota del Curso:{" "}
            {registro.nota}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaRegistros;
