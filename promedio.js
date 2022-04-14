const lista1 = [
    100,
    200,
    300,
    500,
]



function calcularMediaAritmetica(lista){ 
    /* let sumaLista = 0;
    for (let i = 0; i < lista.length; i++){ //un for que recorra nuestro arreglo sin importar el tamaño de este
        sumaLista += lista[i];  // es lo mismo que sumaLista1 = sumaLista1 + lista[i]; 
    } */

    
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista1 = sumaLista / lista.length;

    return promedioLista1;
}