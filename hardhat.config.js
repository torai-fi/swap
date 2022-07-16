require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-truffle5");
// require("hardhat-gas-reporter");
require('solidity-coverage')


// const keys = require('./dev-keys.json');

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            allowUnlimitedContractSize: false,
            // forking: {
            //     //url: "https://mainnet.infura.io/v3/" + keys.infuraKey,
            //     url: "https://eth-mainnet.alchemyapi.io/v2/" + keys.alchemyKey,
            //     blockNumber: 11807770, // <-- edit here
            // }

        },
        testnet: {
            url: 'https://data-seed-prebsc-1-s1.binance.org:8545',
            chainId: 97,
            // gasPrice: 20000000000,
            accounts: ['a169188d442a35eff327a448d864d82523f95e07a20e76247230ba38c596d0dd'],
        },
         evmos: {
            url: 'https://ethereum.rpc.evmos.dev',
            chainId: 9000,
            // gasPrice: 20000000000,
            accounts: ['a169188d442a35eff327a448d864d82523f95e07a20e76247230ba38c596d0dd'],
        },
        hecotest: {
            url: 'https://http-testnet.hecochain.com',
            chainId: 256,
            // gasPrice: 20000000000,
            accounts: ['a169188d442a35eff327a448d864d82523f95e07a20e76247230ba38c596d0dd'],
        },
         kccMainnet: {
            url: ' https://rpc-mainnet.kcc.network',
            chainId: 321,
            // gasPrice: 20000000000,
            accounts: ['028c428a541f66d73f8ebc5e7218f4ac35460288c0c022f6a3e056fa8462ebfb'],
        },
         kccTest: {
            url: 'https://rpc-testnet.kcc.network',
            chainId: 322,
            accounts: ['a169188d442a35eff327a448d864d82523f95e07a20e76247230ba38c596d0dd']
            // gasPrice: 20000000000,
            // accounts: {mnemonic: mnemonic}
        },
    },
    paths: {
        artifacts: './artifacts',
        cache: './cache',
        sources: './contracts',
        tests: './test',
    },
    solidity: {
        version: "0.8.10",
        settings: {
            optimizer: {
                enabled: true,
                runs: 200,
            },
            metadata: {
                // do not include the metadata hash, since this is machine dependent
                // and we want all generated code to be deterministic
                // https://docs.soliditylang.org/en/v0.7.6/metadata.html
                bytecodeHash: 'none',
            },
        },
    },
    mocha: {
        timeout: 2000000
    },
    // gasReporter: {
    //     enabled: (process.env.REPORT_GAS) ? true : false,
    //     currency: 'USD'
    // }
};