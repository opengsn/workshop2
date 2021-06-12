const CaptureTheFlag = artifacts.require('CaptureTheFlag')

module.exports = async function (deployer) {
  await deployer.deploy(CaptureTheFlag)
}
