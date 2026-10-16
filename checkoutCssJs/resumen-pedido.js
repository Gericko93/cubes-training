import {cart,findCube,formatter,countCart} from "../data/cart.js"
import { findDeliveryOption } from "../data/deliveryOptions.js";
export function renderResumenPedido(){
  let precios = calcularPrecioArticulos()
  let precioTotalArticulos = precios[0];
  let precioTotalEnvio = precios[1];
  let totalAntesDeImpuestos = precios[2];
  let impuestosEstimados = precios[3];
  let totalDespuesDeImpuestos = precios[4];
  let pedido = "";
  pedido +=`
      <span class="resumen-title">Resumen del pedido </span>
      <div class="items-container">
        <div>Artículos(${countCart()}):</div>
        <div>$${precioTotalArticulos}</div>
      </div>
      <div class="shipping-handling-container">
        <div>Envío y manipulación</div>
        <div class="shipping-handling-price">$${precioTotalEnvio}</div>
      </div>
      <div class="total-before-tax-container">
        <div>Total antes de impuestos:</div>
        <div>$${totalAntesDeImpuestos}</div>
      </div>
      <div class="estimated-tax-container">
        <div> Impuestos estimados (10%)</div>
        <div> $${impuestosEstimados}</div>
      </div>
      <div class="order-total-container">
        <div class="total-pedido-texto">Total del pedido:</div>
        <div class="precio-total"> $${totalDespuesDeImpuestos}</div>
      </div>
    <button class="realizar-pedido-boton"> Realice su pedido </button>

  `
  document.querySelector(".js-order-summary").innerHTML = pedido;

  function calcularPrecioArticulos () {
   let sumUnformatted = 0;
   let deliveryTotalUnformatted = 0;
    cart.forEach((cubeInCart)=>{
      let cubeQuantity = cubeInCart.quantity;
      let findedCube = findCube(cubeInCart.id)
      let findedCubePriceUnformatted = findedCube.priceColombianPesos
      let deliveryPriceUnformatted = findDeliveryOption(cubeInCart.deliveryOptionId).priceColombianPesos
      sumUnformatted += cubeQuantity*findedCubePriceUnformatted
      deliveryTotalUnformatted += deliveryPriceUnformatted;
    })
    const sumFormatted = formatter.format(sumUnformatted)
    const deliveryTotalFormatted = formatter.format(deliveryTotalUnformatted)
    const totalUnformattedBeforeTax = sumUnformatted + deliveryTotalUnformatted;
    const totalFormattedBeforeTax = formatter.format(totalUnformattedBeforeTax)
    let estimatedTaxUnformatted = Math.round(totalUnformattedBeforeTax*0.1); 
    let estimatedTaxFormatted = formatter.format(estimatedTaxUnformatted)
    let totalUnformattedAfterTax = estimatedTaxUnformatted + totalUnformattedBeforeTax;
    let totalFormattedAfterTax = formatter.format(totalUnformattedAfterTax)
    let result = [sumFormatted , deliveryTotalFormatted,totalFormattedBeforeTax,estimatedTaxFormatted, totalFormattedAfterTax]
    return result;
  }
}