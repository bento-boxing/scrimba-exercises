export function sendResponse(res, statusCode, contentType, body) {
    res.setHeader('Content-Type', contentType)
    res.statusCode = statusCode
    res.end(body)
}