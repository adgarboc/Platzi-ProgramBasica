var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo =
    {
        url: "tile.png",
        cargaOK: false
    };

var vaca =
    {
        url: "vaca.png",
        cargaOK: false
    };

var pollo =
    {
        url: "pollo.png",
        cargaOK: false
    };

var cerdo =
    {
        url: "cerdo.png",
        cargaOK: false
    };

var cantidad = aleatorio(5, 25);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load",cargarVaca);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

function cargarFondo()
{
    fondo.cargaOK = true;
    dibujar();
}

function cargarVaca()
{
    vaca.cargaOK = true;
    dibujar();
}

function cargarPollo()
{
    pollo.cargaOK = true;
    dibujar();
}

function cargarCerdo() 
{
    cerdo.cargaOK = true;
    dibujar();
}

function dibujar() 
{
    if (fondo.cargaOK)
    {
        papel.drawImage(fondo.imagen,0,0);
    }
    if (vaca.cargaOK)
    {
        for (var i = 0; i < cantidad ; i++)
        {
            var x = aleatorio(0,7);
            var y = aleatorio(0,7);
            x = x * 60;
            y = y * 60;
            papel.drawImage(vaca.imagen,x,y);
        }
    }
    if (pollo.cargaOK)
    {
        for (var i = 0; i < cantidad ; i++)
        {
            var x = aleatorio(0,7);
            var y = aleatorio(0,7);
            x = x * 60;
            y = y * 60;
            papel.drawImage(pollo.imagen,x,y);
        }
    }
    // if (cerdo.cargaOK) 
    // {
    //     for (var i = 0; i < cantidad ; i++)
    //     {
    //         var x = aleatorio(0,7);
    //         var y = aleatorio(0,7);
    //         x = x * 60;
    //         y = y * 60;
    //         papel.drawImage(cerdo.imagen,x,y);
    //     }
    // }
    if (cerdo.cargaOK) 
    {
        papel.drawImage(cerdo.imagen,coords.x,coords.y)
    }
}

function aleatorio(min, maxi) 
{
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
}

document.addEventListener("keydown",moverCerdito);
var teclas = 
{
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
};
var coords =
{
    x: 200,
    y: 200
};
function moverCerdito(evento) 
{
    var movimiento = 2;
    switch (evento.keyCode) 
    {
        case teclas.LEFT:
            coords.x -= movimiento;
            if (cerdo.cargaOK) 
            {
                papel.drawImage(cerdo.imagen,coords.x,coords.y)
                papel.clearRect
            }
            break;
        case teclas.UP:
            coords.y -= movimiento;
            if (cerdo.cargaOK) 
            {
                papel.drawImage(cerdo.imagen,coords.x,coords.y)
            }
            break;
        case teclas.RIGHT:
            coords.x += movimiento;
            if (cerdo.cargaOK) 
            {
                papel.drawImage(cerdo.imagen,coords.x,coords.y)
            }
            break;
        case teclas.DOWN:
            coords.y += movimiento;
            if (cerdo.cargaOK) 
            {
                papel.drawImage(cerdo.imagen,coords.x,coords.y)
            }
            break;
        default:
            console.log("otra tecla");
            break;
    }
}