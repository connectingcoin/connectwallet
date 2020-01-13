const { createERC20 } = require('./ERC20')
const { MAINNET } = require('../../const/')

module.exports = createERC20({
    symbol: 'XCON',
    name: 'Connect coin',
    color: '#D4AF37',
    contract_address: '0x015df42d36Bc851c7F15f80bd1D4e8dBF02aed0c',
    labels: 'xcon ethereum token erc20 ecr20',
    coin_decimals: 18,
    price_decimals: 2,
    networks_availables: [MAINNET]
})