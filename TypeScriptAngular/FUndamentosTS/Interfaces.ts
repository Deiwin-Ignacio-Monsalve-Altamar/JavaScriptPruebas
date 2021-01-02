type Dni = number;

interface Persona {
  //type elvis sing
  altura?: number;
  edad: number;
  nombre: string;
  apellido: string;
  dni: Dni;
}

const persona: Persona = {
  altura: 1.69,
  edad: 27,
  nombre: "Alan",
  apellido: "Vvielo",
  dni: 3330303,
};
