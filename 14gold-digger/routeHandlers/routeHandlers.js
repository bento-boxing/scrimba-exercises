import fs from 'node:fs/promises'
import {getPrice} from "../utils/getPrice.js"
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

export function newPurchase(req, res) {

}