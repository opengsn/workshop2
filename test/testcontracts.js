const CaptureTheFlag = artifacts.require('CaptureTheFlag')

const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'

contract("CaptureTheFlag", async accounts => {

	it ('Runs without GSN', async () => {
		const captureFlagContract = await CaptureTheFlag.new();

		const res = await captureFlagContract.captureTheFlag();
		assert.equal(res.logs[0].event, "FlagCaptured", "Wrong event");
		assert.equal(res.logs[0].args.previousHolder, ZERO_ADDRESS, "Wrong previous flag holder");
		assert.equal(res.logs[0].args.currentHolder, accounts[0], "Wrong current flag holder");

		const res2 = await captureFlagContract.captureTheFlag({from: accounts[1]});
		assert.equal(res2.logs[0].event, "FlagCaptured", "Wrong event");
		assert.equal(res2.logs[0].args.previousHolder, accounts[0], "Wrong previous flag holder");
		assert.equal(res2.logs[0].args.currentHolder, accounts[1], "Wrong current flag holder");
	});

});
