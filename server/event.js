const EventEmitter = require('events')
const  em = new events.EventEmitter();

em.on('demon', ()=>{
  console.log('demon')
})


em.emit('demo')