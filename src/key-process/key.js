var Mnemonic = require('bitcore-mnemonic');
const { bitcore } = require('bitcore-mnemonic');
const { hdkey } = require('ethereumjs-wallet');
const web3 = require('../utils/web3')

const key = () => {
    var code = new Mnemonic(Mnemonic.Words.ENGLISH);
    console.log(code.toString())
    const xpriv = code.toHDPrivateKey()
    console.log("xpriv : ", xpriv.xprivkey)
    const privateKey = xpriv.deriveChild("m/44'/60'/0'/0")

    console.log("privatekey: ", privateKey.xprivkey)
    const publicKey = new bitcore.HDPublicKey(privateKey)
    console.log('publickey', publicKey.xpubkey)

    const firstEthPublicKey = hdkey.fromExtendedKey(publicKey.toString()).derivePath(`m/0`).getWallet();
    console.log('firstEthPublicKey'.firstEthPublicKey)
    const addressEth = firstEthPublicKey.getAddress();

    const addressETH = `0x${addressEth.toString('hex')}`;
    console.log(addressETH)
    code.toString()
}

const toEther = (wie) => {
    return web3.utils.fromWei(wie);
};

const toWei = (ether) => {
    return web3.utils.toWei(ether);
};

module.exports = {
    key,
    toEther,
    toWei
}

let balance = await Web3Helper.getBalance(addressETH)

console.log(balance + " ETH");

let gasPrice = await Web3Helper.getCurrentGasPrices();

console.log("gasPrice:", gasPrice);

let getBlocks = await Web3Helper.getBlock(10125842)

// The format which contains capital letters is called checksum format
if (getBlocks.hasOwnProperty('transactions')) {
    for (let i = 0; i < getBlocks.transactions.length; i++) {
        let details = await Web3Helper.getTransaction(getBlocks.transactions[i])
        if (details.hasOwnProperty('to') && details.to != null) {
            if (details.to.toLowerCase() === addressETH.toLowerCase()) {
                let val = await Web3Helper.valFromWei(details.value, 'ether');
                console.log('val', val)
            }
        }
    }
}
