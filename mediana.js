
function calcularMediaAritmetica(lista){ 

    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista1 = sumaLista / lista.length;

    return promedioLista1;
}


function Comparacion(a, b){
    return a - b;
}

const lista1 = [
    50,
    200,
    300,
    100,
];

function calcularMediana(){

    let mediana;
    lista1.sort(Comparacion);
    console.log(lista1);
    const mitadLista1 = parseInt(lista1.length / 2 ); //usamos parseInt para convertirla a entero 

    if(lista1.length % 2 === 0){
        const element1 = lista1[mitadLista1];;
        const element2 = lista1[mitadLista1 - 1];;
        const promedioElement1y2 =  calcularMediaAritmetica([element1,element2,]);
        
        mediana = promedioElement1y2;
    }else{
        mediana = lista1[mitadLista1];
    }

    return mediana;
}



// function esPar(numero){
//     if(numero % 2 === 0){
//         return true;
//     }else{
//         return false;
//     }
// }

// if(esPar(lista1.length)){
//     const element1 = lista1[mitadLista1];;
//     const element2 = lista1[mitadLista1 - 1];;

//     const promedioElement1y2 =  calcularMediaAritmetica([element1,element2,]);

//     mediana = promedioElement1y2;
// }else{
//     mediana = lista1[mitadLista1];
// }