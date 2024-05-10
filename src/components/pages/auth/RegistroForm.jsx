import React, { useState } from "react";

function RegistroForm({ agregarRegistro }) {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [edad, setEdad] = useState("");
    const [email, setEmail] = useState("");
    const [nota, setNota] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!nombre || !apellido || !edad || !email || !nota) return;
        agregarRegistro({ nombre, apellido, edad, email, nota });
        setNombre("");
        setApellido("");
        setEdad("");
        setEmail("");
        setNota("");
    };

    return (
        <form className="briem-hand" onSubmit={handleSubmit}>
            <h1>Formulario</h1>
            <label>
                Nombre:
                <input
                    type="text"
                    class="form-control"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
            </label>
            <label>
                Apellido:
                <input
                    type="text"
                    class="form-control"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                />
            </label>
            <label>
                Edad:
                <input
                    type="number"
                    class="form-control"
                    value={edad}
                    onChange={(e) => setEdad(e.target.value)}
                />
            </label>
            <label>
                Correo Electrónico:
                <input
                    type="email"
                    class="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <label >
                Nota del Curso:
                <input
                    type="number"
                    class="form-control"
                    value={nota}
                    onChange={(e) => setNota(e.target.value)}
                />
            </label>
            <div className="col-12">
                <button type="submit" className="btn btn-secondary briem-hand" >Registrar</button>
            </div>

        </form>
    );
}

export default RegistroForm;
