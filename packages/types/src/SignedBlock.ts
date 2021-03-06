// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyU8a } from './types';

import Struct from './codec/Struct';
import Block, { BlockValue } from './Block';
import Justification from './Justification';

type SignedBlockValue = {
  block?: BlockValue,
  justification?: AnyU8a
};

/**
 * @name SignedBlock
 * @description
 * A [[Block]] that has been signed and contains a [[Justification]]
 */
export default class SignedBlock extends Struct {
  constructor (value?: SignedBlockValue | Uint8Array) {
    super({
      block: Block,
      justification: Justification
    }, value);
  }

  /**
   * @description The wrapped [[Block]]
   */
  get block (): Block {
    return this.get('block') as Block;
  }

  /**
   * @description The wrapped [[Justification]]
   */
  get justification (): Justification {
    return this.get('justification') as Justification;
  }
}
