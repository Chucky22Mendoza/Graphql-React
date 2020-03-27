import { server } from "./server"
import './database'

server.start({ port: process.env.PORT || 19000 }, ({ port }) => {
    console.log('SERVER RUNNING ON PORT:', port)
})