class Asignatura{

    constructor(nombre, alumnos){
        this.nombre = nombre
        this.alumnos = alumnos
        this.maximo = 10
    }

    modificarMaximo(maximo){
        this.maximo = maximo
    }

    agregarAlumno(alumno){
        this.alumnos.push(alumno)
    }

    eliminarAlumno(alumno){
        this.alumnos.splice(this.alumnos.indexOf(alumno), 1)
    }

    listar(){
        salida.innerHTML += `El nombre de la asignatura es ${this.nombre} y tiene los siguientes alumnos: ${this.alumnos}<br>`
    }

} 
const salida = document.querySelector("#salida")
const asignaturaSelected = document.querySelector("#asignaturaSelected")
const insertarAlumno = document.querySelector("#insertarAlumno")
const eliminarAlumno = document.querySelector("#eliminarAlumno")
const modificarMaximo = document.querySelector("#modificarMaximo")
const alumnoInput = document.querySelector("#alumnoInput")
const maximoInput = document.querySelector("#maximoInput")

const asignaturas = []
asignaturas.push( new Asignatura("Desarrollo Web entorno servidor", ["Antonio", "Pedro", "Juan"]) )
asignaturas.push( new Asignatura("Desarrollo Web entorno cliente", ["Antonio", "Pedro", "Juan"]) )
asignaturas.push( new Asignatura("Despliegue de aplicaciones web", ["Antonio", "Pedro", "Juan"]) )


asignaturaSelected.addEventListener("change", function() {
    asignaturas.forEach( asignatura => {
        if(asignatura.nombre == asignaturaSelected.value){
            asignatura.listar()
        }
    })
})

insertarAlumno.addEventListener("click", function() {
    let alumno = alumnoInput.value.trim()
    if (alumno.length > 0) {
        asignaturas.forEach( asignatura => {
            if(asignatura.nombre == asignaturaSelected.value){
                asignatura.agregarAlumno(alumno)
                salida.innerHTML = ''
                asignatura.listar()
            }
        })
        alumnoInput.value = ""
    }
})

eliminarAlumno.addEventListener("click", function() {
    let alumno = alumnoInput.value.trim()
    if (alumno.length > 0) {
        asignaturas.forEach( asignatura => {
            if(asignatura.nombre == asignaturaSelected.value){
                asignatura.eliminarAlumno(alumno)
                salida.innerHTML = ''
                asignatura.listar()
            }
        })
        alumnoInput.value = ""
    }
})

modificarMaximo.addEventListener("click", function() {
    let maximo = maximoInput.value.trim()
    if (maximo.length > 0) {
        asignaturas.forEach( asignatura => {
            if(asignatura.nombre == asignaturaSelected.value){
                asignatura.modificarMaximo(maximo)
            }
        })
        maximoInput.value = ""
    }
})

function rellenamosSelect(){
    asignaturaSelected.innerHTML += `<option value="0">Elige Asignatura</option>`
    asignaturas.forEach( asignatura => {
        asignaturaSelected.innerHTML += `<option value="${asignatura.nombre}">${asignatura.nombre}</option>`
    })
}
rellenamosSelect()

const asignaturaInput = document.querySelector("#asignaturaInput")
const nuevoAlumnoInput = document.querySelector("#nuevoAlumnoInput")
const nuevoMaximoInput = document.querySelector("#nuevoMaximoInput")
const nuevAsignatura = document.querySelector("#nuevAsignatura")

nuevAsignatura.addEventListener("click", function() {
    let asignatura = asignaturaInput.value.trim()
    let alumno = nuevoAlumnoInput.value.trim()
    let maximo = nuevoMaximoInput.value.trim()
    if (asignatura.length > 0 && alumno.length > 0) {
        asignaturas.push( new Asignatura(asignatura, [alumno]) )
        asignaturaInput.value = ""
        nuevoAlumnoInput.value = ""
        if(maximo.length > 0){
            asignaturas[asignaturas.length-1].modificarMaximo(maximo)
            nuevoMaximoInput.value = ""
        }
        asignaturaSelected.innerHTML = ''
        rellenamosSelect()
    }
})