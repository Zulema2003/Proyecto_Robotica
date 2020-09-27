const express = require('express');
const app = express();

var serial = require("serialport");
var puerto = 3000;
app.set('view engine','pug');

const puertoAR = "COM9";
var arduino = puertoAR;

var arduinoUno = new Serial(arduino,{baudRate:9600});

arduinoUno.on('open', function(){
    console.log('puerto de comunicacion: '+ arduino +' Abierto')
});

app.get('/', function (req, res) {
    return res.render('uno',{});
});

app.get('/:action', function(req, res){
    var action = req.params.action || rep.param('action');
    
    //luz sala
    if(action == 'onSala'){
        arduinoUno.write("q");
        res.render('vista',{
            mensaje: 'Luz sala encendida'
        });
        console.log('Luz sala encendida');
        }

    else if(action == 'offSala'){
        arduinoUno.write("w");
        res.render('vista',{
            mensaje: 'Luz sala apagada'
        });
        console.log('Luz sala apagada');
    }
    //tv
    else if(action == 'onTele'){
        arduinoUno.write("e");
        res.render('vista',{
            mensaje: 'Televisor encendido'
        });
        console.log('Televisor encendido');
        }

    else if(action == 'offTele'){
        arduinoUno.write("r");
        res.render('vista',{
            mensaje: 'Televisor apagado'
        });
        console.log('Televisor apagado');
    }
    //luz estudio
    else if(action == 'intensidad1'){
        arduinoUno.write("i");
        res.render('vista',{
            mensaje: 'intensidad 1'
        });
        console.log('intensidad 1');
    }
    else if(action == 'intensidad2'){
        arduinoUno.write("o");
        res.render('vista',{
            mensaje: 'intensidad 2'
        });
        console.log('intensidad 2');
    }
    else if(action == 'intensidad3'){
        arduinoUno.write("p");
        res.render('vista',{
            mensaje: 'intensidad 3'
        });
        console.log('intensidad 3');
    }
    else if(action == 'intensidad4'){
        arduinoUno.write("a");
        res.render('vista',{
            mensaje: 'intensidad 4'
        });
        console.log('apagando led');
    }
    else if(action == 'intensidad5'){
        arduinoUno.write("s");
        res.render('vista',{
            mensaje: 'intensidad 5'
        });
        console.log('apagando led');
    }

    //cortinas
    else if(action == 'cortina1-0'){
        arduinoUno.write("0");
        res.render('vista',{
            mensaje: 'cortina1-0'
        });
        console.log('cortina1-0');
    }
    else if(action == 'cortina1-1'){
        arduinoUno.write("1");
        res.render('vista',{
            mensaje: 'cortina1-1'
        });
        console.log('cortina1-1');
    }
    else if(action == 'cortina1-2'){
        arduinoUno.write("2");
        res.render('vista',{
            mensaje: 'cortina1-2'
        });
        console.log('cortina1-2');
    }
    else if(action == 'cortina1-3'){
        arduinoUno.write("3");
        res.render('vista',{
            mensaje: 'cortina1-3'
        });
        console.log('cortina1-3');
    }
    else if(action == 'cortina2-4'){
        arduinoUno.write("4");
        res.render('vista',{
            mensaje: 'cortina2-4'
        });
        console.log('cortina2-4');
    }
    else if(action == 'cortina2-5'){
        arduinoUno.write("5");
        res.render('vista',{
            mensaje: 'cortina2-5'
        });
        console.log('cortina2-5');
    }
    else if(action == 'cortina2-6'){
        arduinoUno.write("6");
        res.render('vista',{
            mensaje: 'cortina2-6'
        });
        console.log('cortina2-6');
    }
    else if(action == 'cortina2-7'){
        arduinoUno.write("7");
        res.render('vista',{
            mensaje: 'cortina2-7'
        });
        console.log('cortina2-7');
    }
    else if(action == 'cortina2-8'){
        arduinoUno.write("8");
        res.render('vista',{
            mensaje: 'cortina2-8'
        });
        console.log('cortina2-8');
    }
    else if(action == 'cortina2-9'){
        arduinoUno.write("9");
        res.render('vista',{
            mensaje: 'cortina2-9'
        });
        console.log('cortina2-9');
    }
    //garage
    else if(action == 'PortonAbierto'){
        arduinoUno.write("t");
        res.render('vista',{
            mensaje: 'porton abierto'
        });
        console.log('porton abierto');
        }

    else if(action == 'PortonMedioAbierto'){
        arduinoUno.write("y");
        res.render('vista',{
            mensaje: 'porton medio abierto'
        });
        console.log('porton medio abierto');
    }
    else if(action == 'PortonCerrado'){
        arduinoUno.write("u");
        res.render('vista',{
            mensaje: 'porton cerrado'
        });
        console.log('porton cerrado');
    }
    else{
        return res.send('Ruta '+action+' no valida')
    }
});

app.listen(puerto, function (){
    console.log('ejemplo app escuchando en el puerto http://0.0.0.0:' + puerto + '!');
});
