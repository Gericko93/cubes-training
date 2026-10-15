export const deliveryOptions = [{
  id: "11",
  deliveryDays: 7,
  priceColombianPesos:0
}, {
  id:"22",
  deliveryDays:3,
  priceColombianPesos:4000
},{
  id:"33",
  deliveryDays:1,
  priceColombianPesos:10000
}];

export function findDeliveryOption(id){
  let deliveryOption;
  deliveryOptions.forEach((option)=>{
    if (option.id === id){
      deliveryOption = option;
    }
  })
  console.log(deliveryOption); //funciona
  return deliveryOption;
}