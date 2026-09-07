import http from 'node:http'
import {serveStatic} from "./utils/serveStatic.js";

const __dirname = import.meta.dirname
const PORT = 8080

const server = http.createServer(async (req, res) => {
    if (req.url === '/api') {
        if (req.method === 'GET') {

        }
    } else {
        return await serveStatic(req, res, __dirname)
    }
})

server.listen(PORT, () => console.log(`Listening on ${PORT}`))