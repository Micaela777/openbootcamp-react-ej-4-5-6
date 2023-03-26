import React, { useState, useEffect } from 'react';
import { Persona } from '../../models/persona.class.js'

export const ComponenteFuncion = () => {

    const persona = new Persona(new Date(), "Micaela", "Medina", 0)

    const [datos, setdatos] = useState(persona);

    const modificarDatos = () => {
        setdatos((prevState) => {
            const nuevaEdad = prevState.edad++
            return{
                ...prevState,
                fecha: new Date(),
                edad: nuevaEdad
            }
        })
    }

    useEffect(() => {
         setInterval (
            () => modificarDatos(), 1000
         );
    }, []);


    return (
        <div>
            <h2>Hora Actual:{datos.fecha.toLocaleTimeString()}</h2>
             <h3>{datos.nombre} {datos.apellido}</h3>
             <h1>Edad: {datos.edad}</h1>
        </div>
    );
}


