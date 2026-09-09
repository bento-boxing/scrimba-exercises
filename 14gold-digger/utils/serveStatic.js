import path from "node:path";
import fs from "node:fs/promises";
import mime from "mime-types";
import {sendResponse} from "./sendResponse.js";

export async function serveStatic(req, res, baseDir) {
    const publicPath = path.join(baseDir, "public")
    const filePath = path.join(
        publicPath,
        req.url === '/' ? 'index.html' : req.url
    )

    const ext = path.extname(filePath)
    const contentType = mime.lookup(ext)

    try {
        const content = await fs.readFile(filePath)
        sendResponse(res, 200, contentType, content)
    } catch (err) {
        if (err.code === 'ENOENT') {
            sendResponse(res, 404, 'text/html', '404.html')
        } else {
            console.error(err)
            sendResponse(res, 500, 'text/html', '500.html')
        }
    }
}