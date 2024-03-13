const fs = require('fs')
const EventEmitter = require('events')
const rr = fs.createReadStream('../server/data.json',)
const  em = new EventEmitter();
rr.on('data', (data)=>{
  console.log({data})
})
rr.on('end', (data)=>{
  console.log({data})
})
em.on('demo', ()=>{
})
em.emit('demo')