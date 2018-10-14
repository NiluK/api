// Import the Api
const { ApiPromise } = require('@polkadot/api');
const testingPairs = require('@polkadot/keyring/testingPairs').default;

// Create an instance of the keyring that includes test accounts
const keyring = testingPairs();

// Known account we want to use (available on dev chain, with funds)
const addressAlice = keyring.alice.address();

export default async function exampleApiPromise () {
  // Create an await for the API
  const api = await ApiPromise.create();

  // Retrieve the initial balance. Since the call has no callback, it is simply a promise
  // that resolves to the current on-chain value
  let previous = await api.query.balances.freeBalance(addressAlice);

  console.log(`${addressAlice} has a ${previous} balance`);
  console.log(`You may leave this example running and start example 06 or transfer any value to ${addressAlice}`);

  // Here we subscribe to any balance changes and update the on-screen value.
  // Use the Storage chain state (runtime) Node Interface.
  api.query.balances.freeBalance(addressAlice, (current) => {
    // Calculate the delta
    const change = current.sub(previous);

    // Only display positive value changes (Since we are pulling `previous` above already,
    // the initial balance change will also be zero)
    if (change.isZero()) {
      return;
    }

    previous = current;

    console.log(`Balance of ${Alice}: ${current}, ${change} change`);
  });
}