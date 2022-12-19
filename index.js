var events = require('events');
var EventEmitter = events.EventEmitter;

var chat = new EventEmitter;
var users = [2], chatlog = [2];

chat.on('message', function(message){
	// chatlog.push(message);
    console.log(message);
});

chat.on('jo', function(Hello) {
 
  console.log(Hello);
});

chat.on('jo', function(nickname) {
 
  console.log(nickname);
});

chat.on('jijo', function(nickname) {
  
  console.log(nickname);
});

// Emit events here
chat.emit('jo', 'Car');
chat.emit('message', 'Hello');
chat.emit('jijo','hida')