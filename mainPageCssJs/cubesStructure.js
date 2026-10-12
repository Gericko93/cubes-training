import {cubes} from "../data/cubes.js"
import {cart,countCart} from "../data/cart.js";

const formatter = new Intl.NumberFormat("es-CO");  //una cosa de javascript para formatear dependiendo el lugar
//formatea fechas, dinero, lo que sea.
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
      <img src="ratings/rating-${cube.rating.stars*10}.png">
      <div>${cube.rating.count}</div>
    </div>
    <div class="precio-cubo">
      $${formatter.format(cube.priceColombianPesos)}
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
       let cubeToAdd;
       // primero, encuentra el cubo en cubes.js para sacarle la información
       cubes.forEach((cube)=>{
        if (cube.id===cubeId){
          cubeToAdd = cube
        }
       })
       //luego, busca ese cubeToAdd en cart , para ver si ya está 
       //si ya está le suma uno a lo que ya está, sino pone quantity=1
       let found = false;
       let quantityToAdd = Number(document.querySelector(`.js-select-list-${cubeId}`).value)
       cart.forEach((cube)=>{
        if (cubeToAdd.id === cube.id){
          cube.quantity+=quantityToAdd
          found = true;
        }
       })
       if (!found){
        cart.push({
          id : cubeToAdd.id,
          quantity : quantityToAdd
        })
       }
       console.log(cart);
       //luego de que se agregó el producto, se cuenta todo cart y el carrito de arriba muestra ese valor
       document.querySelector(".js-shopping-cart-counter").textContent = countCart();
    })
})

