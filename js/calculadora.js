var tabla = ""; 
var suma = 0;

function imprimir(fila){
    
    let identificador = "cantidad"+fila;
    
    //Compruebo primero que el nro el dato ingresado en cantidad sea un nro positivo. 
    if(isNaN(parseInt(document.getElementById(identificador).value))||parseInt(document.getElementById(identificador).value)<0){
        alert("Esto no es un número mayor que cero! \nRecargando Página");
        location. reload();
    }
    
    //Capturo la tabla y me quedo con la fila indicada.
    let cadena = '<tr>'
    let palabra = ''
    let linea = document.getElementsByTagName('tr');
    let dato = linea[fila].innerHTML;
    cadena += dato
    cadena += '</tr>'
    cadena = cadena.split(["\n"])
    
    let cant = document.getElementById(identificador).value;
    cadena.splice(3,1,'<td>' + cant + '</td>'); 
    cadena.splice(4,1,"<td>subTotal</td>"); //Elimino datos del boton y los reemplazo por una palabra cualquiera. 
    
    //Elimino espacios en blanco de cada elemento del Array y los sumo a palabra.
    for (let i = 0; i<cadena.length; i++){
        cadena[i] = cadena[i].trim();
        palabra += cadena[i]
    }
    
    //Limpio el dato precio y lo multiplico por la cantidad para obtener el SubTotal.
    let precio = cadena[2].replace("<td>$","");
    precio = precio.replace("</td>","");
    precio = parseInt(precio) * 1000;
    parseInt(cant);
    subTotal = precio * cant;
    suma += subTotal;
    subTotal = subTotal.toString()
    palabra = palabra.replace("subTotal",'$'+subTotal);
    
    
    //Se arma la tabla solo si el usuario ingresó una cantidad mayor a cero. 
    if(cant > 0){
        
        tabla += palabra;
    }
}

//Abro la página generar_presupuesto y le envío la nueva tabla como parametro junto con El Total. 
function abrirCalc(){
    window.open("../pages/generar_presupuesto.html"+"?"+tabla + "///" + suma.toString(), "_self");        
}
