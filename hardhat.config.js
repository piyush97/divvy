require("@nomiclabs/hardhat-waffle");
const projectId = "25ed4acad7484ff8929af28d7857b339";

module.exports = {
  networks: {
    hardhat: { chainId: 1337 },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts: [],
    },
    mainnet: {
      url: "https://polygon-mainnet.infura.io/v3/${projectId}",
      accounts: [],
    },
  },
  solidity: "0.8.4",
};
