import {cubes} from "./cubes.js"
export const formatter = new Intl.NumberFormat("es-CO");
export let cart = JSON.parse(localStorage.getItem('cartCubes')) || [{
  id: "1",
  quantity:1,
  deliveryOptionId:"11"
},{
  id:"2",
  quantity:2,
  deliveryOptionId:"22"
}]
export function saveToStorage(){
  localStorage.setItem('cartCubes',JSON.stringify(cart))
}

export function removeFromCart(id){
  cart = cart.filter(cartItem => cartItem.id !== id)
  saveToStorage();
}
export function findCube(id){
  let returnedCube;
  cubes.forEach((cube)=>{
    if (id===cube.id){
      returnedCube = cube;
    } 
  })
  return returnedCube;
}
export function countCart(){
  let quantity = 0;
  cart.forEach((cart)=>{
    quantity+=cart.quantity
  })
  return quantity;
}
export function addToCart(cubeId){
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
          quantity : quantityToAdd,
          deliveryOptionId : "11"
        })
       }
       //luego de que se agregó el producto, se cuenta todo cart y el carrito de arriba muestra ese valor
}