import http from 'node:http'
import {serveStatic} from "./utils/serveStatic.js";
import {getPrice} from "./utils/getPrice.js";

const __dirname = import.meta.dirname
let currentPrice = 3257.88
const PORT = 8080

const server = http.createServer(async (req, res) => {
    if (req.url === '/api') {
        if (req.method === 'GET') {

        }
    } else if (req.url === '/api/gold-price') {
        res.statusCode = 200
        res.setHeader("Content-Type", "text/event-stream")
        res.setHeader("Cache-Control", "no-cache")
        res.setHeader("Connection", "keep-alive")

        setInterval(() => {
            const newPrice = getPrice(currentPrice)
            res.write(
                `event: price-updated\ndata: ${newPrice}\n\n`
            )

        }, 5000)
    } else {
        return await serveStatic(req, res, __dirname)
    }
})

server.listen(PORT, () => console.log(`Listening on ${PORT}`))