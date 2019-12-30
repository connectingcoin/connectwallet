const { localStorageGet } = require('../browser')
const { MAINNET, TESTNET, LOCALSTORAGE_NETWORK } = require('../../const/')

const Coins = {}
const list = [
    'ETH',
    'LTC',
    // 'BCH',
    'BTC',
    'XCON'

]

exports.Coins = Coins

const network_id = Number(localStorageGet(LOCALSTORAGE_NETWORK)) || MAINNET

list.forEach(symbol => {
    const coin = require('./' + symbol)
    if (coin.setupNetwork(network_id, coin.networks)) {
        Coins[symbol] = coin
        exports[symbol] = coin
    }
})

// const CoinsCopy = Object.assign({}, Coins)
// delete CoinsCopy.Coins
// Coins.Coins = CoinsCopy
