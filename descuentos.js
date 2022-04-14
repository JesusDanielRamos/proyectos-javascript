// const precioOriginal = 100;
// const descuento = 15;

function calcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/ 100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const InputPrice = document.getElementById("inputPrice");
    const priceValue = InputPrice.value;

    const InputDiscount = document.getElementById("inputDiscount");
    const discountValue = InputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue,discountValue);

    const ResultP = document.getElementById("resultP");

    ResultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}

console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento,
})