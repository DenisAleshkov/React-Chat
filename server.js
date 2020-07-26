const express = require('express')

const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

app.use(express.json()) //app can to get the json-date

const rooms = new Map()

app.get('/rooms', (req, res) => {
   res.json(rooms)
})

app.post('/rooms', (req, res) => {
    const {roomId, userName } = req.body
    if(!rooms.has(roomId)){
        rooms.set(roomId, new Map([
            ['users', new Map()],
            ['messages', []]
        ]))
    }
    res.send()
})

io.on('connection', socket => {
    socket.on('ROOM:AUTH', ( { roomId, userName } ) => {
        socket.join(roomId)
        rooms.get(roomId).get('users').set(socket.id, userName) //save users
        const users =  [...rooms.get(roomId).get('users').values()]
        socket.to(roomId).emit('ROOM:JOINED', users)
    })
    socket.on('disconnect', () => {
        rooms.forEach( (value, roomId) => {
            if(value.get('users').delete(socket.id)) { // IF DELETE => TRUE
                const users =  [...value.get('users').values()]
                socket.to(roomId).broadcast.emit('ROOM:LEAVE', users)
            }
        })
    })
})



server.listen(9999, (err) => {
    if(err){
        throw Error(err)
    }
        console.log('Server  start!')
});