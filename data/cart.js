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

export function findCubeCart(id){
  let returnedCube;
  cart.forEach((cube)=>{
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
       cubes.forEach((cube)=>{
        if (cube.id===cubeId){
          cubeToAdd = cube
        }
       })
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
       

}

export function updateDeliveryOption(cubeId, deliveryOptionId){
  let cube = findCubeCart(cubeId);
  cube.deliveryOptionId = deliveryOptionId;
  saveToStorage();
}