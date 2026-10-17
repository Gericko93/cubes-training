import {cart,findCube,formatter,removeFromCart,countCart,updateDeliveryOption,findCubeCart, saveToStorage} from "../data/cart.js"
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
                    <div class="quantity js-input-quantity-${cartItem.id}">Cantidad:${cartItem.quantity}</div>
                    <input type="number" class="js-actual-input-quantity-${cartItem.id} invisible">
                    <div class="save js-save js-save-${cartItem.id} invisible" data-id="${cartItem.id}"> Guardar </div> 
                    <div class="update js-update js-update-${cartItem.id}" data-id ="${cartItem.id}" >Actualizar</div>
                    <div class="delete js-delete js-delete-${cartItem.id}" data-id ="${cartItem.id}">Eliminar</div>
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
    /*
    función de actualizar:
    1. al presionar Actualizar pasan estas cosas:
      1.1: el boton de actualizar desaparece (con display none)
      1.2: en donde estaba el botón de actualizar aparecen dos botones: 
      -un input type number
      -un botón de guardar
    2. al presionar el botón de guardar:
      2.1 el input type number y el botón de guardar
      desaparecen (con display none)
      2.2 aparece el botón de actualizar en donde estaban estos objetos


      ahora: poner input
    */
  document.querySelectorAll(".js-update").forEach((updateButton)=>{
    updateButton.addEventListener("click",()=>{
      const id = updateButton.dataset.id
      document.querySelector(`.js-input-quantity-${id}`).textContent = "Cantidad:"
      updateButton.classList.add("invisible")
      const saveButton = document.querySelector(`.js-save-${id}`)
      saveButton.classList.remove("invisible")
      const inputElement = document.querySelector(`.js-actual-input-quantity-${id}`)
      inputElement.classList.remove("invisible")    
     

    })
  })
  document.querySelectorAll(".js-save").forEach((saveButton)=>{
    saveButton.addEventListener("click",()=>{
      const id = saveButton.dataset.id
      let cartItem = findCubeCart(id);
      saveButton.classList.add("invisible")
      const updateButton = document.querySelector(`.js-update-${id}`)
      updateButton.classList.remove("invisible")
      const inputElement = document.querySelector(`.js-actual-input-quantity-${id}`)
      let valueToAdd = Number(inputElement.value)
      if (valueToAdd <0)
        {
          inputElement.value ="";
          alert("la cantidad no puede ser negativa")
        }
      else if (valueToAdd ==0){
        document.querySelector(`.js-delete-${id}`).click();
      }
      else {
        cartItem.quantity = valueToAdd
      document.querySelector(`.js-input-quantity-${id}`).textContent = `Cantidad:${cartItem.quantity}`
      inputElement.classList.add("invisible")  
      saveToStorage();  
      renderOrderSummary()
      renderResumenPedido();
      }
    })
  }) 
    renderResumenPedido();
  }
