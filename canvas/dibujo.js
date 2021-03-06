var texto = document.getElementById("texto_lineas")
var boton = document.getElementById("botoncito")

boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;


function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal) 
{
    lienzo.beginPath(); //Arrancamos a dibujar
    lienzo.strokeStyle = color;//decidimos que la linea será roja
    lienzo.moveTo(xInicial, yInicial);//nos movimos a estas coordenadas
    lienzo.lineTo(xFinal, yFinal);//creamos una linea hasta esta coordenada
    lienzo.stroke();//Cerramos la linea
    lienzo.closePath(); //Cerrar trazo, terminamos de dibujar
}

function dibujoPorClick() 
{
    var lineas = parseInt(texto.value);
    var yi, xf;
    var colorcito = "#faa";
    var espacio = ancho / lineas;

    for (l = 0; l < lineas; l++) {
        yi = espacio * l;
        xf = espacio * (l + 1);
        dibujarLinea(colorcito, 0, yi, xf, 300);
        console.log(l);
    }

    dibujarLinea(colorcito, 1, 1, 1, 299);
    dibujarLinea(colorcito, 1, 299, 299, 299);
}
