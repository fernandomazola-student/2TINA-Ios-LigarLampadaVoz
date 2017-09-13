var express = require('express');
var app     = express();
var five    = require('johnny-five');
var board   = new five.Board();
var relay   = null;

board.on("ready", function() {
   relay = new five.Relay(9);
});

app.get('/ligar', function(req, res){
    res.send("Lâmpada ligada! Sucesso mano!!!");
    
    if (relay) {
        relay.on();
    }
});

app.get('/desligar', function(req, res){
    res.send("Lâmpada desligada! =)");
    
    if (relay) {
        relay.off();
    }
});

app.listen(3000, function(){
    console.log("Funcionando na porta 3000");
});
