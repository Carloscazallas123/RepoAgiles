
class Navio {
    constructor(nombre,Capitan){
    this.nombre=nombre;
    this.Capitan=Capitan;
    this.Duracion=100;
    }
}

class Bombardero extends Navio{
    constructor(nombre,Capitan){
    super(nombre,Capitan);
    this.Potencia=30+Math.random()*30;
    }
}
class Barco extends Navio{
    constructor(nombre,Capitan){
    super(nombre,Capitan);
    this.Cantidad=2+Math.random()*3;
    this.Tripulacion=[];
    }
}

class Pirata {
    constructor(nombre){
    this.nombre=nombre;
    }
}

class Pistolero extends Pirata{
    constructor(nombre){
    super(nombre);
    this.Ataque=1+Math.random()*9;
    this.Municion=6+Math.random()*4;
    }
}

class Artillero extends Pirata{
    constructor(nombre){
    super(nombre);
    this.Ataque=10+Math.random()*10;
    this.Municion=3+Math.random()*3;
    }
}

class Cañonero extends Pirata{
    constructor(nombre){
    super(nombre);
    this.Ataque=20+Math.random()*20;
    this.Municion=1+Math.random()*2;
    }
}

//Rellenar Array de los Pistoleros
var ListaPiratas=[
new Artillero("Golderos"),
new Artillero ("Jose Maria"),
new Artillero ("Sergio"),
new Cañonero ("Palacios"),
new Cañonero ("Carlos"),
new Cañonero ("Ronaldo"),
new Pistolero ("Juan"),
new Pistolero ("Messi"),
new Pistolero ("Doue")
];

function mostrarPiratas(){
var Mostrarr=" ";
for(var i=0;i<ListaPiratas.length;i++){
    console.log("____Pirata Nº" + (i+1) + " : " + ListaPiratas[i].nombre);
        Mostrarr+="__Pirata Nº" + (i+1) + ": " + ListaPiratas[i].nombre + "\n";
    }
    document.getElementById("Mostrar").innerText=Mostrarr;
}

function crearPirata(){
let Nombre=null;
let tipo= prompt("¿Que tipo de Pirata es?");
switch(tipo){
    case "Artillero":
    Nombre=prompt("Introduce el nombre");
    ListaPiratas.push(new Artillero(Nombre));
    console.log("Artillero añadido: " + Nombre);
    break;

    case "Cañonero":
    Nombre=prompt("Introduce el nombre");
    ListaPiratas.push(new Cañonero(Nombre));
    console.log("Cañonero añadido: " + Nombre);
    break;

    case "Pistolero":
    Nombre=prompt("Introduce el nombre");
    ListaPiratas.push(new Cañonero(Nombre));
    console.log("Nañonero añadido: " + Nombre);
    break;

    default:
    console.log("Error, vuelve a intentarlo");
    break;

}
}

function eliminarPirata(){
    let posicion=prompt("Elije la posicion que desea eliminar");
    for (let e=0;e<ListaPiratas.length;e++){
    if((e+1)==posicion){
    ListaPiratas.splice(e,1);
    console.log("Pirata Eliminado");
    }
    }
}

function batalla(){

let Barco1= crearBarco();
let Barco2= crearBarco();
console.log(Barco1.Duracion);
let ataque=0;
do{
    //Turno del Barco1
    ataque=Math.floor(atacar(Barco1));
    Barco2.Duracion= Barco2.Duracion - ataque;
    console.log(Barco1.nombre + " Ha atacado a " + Barco2.nombre + " con " + ataque);
    if(Barco2.Duracion>0){
    //Turno del Barco2
    ataque=Math.floor(atacar(Barco2));
    Barco1.Duracion= Barco1.Duracion - ataque;
    console.log(Barco2.nombre + " Ha atacado a " + Barco1.nombre + " con " + ataque);
    }

} while (Barco1.Duracion>0 && Barco2.Duracion>0);
    if(Barco2.Duracion<0){
    console.log(Barco1.nombre + "Ha ganado");
    } else {
    console.log(Barco2.nombre + " Ha ganado");
    }
    
}

//Funcion de ataque
function atacar(Nave) {
    let daño=0;
    if (Nave instanceof(Bombardero)){
        daño=Nave.Potencia;
     } else if ((Nave instanceof(Barco))) {
        for(let i=0;i<Nave.Tripulacion.length;i++){
            let dispara=Math.floor(Math.random()*2);
            if(dispara==0){
                let Miembro=Nave.Tripulacion[i];
                    if(Miembro.Municion>0){
                    daño=daño+Miembro.Ataque;
                } else {
                //nada
             }
            }
            
               
            }
        } 
        return daño;   
     }

//Funcion para crear el Barco
function crearBarco(){
    let Navio=null;
    let nombre=null;
    let decision=Math.floor(1+Math.random()*2);
    switch(decision){
        case 1: //Bombardero
        nombre=prompt("Intoduce el nombre");
        Navio=new Bombardero(nombre,"Jose");
        console.log("Navio Creado: " + Navio.nombre);
        break;

        case 2: //Barco
        nombre=prompt("Intoduce el nombre");
        Navio=new Barco(nombre,"Mario");
        for(let i=0;i<Navio.Cantidad;i++){
        let alea=Math.floor(Math.random()*ListaPiratas.length);
        Navio.Tripulacion.push(ListaPiratas[alea]);
        ListaPiratas.splice(alea,1);
        }
        console.log(Navio.Tripulacion);
        break;
        default:
        console.log("Error");
        break;
    }
    return Navio;
}

//Generar Tripulantes
function generarTripulantes(){
    let Tripulantes=[];
let cantidad=2+Math.random()*5;
    for (let i=0;i<cantidad;i++){
    Tripulantes.push(ListaPiratas[Math.random()*ListaPiratas.length]);
    }

    return Tripulantes;
}



