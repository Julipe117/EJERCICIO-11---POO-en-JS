class Estudiante {
    constructor(nombre, asignatura){
        this._nombre = nombre;
        this._asignatura = [" Javascript", " HTML", " CSS"];
    }

    obtenDatos(){
        console.log(`Nombre: ${this._nombre} Asignaturas:${this._asignatura}`)
    }
}

let estudiante_1 = new Estudiante("Sergio")
estudiante_1.obtenDatos();
console.log(estudiante_1);