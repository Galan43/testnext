// Registro.js
"use client"
import React, { useState } from "react";

const Registro = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = () => {
        console.log(`Registro con correo: ${email} y contraseña: ${password}`);
    };

    return (
        <div>
            <h1>Registro</h1>
            <form>
                <label htmlFor="email">Correo:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br /><br />
                <label htmlFor="password">Contraseña:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br /><br />
                <button type="button" onClick={handleRegister}>Registrar</button>
                <br />
                <button>Cerrar</button>
                
            </form>
        </div>
    );
};

export default Registro;
