const Web3 = require('web3');

let web3

// web3.eth.getBlockNumber().then(block => {
//     console.log('ETH Latest Block: ', block);
// }).catch(error => {
//     console.log('Web3 Connection Failed: ', error);
// });
if (typeof web3 !== "undefined") {
    web3 = new Web3(web3.currentProvider);
} else {
    web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/2abe34a31a204a3f9ecdcc928d3ecc97"));
    web3.eth
        .getBlockNumber()
        .then((block) => {
            console.log("Current Block is ====> ", block);
        })
        .catch((er) => {
            console.log("Try again connection failed", er);
        });
}

module.exports = web3;
