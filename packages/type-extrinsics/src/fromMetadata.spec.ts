// Copyright 2017-2018 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Metadata from '@polkadot/types/Metadata';
import json from '@polkadot/types/Metadata/static';

import fromMetadata from './fromMetadata';

// Use the pre-generated metadata
const metadata = new Metadata(json);
const newExtrinsics = fromMetadata(metadata);

describe('fromMetadata', () => {
  it('should throw if an incorrect number of args is supplied', () => {
    expect(() => newExtrinsics.balances.setBalance()).toThrowError(/expects 3 arguments/);
  });

  it('should return a value if the storage function does not expect an argument', () => {
    expect(() => newExtrinsics.balances.setBalance('5C62W7ELLAAfix9LYrcx5smtcffbhvThkM5x7xfMeYXCt72s', 2, 3)).not.toThrow();
  });

  it('should return properly-encoded transactions', () => {
    expect(newExtrinsics.timestamp.set([10101]).toU8a()).toEqual(
      new Uint8Array([
        // length (encoded)
        11 << 2,
        // version, no signature
        1,
        // index
        2, 0,
        // values
        117, 39, 0, 0, 0, 0, 0, 0
      ])
    );
  });
});
