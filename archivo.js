
var iframe1 = '<iframe width="600" height="450" frameborder="0" style="border:0"
src="https://www.google.com/maps/embed/v1/search?q=Bares+en+Oaxaca&key=AIzaSyAU7_l7egJjMuRDkwwFf5v3V8gSKofP0cw" allowfullscreen></iframe>';
 
//Funciones que identifican el lugar en la página y escriben el valor de la variable. 
 
function escribiriframe(){ 
document.getElementById('iframe1').innerHTML=iframe1; 
} 

//Ejecuta las funciones después que la pagina termine de cargar.
window.onload=function(){ 
escribiriframe(); 
} 