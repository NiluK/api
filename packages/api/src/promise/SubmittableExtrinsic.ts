// Copyright 2017-2018 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { KeyringPair } from '@polkadot/keyring/types';
import { AnyNumber, AnyU8a } from '@polkadot/types/types';
import { ApiPromiseInterface } from './types';

import { Extrinsic, ExtrinsicStatus, Hash } from '@polkadot/types/index';

export default class SubmittableExtrinsic extends Extrinsic {
  private _api: ApiPromiseInterface;

  constructor (api: ApiPromiseInterface, extrinsic: Extrinsic) {
    super(extrinsic);

    this._api = api;
  }

  send (statusCb?: (status: ExtrinsicStatus) => any): Promise<Hash> {
    if (!statusCb || !this._api.hasSubscriptions) {
      return this._api.rpc.author.submitExtrinsic(this);
    }

    return this._api.rpc.author.submitAndWatchExtrinsic(this, statusCb);
  }

  sign (signerPair: KeyringPair, nonce: AnyNumber, blockHash?: AnyU8a): SubmittableExtrinsic {
    super.sign(signerPair, nonce, blockHash || this._api.genesisHash);

    return this;
  }
}
