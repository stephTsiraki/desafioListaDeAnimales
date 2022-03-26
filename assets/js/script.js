//Lectura del formulario
let formulario = document.querySelector("form");
let registrar = (event) => {
  event.preventDefault();
  let nombre = document.getElementById("propietario").value;
  let direccion = document.getElementById("direccion").value;
  let telefono = document.getElementById("telefono").value;
  let nombreM = document.getElementById("nombreMascota").value;
  let tipo = document.getElementById("tipo").value;
  let enfermedad = document.getElementById("enfermedad").value;
  if (tipo == "perro") {
    let perro = new Perro(
        nombre,
        direccion,
        telefono,
        tipo,
        nombreM,
        enfermedad
      );
    resultado.innerHTML = ` <li>${perro.datosPropietario()} </li> <br> <li> ${perro.get_tipo()}
    ${perro.get_nombreM()} ${perro.get_enfermedad()}<li>`;
  } else if (tipo == "gato") {
    let gato = new Gato(
        nombre,
        direccion,
        telefono,
        tipo,
        nombreM,
        enfermedad
      );
    resultado.innerHTML = ` <li>${gato.datosPropietario()} </li> <br> <li> ${gato.get_tipo()}
    ${gato.get_nombreM()} ${gato.get_enfermedad()}<li>`;  
  } else {
    let conejo = new Conejo(
        nombre,
        direccion,
        telefono,
        tipo,
        nombreM,
        enfermedad
      );
    resultado.innerHTML = ` <li>${conejo.datosPropietario()} </li> <br> <li> ${conejo.get_tipo()}
    ${conejo.get_nombreM()} ${conejo.get_enfermedad()}<li>`; 
  }
};
formulario.addEventListener("submit", registrar);

//Clases en ES6
class Propietario {
  constructor(nombre, direccion, telefono) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
  }
  datosPropietario() {
    return ` El nombre del dueño es: ${this.nombre}.  El domicilio es: ${this.direccion}, y el número telefónico de contacto: ${this.telefono}.`;
  }
}
class Animal extends Propietario {
  constructor(nombre, direccion, telefono, tipo) {
    super(nombre, direccion, telefono);
    this.tipo = tipo;
  }
  get_tipo() {
    return ` El tipo de animal es un: ${this.tipo}.`;
  }
}

/* Había realizado una clase Mascota, pero en las instrucciones del desafío 
mencionan que se debe inicializar la instancia con el nombre del tipo de mascota: 
Perro, Gato o Conejo. 

class Mascota extends Animal {
  constructor(nombre, direccion, telefono, tipo, nombreM, enfermedad) {
    super(nombre, direccion, telefono, tipo);
    this._nombreM = nombreM;
    this._enfermedad = enfermedad;
  }
  get_nombreM() {
    return `Mientras que el nombre de la mascota es: ${this._nombreM}.`;
  }
  set nombreM(nuevoNombreM) {
    this._nombreM = nombreM;
  }
  get_enfermedad() {
    return `Y la enfermedad es: ${this._enfermedad}.`;
  }
  set enfermedad(nuevaEnfermedad) {
    this._enfermedad = enfermedad;
  }
}
*/

class Gato extends Animal {
  constructor(nombre, direccion, telefono, tipo, nombreM, enfermedad) {
    super(nombre, direccion, telefono, tipo);
    this._nombreM = nombreM;
    this._enfermedad = enfermedad;
  }
  get_nombreM() {
    return `Mientras que el nombre de la mascota es: ${this._nombreM}.`;
  }
  set nombreM(nuevoNombreM) {
    this._nombreM = nombreM;
  }
  get nombreM() {
    return `Mientras que el nombre de la mascota es: ${this._nombreM}.`;
  }
  get_enfermedad() {
    return `Y la enfermedad es: ${this._enfermedad}.`;
  }
  set enfermedad(nuevaEnfermedad) {
    this._enfermedad = enfermedad;
  }
  get enfermedad() {
    return `Y la enfermedad es: ${this._enfermedad}.`;
  }
}

class Perro extends Animal {
  constructor(nombre, direccion, telefono, tipo, nombreM, enfermedad) {
    super(nombre, direccion, telefono, tipo);
    this._nombreM = nombreM;
    this._enfermedad = enfermedad;
  }
  get_nombreM() {
    return `Mientras que el nombre de la mascota es: ${this._nombreM}.`;
  }
  set nombreM(nuevoNombreM) {
    this._nombreM = nombreM;
  }
  get nombreM() {
    return `Mientras que el nombre de la mascota es: ${this._nombreM}.`;
  }
  get_enfermedad() {
    return `Y la enfermedad es: ${this._enfermedad}.`;
  }
  set enfermedad(nuevaEnfermedad) {
    this._enfermedad = enfermedad;
  }
  get enfermedad() {
    return `Y la enfermedad es: ${this._enfermedad}.`;
  }
}

class Conejo extends Animal {
  constructor(nombre, direccion, telefono, tipo, nombreM, enfermedad) {
    super(nombre, direccion, telefono, tipo);
    this._nombreM = nombreM;
    this._enfermedad = enfermedad;
  }
  get_nombreM() {
    return `Mientras que el nombre de la mascota es: ${this._nombreM}.`;
  }
  set nombreM(nuevoNombreM) {
    this._nombreM = nombreM;
  }
  get nombreM() {
    return `Mientras que el nombre de la mascota es: ${this._nombreM}.`;
  }
  get_enfermedad() {
    return `Y la enfermedad es: ${this._enfermedad}.`;
  }
  set enfermedad(nuevaEnfermedad) {
    this._enfermedad = enfermedad;
  }
  get enfermedad() {
    return `Y la enfermedad es: ${this._enfermedad}.`;
  }
}
