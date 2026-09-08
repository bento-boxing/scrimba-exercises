export function getPrice(currentPrice) {
    const change = Math.random() < 0.5 ? -1 : 1
    // price can shift up to -10 to 10 pounds per tick.
    return currentPrice + (change * (Math.round(Math.random() * 1000)))
}