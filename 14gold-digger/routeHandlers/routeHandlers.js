import fs from 'node:fs/promises'
import {getPrice} from "../utils/getPrice.js"
import {sendResponse} from "../utils/sendResponse.js";
let currentPrice = 325788

export function streamUpdateGoldPrice(res) {
    res.statusCode = 200
    res.setHeader("Content-Type", "text/event-stream")
    res.setHeader("Cache-Control", "no-cache")
    res.setHeader("Connection", "keep-alive")

    res.write(`event: price-updated\ndata: ${currentPrice}\n\n`)

    setInterval(() => {
        currentPrice = getPrice(currentPrice)
        res.write(
            `event: price-updated\ndata: ${currentPrice}\n\n`
        )

    }, 5000)
}

export async function newPurchase(req, res, filePath) {
    try {
        let body = []
        req.on('data', chunk => body.push(chunk))
        req.on('end', async () => {
            body = Buffer.concat(body).toString('utf8')
            const data = JSON.parse(body)
            console.log(data)

            sendResponse(res, 201, 'application/json', JSON.stringify(body))
        })

        // const content = `${new Date().toISOString()}, amount paid: ${data.}`
        // fs.writeFile(filePath,)
    } catch (err) {
        console.error('Purchase error: ', err)
        sendResponse(res, 500, 'application/json', JSON.stringify(err))
    }
}