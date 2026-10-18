import {cubes} from "./cubes.js"
const formatter = new Intl.NumberFormat("es-CO");


//object-oriented programming
//data and functions together 
/*
tries to represent the real world
in a real world a cart is a physical cart, 
in oop we have an object cart in which we can put items or add to cart or remove from cart.
makes the code easier to understand
*/
function Cart(localStorageKey){
  const cart = {
      cartItems : JSON.parse(localStorage.getItem(localStorageKey)) || [],

      saveToStorage(){
        localStorage.setItem(localStorageKey,JSON.stringify(this.cartItems))
      },
      removeFromCart(id){
        this.cartItems = this.cartItems.filter(cartItem => cartItem.id !== id)
        this.saveToStorage();
      },
      findCube(id){
        let returnedCube;
        cubes.forEach((cube)=>{
          if (id===cube.id){
            returnedCube = cube;
          } 
        })
        return returnedCube;
      },
      findCubeCart(id){
        let returnedCube;
        this.cartItems.forEach((cube)=>{
          if (id===cube.id){
            returnedCube = cube;
          } 
        })
        return returnedCube;
      },
      countCart(){
        let quantity = 0;
          this.cartItems.forEach((cartItem)=>{
            quantity+=cartItem.quantity
          })
        return quantity;
      },
      addToCart(cubeId,quantityToAdd =1){
        let cubeToAdd;
            cubes.forEach((cube)=>{
              if (cube.id===cubeId){
                cubeToAdd = cube
              }
            })
            let found = false;
            if (document.querySelector(`.js-select-list-${cubeId}`)){
              quantityToAdd = Number(document.querySelector(`.js-select-list-${cubeId}`).value)
            }

            this.cartItems.forEach((cube)=>{
              if (cubeToAdd.id === cube.id){
                cube.quantity+=quantityToAdd
                found = true;
              }
            })
            if (!found){
              this.cartItems.push({
                id : cubeToAdd.id,
                quantity : quantityToAdd,
                deliveryOptionId : "11"
              })
            }
            this.saveToStorage();
      },
      updateDeliveryOption(cubeId, deliveryOptionId){
        let cube = findCubeCart(cubeId);
        cube.deliveryOptionId = deliveryOptionId;
        this.saveToStorage();
      }
  };

  return cart;
}
const cart = Cart('cart-oop');
const businessCart = Cart('cart-business');

businessCart.addToCart("1")
businessCart.addToCart("2")

console.log(businessCart);
console.log(cart);



