const priceCall = require('./getPrices')
const sendText = require('./sendNotif')

const main = async() => {
    // get prices for listed tokens
    const tokens = ['bitcoin', 'ethereum', 'fantom', 'unidex']
    const vsCurrency = ['usd']
    const prices = await priceCall(tokens, vsCurrency)

    return prices
}


main().then((prices) => {
    // change to string and remove extra stuff
    var s = JSON.stringify(prices)
    var s = s.replace(/[{}"]/g, "").replace(/usd:/g, " ").replace(/,/g, ", ")

    // send text
    const text = sendText(s)
})