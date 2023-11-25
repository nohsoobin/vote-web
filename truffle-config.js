module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: 5777, // Match any network id
    },
    develop: {
      port: 7545,
    },
  },
  compilers: {
    solc: {
      version: "0.8.19", // 사용할 Solidity 버전으로 업데이트
      // 또는 "0.5.16" 등 원하는 버전으로 지정
    },
  },
};
