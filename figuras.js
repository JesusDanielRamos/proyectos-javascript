//codigo cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los Lados del cuadro miden: " + ladoCuadrado + "cm")





console.groupEnd();


console.group("Triangulos");
//codigo triangulo
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;


"Los lados del triangulo miden: " + ladoTriangulo1 
+ "cm, " + ladoTriangulo2 
+ "cm, " + baseTriangulo 
+ "cm"


//codigo circulo 

console.group("Circulos");

//Radio
const radioCirculo = 4;
console.log("El radio del circulo es " + radioCirculo + "cm");

//diametro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es " + diametroCirculo + "cm");

//pi
const PI = Math.PI;
console.log("Pi es " + PI)

//circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo es " + perimetroCirculo + "cm");

//area
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El areadel circulo es " + areaCirculo + "cm");



console.groupEnd


//aqui calcularemos nuestras funciones de HTML

function perimetroCuadrado(lado){
    return lado* 4;
};



//console.log("El perimetro del cuadrado es " + perimetroCuadrado + "cm")

function areaCuadrado(lado){
    return lado * lado;
};

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado")
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado")
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}


console.group("TriangulosAltura");

function AlturaTriangulo(lado,base){
    return Math.sqrt(lado**2 - base**2/ 4);
    
};

function calcularAlturaTriangulo(){
    const inputLado = document.getElementById("InputLado");
    const inputBase = document.getElementById("InputBase");

    console.log(inputBase);
    const valueLado = inputLado.value;
    const valueBase = inputBase.value;

    const altura = AlturaTriangulo(valueLado,valueBase);
    alert(altura);
    
}

console.groupEnd;