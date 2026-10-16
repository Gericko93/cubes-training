import {cart,findCube,formatter,removeFromCart,countCart,updateDeliveryOption} from "../data/cart.js"
import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js"
import {deliveryOptions} from "../data/deliveryOptions.js"
import {renderResumenPedido} from "./resumen-pedido.js";


export function renderOrderSummary(){
  document.querySelector(".js-checkout-counter").textContent = `(${countCart()} items)`
    let checkoutHtml=""
    cart.forEach((cartItem)=>{
    let deliveryOptionId = cartItem.deliveryOptionId;
    let deliveryOption;
    deliveryOptions.forEach((option)=>{
      if (option.id === deliveryOptionId){
        deliveryOption = option;
      }
    })
    let today = dayjs();
    let deliveryDate = today.add(deliveryOption.deliveryDays, 'days');
    const dateString = deliveryDate.format("dddd, MMMM D")
    let cube = findCube(cartItem.id)
    checkoutHtml += `
          <div class="single-product-container single-product-container-${cartItem.id}">
              <div class="delivery-date js-delivery-date">Fecha de entrega: ${dateString}</div>
              <div class="cube-data-delivery-options">
                <div class="cube-image-container">
                  <img class="cube-image" src="cubes/${cube.imageName}.webp">
                </div>
                <div class="cube-data">
                  <div class="cube-name">${cube.name}</div>  
                  <div class="cube-price">$${formatter.format(cube.priceColombianPesos)}</div>  
                  <div class="cube-quantity-container">
                    <div class="quantity">Cantidad:${cartItem.quantity}</div>
                    <div class="update">Actualizar</div>
                    <div class="delete js-delete" data-id ="${cartItem.id}">Eliminar</div>
                  </div>  
                </div>
                <div class="delivery-options">
                  <div class="escoja">Escoja una opción de Envío</div>
                  ${deliveryOptionsHTML(cartItem)}
                </div>
              </div>
            </div>
    `
    })

    document.querySelector(".js-products-summary").innerHTML = checkoutHtml;
    /*
    let {id} = button.dataset;
    document.querySelector(`.single-product-container-${id}`).remove(); 
    removeFromCart(id);   
    */

    document.querySelectorAll(".js-delete").forEach((button)=>{
    button.addEventListener("click",()=>{
      let {id} = button.dataset;
      document.querySelector(`.single-product-container-${id}`).remove(); 
      removeFromCart(id);  
      document.querySelector(".js-checkout-counter").textContent = `(${countCart()} items)`
       renderResumenPedido();
      })  
    })

    /*
    loop throuhg deliveryoptions
    for each option generate somee html
    combine the html together
    */
    function deliveryOptionsHTML(cartItem){
    let html = "";

    deliveryOptions.forEach((deliveryOption)=>{
      let today = dayjs();
      let deliveryDate = today.add(deliveryOption.deliveryDays, 'days');
      const dateString = deliveryDate.format("dddd, MMMM D")
      const priceString = deliveryOption.priceColombianPesos === 0 ? "Envío Grátis" : `Costo del envío: $${formatter.format(deliveryOption.priceColombianPesos)}`

      const isChecked = deliveryOption.id === cartItem.deliveryOptionId;

      html += `
      <label class="delivery-option js-delivery-option" data-cube-id="${cartItem.id}" data-delivery-option-id="${deliveryOption.id}">
        <input type="radio" ${isChecked? "checked" : ""} name="delivery-${cartItem.id}">
          <div>
              <div class="date">${dateString}</div>
              <div>${priceString}</div>
          </div>
      </label>
      `
    })
    return html;
    }

    document.querySelectorAll(".js-delivery-option").forEach((option)=>{
      option.addEventListener("click",()=>{
        const {cubeId, deliveryOptionId} = option.dataset
        updateDeliveryOption(cubeId, deliveryOptionId)
        renderOrderSummary();
      })
    })
    renderResumenPedido();
  }
