function proximoFila(arreglo,elemento){
arreglo.push(elemento);//agrega al final del arreglo el elemento 
return arreglo.shift(); //elimina el primer elemento 

}

var miarreglo=[1,2,3,4,5];
console.log("Antes: " + JSON.stringify(miarreglo))
console.log(proximoFila(miarreglo,6));
console.log("Depues: " + JSON.stringify(miarreglo))