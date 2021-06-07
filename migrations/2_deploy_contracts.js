const CaptureTheFlag = artifacts.require('CaptureTheFlag')


module.exports = async function (deployer) {
  const forwarder = require( '../build/gsn/Forwarder' ).address
  await deployer.deploy(CaptureTheFlag, forwarder)

  console.log( `Deployed CTF at ${CaptureTheFlag.address} with forwarder ${forwarder}`)
}
