export let cart = []


export function countCart(){
  let quantity = 0;
  cart.forEach((cart)=>{
    quantity+=cart.quantity
  })
  return quantity;
}