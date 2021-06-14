const CaptureTheFlag = artifacts.require('CaptureTheFlag')
const WhitelistPaymaster = artifacts.require('WhitelistPaymaster')
const RelayHub = artifacts.require('RelayHub')


module.exports = async function (deployer) {
  const forwarder = require( '../build/gsn/Forwarder' ).address
  await deployer.deploy(CaptureTheFlag, forwarder)

  await deployer.deploy(WhitelistPaymaster)
  const relayHubAddress = require('../build/gsn/RelayHub.json').address
  const paymaster = await WhitelistPaymaster.deployed()
  await paymaster.setRelayHub(relayHubAddress)
  await paymaster.setTrustedForwarder(forwarder)
  // This is the first ganache address, when started with "ganache-cli -d"
  await paymaster.whitelistSender('0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1')

  // to add more addresses to the whitelist, open truffle console and run:
  // const pm = await WhitelistPaymaster.deployed()
  // pm.whitelistSender('0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1')

  console.log(`RelayHub(${relayHubAddress}) set on Paymaster(${WhitelistPaymaster.address})`)
  const relayHub = await RelayHub.at(relayHubAddress)
  await relayHub.depositFor(paymaster.address, {value: 1e18.toString()})
  console.log(`1 ETH deposited to Paymaster(${WhitelistPaymaster.address})`)
}
