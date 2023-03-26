export class Persona {
    fecha;
    nombre = '';
    apellido = '';
    edad = 0;

    constructor(fecha, nombre, apellido, edad){
        this.fecha = fecha;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    };
}