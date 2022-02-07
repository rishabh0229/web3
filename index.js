const app = require('./app')
const port = process.env.PORT
const { key, toEther, toWei } = require('./src/key-process/key')
const web3 = require('./src/utils/web3')

key()
const block = async () => await web3.eth.getBlockNumber()
// const getBlock = web3.eth.getBlock(10126250).then((res) => {
//     console.log('block detail', res)
// })
// const transactionCount = web3.eth.getTransactionCount("0x515d41c349df18bf39dc55f7cddc9ccd5c23760d").then((res) => {
//     console.log('transaction count: ', res)
// })
// const getTransactionDetail = web3.eth.getTransaction('0xab924f2273c5580a8b6d4244a4c14a3dd291652f2f2fc36f7839ee73be9bcb2b').then((res) => {
//     console.log('transaction detail: ', res)
// })

// const transactionReceipt = web3.eth.getTransactionReceipt('0xab924f2273c5580a8b6d4244a4c14a3dd291652f2f2fc36f7839ee73be9bcb2b').then((res) => {
//     console.log('transaction receipt: ', res)
// })

const gasValue = web3.eth.getGasPrice().then((res) => {
    console.log('gas value: ', res)
})

const value = toWei('0.02')
console.log('value', value)
const signTrans = web3.eth.signTransaction({
    from: "0x515d41c349df18bf39dc55f7cddc9ccd5c23760d",
    gasPrice: "20000000000",
    gas: "21000",
    to: '0x3535353535353535353535353535353535353535',
    value: "1000000000000000000",
    data: ""
}).then(console.log);
// const HDKey = require('hdkey')


app.listen(port, () => {
    console.log("server is on port: " + port)
})