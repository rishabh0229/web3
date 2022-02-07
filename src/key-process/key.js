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
