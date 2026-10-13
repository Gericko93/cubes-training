import {cart,findCube,formatter,removeFromCart} from "../data/cart.js"
let checkoutHtml=""
cart.forEach((cartItem)=>{
  let cube = findCube(cartItem.id)
  checkoutHtml += `
        <div class="single-product-container-${cartItem.id}">
            <div class="delivery-date">Fecha de entrega: Wednesday, October 14</div>
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
                <label class="delivery-option-1">
                  <input type="radio" name="hola">
                    <div>
                        <div class="date">Thursday, October 22</div>
                        <div>Envío Gratís</div>
                    </div>
                  </label>

                <label class="delivery-option-2">
                  <input type="radio" name="hola">
                    <div>
                        <div class="date">Friday, October 16</div>
                        <div>$4.000 - Envío</div>
                    </div>
                </label>
                <label class="delivery-option-3">
                  <input type="radio" name="hola">
                    <div>
                        <div class="date">Wednesday, October 14</div>
                        <div>$10.000 - Envío</div>
                    </div>
                </label>
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
    })  
})                           