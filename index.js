const app = require('./app')
const port = process.env.PORT
const { key, toEther, toWei } = require('./src/key-process/key')
const web3 = require('./src/utils/web3')

key()

const contactAddress = '0x2Ad55704Ddb36f3d57bbDF0E87cba73Afe8918C7'
const ethAddress = '0x515d41c349df18bf39dc55f7cddc9ccd5c23760d'
const a = contactAddress.toLowerCase()
console.log('cont', a.toString(), typeof (a))

const block = async () => await web3.eth.getBlockNumber()

const balance = web3.eth.getBalance('0x515d41c349df18bf39dc55f7cddc9ccd5c23760d').then((res) => {
    console.log(`eth balance is ${toEther(res)} ETH`)
})



const getBlock = web3.eth.getBlock(10126250, true).then((res) => {
    // console.log('block detail of address', res.transactions)
    const match = res.transactions.filter((element) => (element.to.toLowerCase() === ethAddress.toLowerCase()))
    console.log('matched transaction', match)
})
const getBlockOfToken = web3.eth.getBlock(10132778, true).then((res) => {
    console.log('block detail of contract', res.transactions.length)
    // if (res.transactions[i].hasOwnProperty('to') && res.transactions[i].to != null) {
    const match = res.transactions.filter((element) => element.to != null).filter((element) => (element.to.toLowerCase() === '0x11ac8a9aa37cb6093d7c2261c0a14211a96862d8'))
    console.log('matched array for contact add:', match.length, match)




    // if (!match) {
    //     console.log('not matched')
    // }
    // console.log('matched transaction', match)
})
// const transactionCount = web3.eth.getTransactionCount("0x515d41c349df18bf39dc55f7cddc9ccd5c23760d").then((res) => {
//     console.log('transaction count: ', res)
// })
// const getTransactionDetail = web3.eth.getTransaction('0xab924f2273c5580a8b6d4244a4c14a3dd291652f2f2fc36f7839ee73be9bcb2b').then((res) => {
//     console.log('transaction detail: ', res)
// })

// const transactionReceipt = web3.eth.getTransactionReceipt('0xab924f2273c5580a8b6d4244a4c14a3dd291652f2f2fc36f7839ee73be9bcb2b').then((res) => {
//     console.log('transaction receipt: ', res)
// })

// const gasValue = web3.eth.getGasPrice().then((res) => {
//     console.log('gas value: ', res)
// })

// const value = toWei('0.02')
// console.log('value', value)
// const signTrans = web3.eth.signTransaction({
//     from: "0x515d41c349df18bf39dc55f7cddc9ccd5c23760d",
//     gasPrice: "20000000000",
//     gas: "21000",
//     to: '0x3535353535353535353535353535353535353535',
//     value: "1000000000000000000",
//     data: ""
// }).then(console.log);
// const HDKey = require('hdkey')



app.listen(port, () => {
    console.log("server is on port: " + port)
})