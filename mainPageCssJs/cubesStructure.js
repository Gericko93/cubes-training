import {cubes} from "../data/cubes.js"
import {countCart,saveToStorage,addToCart} from "../data/cart.js";
  //una cosa de javascript para formatear dependiendo el lugar
//formatea fechas, dinero, lo que sea.
document.querySelector(".js-shopping-cart-counter").textContent = countCart();
let cubosHTML = "";
cubes.forEach((cube)=>{
  cubosHTML +=`
  <div class="singular-cube-container">
    <div class="imagen-cubo">
      <img src="cubes/${cube.imageName}.webp">
    </div>
    <div class="texto-cubo">
      ${cube.name}
    </div>
    <div class="rating-cubo">
      <img src="ratings/rating-${cube.getStarsRating()}.png">
      <div>${cube.rating.count}</div>
    </div>
    <div class="precio-cubo">
      $${cube.getPrice()}
    </div>
    <div class="de-0-a-10-selector"> 
      <select class="js-select-list-${cube.id}">
        <option selected value ="1">1</option>
        <option value ="2">2</option>
        <option value ="3">3</option>
        <option value ="4">4</option>
        <option value ="5">5</option>
        <option value ="6">6</option>
        <option value ="7">7</option>
        <option value ="8">8</option>
        <option value ="9">9</option>
        <option value ="10">10</option>
      </select>
    </div>

    ${
      cube.extraInfoHTML()
      //polymorphism, an alternative to an if statement
    }
    <div class="agregar-al-carrito-boton-container">
      <button class="agregar-al-carrito-boton" data-cube-id = "${cube.id}"> Agregar al carrito</button>
    </div>
  </div>
  `
})

document.querySelector(".js-cubes-grid-container").innerHTML = cubosHTML;


document.querySelectorAll(".agregar-al-carrito-boton").forEach((botonAgregar)=>{
    botonAgregar.addEventListener("click",()=>{
       const {cubeId} = botonAgregar.dataset
       addToCart(cubeId);
       document.querySelector(".js-shopping-cart-counter").textContent = countCart();
       saveToStorage();
    })
})
