const lista1 = [ //declaramos el array
    1,
    2,
    3,
    4,
    3,
    6,
    7,
    9,
    1,
    3,
    7,
    8,
    1
];

const lista1Count = {}; //creamos un objeto

lista1.map({ //map hara lo que le indiquemos, va a recorrer todo el arreglo

    function(elemento) {
        if(lista1Count[elemento]){
            lista1Count[elemento] +=1;
        }else{
            lista1Count[elemento] = 1;
        }
    }
}) 

//esta const nos va a devolver un array dentro de otroa rray donde dentro abra, nuestro numero de la lista con el numero de veces que se repite
const lista1Array = Object.entries(lista1Count).sort( //object.entries nos permite apartir de un objeto crear un array
    function (elementoA,elementoB){
        elementoA[1] - elementoB[1];       //si valor acumulado es mayor que nuevo valor, va a seguir siendo un num positivo, 
                                            //si son iguales la resta sera 0 , pero si nuevo valor es mayor, esta resta dara negativo
    }
)

const moda = lista1Array[lista1Array.length - 1]; //queremos imprimir la ultima posicion, primero vemos con .length la cantidad de elementos


//RETO HACER TODO ESTE EN UNA FUNCION