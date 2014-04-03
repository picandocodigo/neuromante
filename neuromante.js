var irc = require('irc');
var config = {
  channels: ['#picandocodigo'],
  server: 'irc.freenode.net',
  botName: 'neuromante'
};
var neuromante = new irc.Client(config.server,
                                 config.botName,
                                 {channels: config.channels}
                                );

neuromante.addListener("join", function(channel, who){
  neuromante.say(channel, "¡Bienvenido " + who + "!");
});

neuromante.addListener("message", function(nick, to, text, message){
  if( /^slap/.test(text) ){
    var a = /(^slap)\ (\w*)/.exec(text);
    neuromante.say(to, nick + " abofetea a " + a[2] + " con una gran trucha.");
  }
});

neuromante.addListener('error', function(message) {
    console.log('error: ', message);
});

var http = require('http');
var port = Number(process.env.PORT || 5000);
http.createServer(function (req, res){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end("Neuromante: Hola\n");
}).listen(port);
