import validator from './validator.js';

//console.log(validator);

//VALIDAR INGRESO DE SÓLO NÚMEROS



const creditCardNumber= document.querySelector('#creditCardNumber');
creditCardNumber.addEventListener('keydown', isInputNumber);


function isInputNumber(event){
  if((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105) && event.keyCode !==190  && event.keyCode !==110 && event.keyCode !==8 && event.keyCode !==9  ){
    event.preventDefault();
  }



/*
  if (isNaN(e.key) || e.code==='Space'){
    alert("Número inválido  " + e.key);
    e.preventDefault();
  }
  */
}










//VALIDAR EL NÚMERO DE TARJETA

const  btnValidator=document.getElementById('btnValidator')
btnValidator.addEventListener('click', validart);



//FUNCIÓN LLAMADA AL PRESIONAR EL BOTÓN VALIDAR
function validart(){ 
  
  //GUARDAR EL NUMERO DE LA TARJETA
  const cardNumber=document.getElementById('creditCardNumber').value

  
  
  
  //GUARDAR EN UN ARRAY LOS NÚMEROS
  const arr1= Array.from(cardNumber)

   
  //VALIDAR NÚMERO DE TARJETA
  

  //crear variable donde devolverá el resultado
 
  const resultCardValidator=validator.isValid(arr1);
  const divResultCardValidator=document.getElementById('resultCardValidator');
   
  if(resultCardValidator===true){
    divResultCardValidator.innerHTML='Tarjeta válida';
  }else{
    divResultCardValidator.innerHTML='Tarjeta inválida';
  }
  
}


//ENMASCARAR
//guardar en una variable el boton enmascarar
const btnEnmascarar=document.getElementById('btnEnmascarar')
btnEnmascarar.addEventListener('click', enmascarar)


function enmascarar(){
//guardar el valor de la tarjeta

  const cardNumber=document.getElementById('creditCardNumber').value
  const arrayCardNumber=Array.from(cardNumber)
  //crear variable donde devolverá el resultado 
  const resultMaskify= validator.maskify(arrayCardNumber);
  //crear variable donde se asigna el elemento html donde se devolverá el resultado
  const divResultMaskify=document.getElementById('resultMaskify');
  //asignar el resultado al elemento html
  divResultMaskify.innerHTML=resultMaskify;
}





//VENTANA MODAL
const btnPagar=document.querySelector('#pagar');
const modal=document.querySelector('#modal')

btnPagar.addEventListener('click', ()=>{
  modal.showModal();
})





























