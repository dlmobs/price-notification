const CoinGecko = require('coingecko-api')

// initiate coingecko api client
const CoinGeckoClient = new CoinGecko()

const priceCall = async(tokens, vsCurrency) => {
    let data = await CoinGeckoClient.simple.price({
        ids: tokens,
        vs_currencies: vsCurrency,
    });
    return data.data
}


module.exports = priceCall