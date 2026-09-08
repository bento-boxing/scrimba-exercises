export function getPrice(currentPrice) {
    const change = Math.random() < 0.5 ? -1 : 1
    return currentPrice + (change * (Math.round(Math.random() * 10_000) / 100))
}