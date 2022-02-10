const web3 = require('./utils/web3')
const Bignumber = require('bignumber.js')

const contractAddress = '0x11ac8a9aa37cb6093d7c2261c0a14211a96862d8'
const input = '0xa9059cbb0000000000000000000000002ad55704ddb36f3d57bbdf0e87cba73afe8918c70000000000000000000000000000000000000000000000004563918244f40000'
let tokenHexValue = input.slice(input.length - 64);
tokenHexValue = tokenHexValue.replace(/^0+/, "");
currency = contractAddress.toLowerCase()
// currency =
//     details.to.toLowerCase() ==
//         contractAddress.toLowerCase()
//         ? "USDT"
//         : "BTDN";
let amount = web3.utils.hexToNumberString(`0x${tokenHexValue}`);
console.log('amount', amount)
let tokenBalance =
    currency == "USDT"
        ? Bignumber(amount).dividedBy(1e6).dp(6, 1)
        : Bignumber(amount).dividedBy(1e18).dp(6, 1);
//--------------- get address from input fields -------------------
let addressString = input.substring(
    0,
    input.length - 64
);
let addressValue = addressString.slice(addressString.length - 40);
console.log('address value: ', addressValue)
let getAddress = web3.utils.toHex(addressValue);
console.log('getAddress', getAddress)
// web3.eth.defaultAccount = '0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe'
// const account = web3.eth.defaultAccount

// console.log('account', account)


// web3.eth.sendTransaction({
//     from: '0x6960B60636DDEE73Fd4E00AbB86Abfb1D17D6AEb',
//     to: '0x515d41c349df18bf39dc55f7cddc9ccd5c23760d',
//     value: '1000000000000000'
// }).on('transactionHash', function (hash) {
//     console.log('hash', hash)
// }).on('error', console.error)

web3.eth.accounts.signTransaction({
    from: "0x6960B60636DDEE73Fd4E00AbB86Abfb1D17D6AEb",
    gasPrice: "20000000000",
    gas: "21000",
    to: '0x515d41c349df18bf39dc55f7cddc9ccd5c23760d',
    value: "1000000000000000000",
    data: ""
}, process.env.PRIV_KEY).then(async (signedData) => {
    await web3.eth.sendSignedTransaction(signedData.rawTransaction, async (err, confirm) => {
        if (err) {
            console.log("error for signed transaction", err)
        }
        console.log("confirmation", confirm)
    })
});