//Esta es la clase alumno
class Alumno {
    constructor() {
        this.nombre = '';
        this.apellido = '';
        this.edad = 0;
    }

    setNombre(pNombre) {
        // Lógica secuencial para establecer el nombre
        this.nombre = pNombre;
    }

    setEdad(pEdad) {
        // Lógica secuencial para establecer la edad
        this.edad = pEdad;
    }

    toString() {
        // Lógica secuencial para devolver la representación en cadena del objeto Alumno
        return `Nombre: ${this.nombre}, Apellido: ${this.apellido}, Edad: ${this.edad}`;
    }
}

// Ejemplo de uso
const alumno = new Alumno();
alumno.setNombre('Juan');
alumno.setEdad(20);
console.log(alumno.toString()); // Salida: Nombre: Juan, Apellido: , Edad: 20
