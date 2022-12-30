let toggleBtn=document.querySelector
('.toggleBtn')// se define con un punto porque es una clase
let container=document.querySelector('.container')


//manipular nnuestro BTN, BOTON
toggleBtn.onclick=function(){ //dentro de las llaves voy a decirle lo que vamos a realizar
    container.classList.toggle('active') //reconoce on/off //se reconoce automaticamente 

}