function puntajeGolf(par,golpes){
    if(golpes==1){
        return "Hole-in-One";
    } else if(golpes <= par-2){
        return "Eagle";
    } else if(golpes == par-1){
        return "Birdie";
    }
    else if(golpes == par){
        return "Par";
    }
    else if(golpes == par+1){
        return "Bogey";
    }
    else if(golpes == par+2){
        return "Double Bogey";
    }
    else if(golpes >= par+3){
        return "Go Home";
    }
}
//console.log(puntajeGolf(4,3));


function esPalindromo(cadena) {
    // Convertir la cadena en minúsculas y eliminar los espacios en blanco
    cadena = cadena.toLowerCase().replace(/\s/g, "");
  
    // Obtener la longitud de la cadena
    var longitud = cadena.length;
  
    // Comparar los caracteres de la cadena
    for (var i = 0; i < longitud / 2; i++) {
      if (cadena[i] !== cadena[longitud - 1 - i]) {
        return false;
      }
    }
  
    return true;
  }
  
  var cadena = "paul";
  if (esPalindromo(cadena)) {
    console.log(cadena + " es un palíndromo");
  } else {
    console.log(cadena + " no es un palíndromo");
  }
  