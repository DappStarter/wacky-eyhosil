require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'jazz arch suspect venture stone royal payment unveil harvest ghost army gauge'; 
let testAccounts = [
"0x901ec02fb18e34daf891578939465f9994af9982c8f2450efcc3708e9eaa8bb3",
"0xbef6055cb09ad5df104a7069ee9d2834e6086d312b6d31304931999f248d77cd",
"0xe36b4c6c0c3fd45409948e3cb2b0b9efee331a8228df4f865f8e4e2312a935e0",
"0x8d8afe334c1529b923be680e17ef7bc6377921afe123c8b34bcd8bafcf34add7",
"0x2fd6d7c0f58c5437eb216152fb99788ed88615b75c4a06d4816c77501adf5b37",
"0xf01e1fce0ad4acbab6967a38980a3caf2d71250f910e2641dd419cf97c710c10",
"0xc8780253b5848037be1029ea7053a6093331ee0f051b33fc472ca494962d0fdc",
"0x244f79f5083529d55d4793d70eced7a8df343687b90fe6a1ae48148429834cea",
"0xb4a2e671cea0e0e5a80df9c71bfa3021792f9a1e5d0ed328d7e5120161898c19",
"0xf41115aa90c73dafb3b1a7fbb7be120823ac249990cf0582e3fdc38543a60d07"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

