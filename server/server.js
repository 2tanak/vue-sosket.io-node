const express = require('express')
const socketIO = require('socket.io')
const path = require('path')
const http = require('http')
const publicPath = path.join(__dirname, '../public')
const port = process.env.PORT || 3000
const app = express()
const server = http.createServer(app)
const io = socketIO(server)
const message = (name, text, id) => ({name, text, id})
app.use(express.static(publicPath))

io.on('connection', client => {
	
client.emit('hello',{hello: {
	"cols":[
         {"label":"Страна","type":"string"},
         {"label":"Население","type":"number"}
        ],
"rows": [
		{"c":[{"v":"Франция"},{"v":66200000}]},
		{"c":[{"v":"Германия"},{"v":80780000}]},
		{"c":[{"v":"Япония"},{"v":127103388}]},
		{"c":[{"v":"Аргентина"},{"v":42610981}]},
		{"c":[{"v":"Латвия"},{"v":1989500}]}
	]
}});
})

server.listen(port, () => {
  console.log(`Server has been started on port ${port}...`)
})