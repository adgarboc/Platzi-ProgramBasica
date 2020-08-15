var teclas = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
};

document.addEventListener("keydown",dibujarTeclado)
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d")
var x = 150;
var y = 150;

dibujarLinea("red", 149, 149, 151, 151, papel);

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal, lienzo) 
{
    lienzo.beginPath(); //Arrancamos a dibujar
    lienzo.strokeStyle = color;//decidimos que la linea será roja
    lienzo.lineWidth = 3;
    lienzo.moveTo(xInicial, yInicial);//nos movimos a estas coordenadas
    lienzo.lineTo(xFinal, yFinal);//creamos una linea hasta esta coordenada
    lienzo.stroke();//Cerramos la linea
    lienzo.closePath(); //Cerrar trazo, terminamos de dibujar
}

function dibujarTeclado(evento)
{
    var colorcito = "blue";
    var movimiento = 2;
    switch (evento.keyCode) 
    {
        case teclas.LEFT:
            dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
            x = x - movimiento;
            break;
        case teclas.UP:
            dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
            y = y - movimiento;
            break;
        case teclas.RIGHT:
            dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
            x = x + movimiento;
            break;
        case teclas.DOWN:
            dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
            y = y + movimiento;
            break;
        default:
            console.log("otra tecla");
            break;
    }
}

cuadrito.addEventListener("mousemove", dibujarConMouse);
var BUTTON = 1;

function dibujarConMouse (evento) 
{
    if (evento.buttons == BUTTON) 
    {
        var xi = evento.clientX - 8;
        var yi = evento.clientY - 51;
        var xf = xi + 1;
        var yf = yi + 1;
        dibujarLinea("red",xi,yi,xf,yf,papel)
        console.log(evento);
        //console.log(evento.clientX + ", " + evento.clientY);
        //console.log(xi + ", " + yi);
        //console.log(xf + ", " + yf);
        
    }
    
}