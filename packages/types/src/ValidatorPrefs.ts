// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyNumber } from './types';

import Struct from './codec/Struct';
import Balance from './Balance';
import U32 from './U32';

type ValidatorPrefsValue = {
  unstakeThreshold?: AnyNumber,
  validatorPayment?: AnyNumber
};

/**
 * @name ValidatorPrefs
 * @description
 * Validator preferences
 */
export default class ValidatorPrefs extends Struct {
  constructor (value?: ValidatorPrefsValue | Uint8Array) {
    super({
      unstakeThreshold: U32,
      validatorPayment: Balance
    }, value);
  }

  /**
   * @description The unstake threshold as [[U32]]
   */
  get unstakeThreshold (): U32 {
    return this.get('unstakeThreshold') as U32;
  }

  /**
   * @description The payment config for the validator as [[Balance]]
   */
  get validatorPayment (): Balance {
    return this.get('validatorPayment') as Balance;
  }
}
