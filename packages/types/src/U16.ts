// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyNumber } from './types';

import UInt from './codec/UInt';

/**
 * @name U16
 * @description
 * An 16-bit number
 */
export default class U16 extends UInt {
  constructor (value?: AnyNumber) {
    super(value, 16, false);
  }
}
