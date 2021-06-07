# GSN v2 integration workshop

This sample dapp emits an event with the last account that clicked on the "capture the flag" button.
We will integrate this dapp to work gaslessly with GSN v2. This will allow an externally owned account without ETH to capture the flag by signing a meta transaction.

Integration as GitHub pull requests:

1. [Basic: Minimum viable GSN integration](https://github.com/opengsn/workshop/pull/1/files)
2. [Advanced: Write your own custom Paymaster](https://github.com/opengsn/workshop/pull/2/files_)

Note: on testnet we maintain a public service "pay for everything" paymaster so writing your own is not strictly required. On mainnet we will deploy an autonomous token paymaster that allow users to pay for gas in tokens that can be exchanged for ETH on Uniswap. Dapps will want to develop their own custom paymaster in order, for example to subsidize gas fees for new users during the onboarding process. 

## Further reading

GSNv2 integration tutorial:

https://docs.opengsn.org/tutorials

Documentation explaining how everything works:

https://docs.opengsn.org/
