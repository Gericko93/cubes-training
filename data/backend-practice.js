const xhr = new XMLHttpRequest();

xhr.addEventListener('load', ()=>{
  //solo corre cuando carga la response
  console.log(xhr.response);
});
//GET, POST, PUT, DELETE
xhr.open("GET", "https://supersimplebackend.dev" );
xhr.send();