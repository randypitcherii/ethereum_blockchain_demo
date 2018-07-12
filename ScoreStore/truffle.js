/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      gas: 1828127,
      network_id: "*" // Match any network id
    },
    production: {
      host: "blch62-dns-reg1.eastus.cloudapp.azure.com",
      port: 8545,
      gas: 5000000,
      network_id: "*" // Match any network id
    }
  }
};
