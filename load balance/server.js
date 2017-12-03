//Balanceo de carga.
const http 	  = require('http');

//Lista de instacias de servers a repartir requests.
const servers = [
 {host: 'localhost', port: '8081'},
 {host: 'localhost', port: '8082'}
];

var i = 0;
module.exports = function(options, callback) {
 i = (i + 1) % servers.length;
 options.hostname = servers[i].host;
 options.port = servers[i].port;
 return http.request(options, callback);
};