import {cubes} from "./cubes.js"
export const formatter = new Intl.NumberFormat("es-CO");


class Cart {
  #localStorageKey; //# makes the property private
  cartItems;
  constructor(localStorageKey){
    /*
    when we generate an object it will run
    this constructor automaticaally
    */
  this.#localStorageKey = localStorageKey;
  
  this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey)) || [];

  }
  
  saveToStorage(){
        localStorage.setItem(this.#localStorageKey,JSON.stringify(this.cartItems))
  };
  removeFromCart(id){
        this.cartItems = this.cartItems.filter(cartItem => cartItem.id !== id)
        this.saveToStorage();
  };
  findCube(id){
        let returnedCube;
        cubes.forEach((cube)=>{
          if (id===cube.id){
            returnedCube = cube;
          } 
        })
        return returnedCube;
  };
  findCubeCart(id){
        let returnedCube;
        this.cartItems.forEach((cube)=>{
          if (id===cube.id){
            returnedCube = cube;
          } 
        })
        return returnedCube;
  };
  countCart(){
        let quantity = 0;
          this.cartItems.forEach((cartItem)=>{
            quantity+=cartItem.quantity
          })
        return quantity;
  };
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
    };
  updateDeliveryOption(cubeId, deliveryOptionId){
    let cube = this.findCubeCart(cubeId);
    cube.deliveryOptionId = deliveryOptionId;
    this.saveToStorage();
  };
    
}
const cart = new Cart("cart-oop");
const businessCart = new Cart("business-cart-oop");

businessCart.addToCart("1")
businessCart.addToCart("2")

console.log(businessCart);
console.log(cart);

console.log(businessCart instanceof Cart);



