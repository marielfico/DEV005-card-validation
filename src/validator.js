const validator = {
 
  isValid:function(arr2){
    const arra=[]
    
    for(let i=arr2.length ; i>0 ;i--){
     
      //INVERTIR NÚMERO DE TARJETA
      arra.push(arr2[i-1])
         
    }
    //console.log('Valores invertidos ' + arra)

    //OBTENER LOS VALORES DE LA POSICIÓN PAR DEL ARRAY
    const arrPosPar=[]
    for (let i=1; i<arra.length; i=i+2){
      
      arrPosPar.push(arra[i])    
      
    }
    //console.log('Valores de la posición par ' + arrPosPar)

    //OBTENER LOS VALORES DE LA POSICIÓN IMPAR DEL ARRAY
    const arrPosImpar=[]
    for (let i=0; i<arra.length; i=i+2){
      arrPosImpar.push(arra[i])

    }
    //console.log('Valores de la posición impar ' + arrPosImpar)

    //ARRAY PAR MULTIPLICADO POR 2 y suma de 2 dígitos
    for(let i=0; i<arrPosPar.length; i++){
      arrPosPar[i]=arrPosPar[i]*2
      
      if(arrPosPar[i].toString().length===2){
        const caracter1=arrPosPar[i].toString().charAt(0)
        const caracter2=arrPosPar[i].toString().charAt(1)
        arrPosPar[i]=parseInt(caracter1,10) + parseInt(caracter2,10) 
      }
            
    }

    //console.log('El multiplo del array es: ' + arrPosPar)

    //SUMAR LOS VALORES DEL ARRAY IMPAR Y PAR
    //suma par
    let sumaArrayPar= 0

    for(let i=0; i< arrPosPar.length; i++){
      
      sumaArrayPar=sumaArrayPar + parseInt(arrPosPar[i])
      
    }
    //SUMA IMPAR
    let sumaArrayImpar= 0
    for(let i=0; i<arrPosImpar.length;i++){
      sumaArrayImpar=sumaArrayImpar+parseInt(arrPosImpar[i])
    }

    //console.log('la suma de los PAR es: ' + sumaArrayPar)
    //console.log('la suma de los IMPAR es: ' + sumaArrayImpar)
    //const resultSuma=sumaArrayImpar+sumaArrayPar
    //console.log('la suma de IMPAR y PAR es: ' + resultSuma )

    //verificar si es múltiplo de 10

    const verificarTarjeta=sumaArrayImpar + sumaArrayPar
    //console.log( verificarTarjeta)
    // const resultCardValidator=false;
    if (verificarTarjeta%10===0){
      //const result= 'true';
      return true;
      //console.log('Tarjeta válida')
    }else{
      return false;
      //const result= 'false';
      //console.log('Tarjeta inválida')
    }
    
    //console.log(verificarTarjeta%10)
           
  },


  maskify:function(arrayCardNumber){

    const arrayResult=[]
   
    for(let i=0 ; i<arrayCardNumber.length; i++){
      if(i<arrayCardNumber.length-4){
        arrayResult.push('#')
      }else{
        arrayResult.push(arrayCardNumber[i])
      }
    }
    //console.log(arrayResult)
    //console.log(arrayResult.join('')) 
    return arrayResult.join('');
  },
};
 
export default validator;



