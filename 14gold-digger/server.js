import http from 'node:http'
import path from "node:path";
import {serveStatic} from "./utils/serveStatic.js";
import {newPurchase, streamUpdateGoldPrice} from "./routeHandlers/routeHandlers.js";

const __dirname = import.meta.dirname
// price is in pence
const PORT = 8080

const server = http.createServer(async (req, res) => {
    if (req.url === '/api/gold-price') {
        streamUpdateGoldPrice(res);
    } else if (req.url === '/api/new-purchase') {
        const filePath = path.join(__dirname, 'data', 'purchase.txt')
        newPurchase(req, res, filePath)
    } else {
        return await serveStatic(req, res, __dirname)
    }
})

server.listen(PORT, () => console.log(`Listening on ${PORT}`))