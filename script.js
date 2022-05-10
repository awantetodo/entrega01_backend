//definicion de clase, propiedades en constructor y definicion de funciones
class Usuario {
    constructor(Nombre, Apellido, Mascotas, Libros) {
        this.Nombre = "Elon";
        this.Apellido = "Musk";
        this.Mascotas = ['perro', 'gato'];
        this.Libros = [
            { nombre: 'El señor de las moscas', autor: 'William Golding' },
            { nombre: 'Fundacion', autor: 'Isaac Asimov' }];
    }
    countMascotas() {
        return this.Mascotas.length;
    }
    getFullName() {
        return this.Nombre + " " + this.Apellido;
    }
    addMascota(NombreMascota) {
        this.Mascotas.push(NombreMascota);
    }
    addBook(nombre, autor) {
        this.Libros.push({ nombre: nombre, autor: autor })
        return this.Libros;
    }
    getBookNames() {
        var nombres = [];
        this.Libros.forEach((value, index) => {
            nombres.push(value.nombre);
        });
        return nombres;
    }
}

var usuario = new Usuario();
console.log(usuario.getFullName());
usuario.addMascota("pepina");
console.log(usuario.countMascotas());
console.log(usuario.addBook("HP", "Lovecraft"));
console.log(usuario.getBookNames());