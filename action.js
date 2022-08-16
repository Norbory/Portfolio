let fondo0 = document.querySelector(".info .carta2");
let fondo1 = document.querySelector(".info .carta4");
let fondo2 = document.querySelector(".info .carta1");
let fondo3 = document.querySelector(".info .carta3");
let c = 0;
let i = 0;
let p = 0;
let s = 0;

const Cato = {
    grado : "Estudios en Ingenieria Mecatronica",
    ciclo : "Noveno ciclo",
}
const lengua = {
    ingles: "Ingles - Nivel Avanzado",
    portugues: "Portugues - Estudios Independientes",
}
const programa = [
    "Programacion en C: Intermedia",
    "Programacion en C++: Intermedia",
    "Programacion en Python: Intermedia",
    "Programacion en Javascript: Basica",
    "Programacion en SQL: Intermedia",
    "Programacion en Kotlin: Basica",
    "Programacion en HTML y CSS: Intermedia",
];
const software = [
    "Autocad: Intermedio",
    "Inventor: Intermedio",
    "Codesys: Intermedio",
    "Labview: Intermedio",
    "Matlab: Intermedio",
    "Visual Studio Code: Intermedio",
    "MS Office: Intermedio",
    "Fusion 360: Intermedio",
    "Android Studio: Basico",
    "Arduino IDE: Basico",
];
function estudios() {
    if(c==0){
        let newh3 = document.createElement("h3");
        let newh5 = document.createElement("h5");
        var newContent0 = document.createTextNode(Cato.grado);
        var newContent1 = document.createTextNode(Cato.ciclo);
        newh3.appendChild(newContent0);
        newh5.appendChild(newContent1);
        fondo0.appendChild(newh3);
        fondo0.appendChild(newh5);
        c++;
    }
}

function idiomas() {
    if(i==0){
        let newh51 = document.createElement("h5");
        let newh52 = document.createElement("h5");
        var newContent0 = document.createTextNode(lengua.ingles);
        var newContent1 = document.createTextNode(lengua.portugues);
        newh51.appendChild(newContent0);
        newh52.appendChild(newContent1);
        fondo1.appendChild(newh51);
        fondo1.appendChild(newh52);
        i++;
    }
}

function programacion(){
    if(p==0){
        for (let i=0;i<programa.length;i++){
            let newh5 = document.createElement("h5");
            var newContent = document.createTextNode(programa[i]);
            newh5.appendChild(newContent);
            fondo2.appendChild(newh5);
        }
        p++;
    }
}

function softwares(){
    if(s==0){
        for (let i=0;i<software.length;i++){
            let newh5 = document.createElement("h5");
            var newContent = document.createTextNode(software[i]);
            newh5.appendChild(newContent);
            fondo3.appendChild(newh5);
        }
        s++;
    }
}