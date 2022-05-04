const CoinGecko = require('coingecko-api')

// initiate coingecko api client
const CoinGeckoClient = new CoinGecko()

const priceCall = async(tokens) => {
    let data = await CoinGeckoClient.simple.price({
        ids: tokens,
        vs_currencies: ['usd'],
    });
    return data.data
}


module.exports = priceCall