require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid climb frame sugar fire ridge remember unusual harvest cricket bubble usual'; 
let testAccounts = [
"0xacc1f75cc79817b90d4cb995ce5f0e4e89aa56c9fed112c61143b928f3bed35d",
"0x4240f829b849a3136c1f3bff59fe3272bd9370a47922767083ec0e9070bf748d",
"0xffbbe37b63c2ef6e0e47f324cbe51d7abfdbf4cc4cd44b4b5008146e5d981dc5",
"0x0bfa811665129383f8c12030a5532eb90dcb30a4d6766a5b61cbd9b1e3c8b4dd",
"0x7409858e4f22950ada5c89387bd73198a5d6d28cbcebc4cce0f1445a1141797a",
"0xe36f4595eb4c65511811288dd780fc3769081027625dfb84922d629805752ec3",
"0xe5bb3f4986aa2ce4236d90682b2b71287e24a230a210608a72c88b234933dec4",
"0xbe99610e3a36e6de5a66f72cc44804d5065851c1ab56e69ea10535012650655c",
"0x468f89b90130f4eae513471b47fe44cd196a9ba8a946d490beb08d0e60132422",
"0x793d966e0a8a82d1da73f803d9fbc069922cacd22c955edd92ef5cd9287f525c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

