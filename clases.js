// CLASES

class Usuario {
    constructor(nombre, apellido, libros = [], mascotas = []) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.contador = 0;
        this.libros = libros;
        this.mascotas = mascotas

    }

    getFullName() {
        console.log(`El nombre completo del usuario es ${this.apellido}, ${this.nombre}`)
    }

    addMascotas(nuevaMascota) {
        this.mascotas.push(nuevaMascota)
        console.log(`El usuario tiene una nueva mascota ${nuevaMascota}`)
    }

    countMascotas() {
        let totalMascotas = this.mascotas.length()
        console.log(`El usuario tiene ${totalMascotas} mascotas`)
    }

    addBook(nombre, autor) {
        this.libros.push({ nombre: nombre, autor: autor })
        console.log(`El usuario agrego el libro ${nombre} del autor ${autor}`)
    }

    getBookNames() {
        this.libros.map(libros => libros.nombre)
    }

}

const usuario = new Usuario("Micaela", "Torres", [{ nombre: "Muchas vidas, muchos maestros", autor: "Brian Weiss" }, { nombre: "Hasta que te vuelva a ver", autor: "Andrea Milano" }], ["perro", "gato", "conejo"])
const usuario2 = new Usuario("Brisa", "Perez", [{ nombre: "Indias blancas", autor: "Florencia Bonelli" }], ["perro"])

//getFullName

console.log(usuario.getFullName())
console.log(usuario2.getFullName())

//addMascotas

usuario.addMascotas("conejo")
usuario.addMascotas("oso")
usuario2.addMascotas("gato")

//countMascotas

console.log(usuario.mascotas.length)
console.log(usuario2.mascotas.length)

//addBook

usuario.addBook("El tiempo de las moscas", "Claudia Piñeiro")
usuario2.addBook("violeta", "Isabel Allende")
