// Import the API Rx
const { ApiRx } = require('@polkadot/api');
const { WsProvider } = require('@polkadot/rpc-provider');

const wsProvider = new WsProvider('ws://127.0.0.1:9944');

// Known account we want to use (available on dev chain, with funds)
const Alice = '5GoKvZWG5ZPYL1WUovuHW3zJBWBP5eT8CbqjdRY4Q6iMaDtZ';

async function main () {
  let previous = null;

  // Here we pass the (optional) provider
  ApiRx.create(wsProvider).subscribe((api) => {
    console.log(`${Alice} has ${previous || '???'} previous balance`);
    console.log(`You may leave this example running and start example 06 ` +
                `or transfer any value to Alice at ${Alice}`);

    // Here we subscribe to any balance changes and update the on-screen value.
    // Use the Storage chain state (runtime) Node Interface.
    api.query.balances.freeBalance(Alice).subscribe((current) => {
      // Calculate the delta
      const change = current.sub(previous);

      // Only display positive value changes (Since we are pulling `previous` above
      // already, the initial balance change will also be zero)
      if (change.isZero()) {
        return;
      }

      previous = current;

      console.log(`Balance of Alice at ${Alice} is ${current}. It changed by: ${change}`);
    });
  });
}

main().catch(console.error);