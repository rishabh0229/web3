let contractAddress = "0x11ac8a9aa37cb6093d7c2261c0a14211a96862d8";
let contractAddressDecimalPoint = 5;

// watch for erc20 token transfer
if (getBlocks.hasOwnProperty("transactions")) {
    for (let i = 0; i < getBlocks.transactions.length; i++) {
        if (
            getBlocks.transactions[i].hasOwnProperty("to") &&
            getBlocks.transactions[i].to != null
        ) {
            //   console.log("getBlocks.transactions[i]", getBlocks.transactions[i]);
            if (
                getBlocks.transactions[i].to.toLowerCase() ===
                contractAddress.toLowerCase()
            ) {
                //---------------  get token amount from input fields --------------
                const result = web3.eth.abi.decodeParameters(
                    [
                        { internalType: "address", name: "recipient", type: "address" },
                        { internalType: "uint256", name: "amount", type: "uint256" },
                    ],
                    getBlocks.transactions[i].d.slice(10)
                );
                console.log(result, 'result')
                console.log("recipient", result.recipient);
                console.log("amount", web3.utils.fromWei(result.amount, "ether") / contractAddressDecimalPoint);
            }
        }
    }
}