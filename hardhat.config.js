const { PROJECT_ID, PRIVATE_KEY } = require("./secret");

require("@nomiclabs/hardhat-waffle");

const projectId = PROJECT_ID;
const privateKey = PRIVATE_KEY;

module.exports = {
  networks: {
    hardhat: { chainId: 1337 },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts: [privateKey],
    },
    mainnet: {
      url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
      accounts: [privateKey],
    },
  },
  solidity: "0.8.4",
};
