import {cubes} from "./cubes.js"
export const formatter = new Intl.NumberFormat("es-CO");
export let cart = JSON.parse(localStorage.getItem('cartCubes')) || []
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