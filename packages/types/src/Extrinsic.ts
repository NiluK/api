// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { KeyringPair } from '@polkadot/keyring/types';
import { AnyNumber, AnyU8a, Codec } from './types';

import { hexToU8a, isHex, isU8a, u8aToHex } from '@polkadot/util';
import { blake2AsU8a } from '@polkadot/util-crypto';

import Compact from './codec/Compact';
import Struct from './codec/Struct';
import Address from './Address';
import ExtrinsicSignature from './ExtrinsicSignature';
import Hash from './Hash';
import { FunctionMetadata } from './Metadata/Modules';
import Method from './Method';

type ExtrinsicValue = {
  method?: Method
  signature?: ExtrinsicSignature
};

/**
 * @name Extrinsic
 * @description
 * Representation of an Extrinsic in the system. It contains the actual call,
 * (optional) signature and encodes with an actual length prefix
 *
 * {@link https://github.com/paritytech/wiki/blob/master/Extrinsic.md#the-extrinsic-format-for-node}.
 *
 * Can be:
 * - signed, to create a transaction
 * - left as is, to create an inherent
 */
export default class Extrinsic extends Struct {
  constructor (value?: ExtrinsicValue | AnyU8a) {
    super({
      signature: ExtrinsicSignature,
      method: Method
    }, Extrinsic.decodeExtrinsic(value));
  }

  static decodeExtrinsic (value?: ExtrinsicValue | AnyU8a): object | Uint8Array {
    if (!value) {
      return {};
    } else if (isHex(value)) {
      // FIXME We manually add the length prefix for hex for now
      // https://github.com/paritytech/substrate/issues/889
      // Instead of the block below, it should simply be:
      // return Extrinsic.decodeExtrinsic(hexToU8a(value as string));
      const u8a = hexToU8a(value);

      return Extrinsic.decodeExtrinsic(
        Compact.addLengthPrefix(u8a)
      );
    } else if (isU8a(value)) {
      const [offset, length] = Compact.decodeU8a(value);

      return value.subarray(offset, offset + length.toNumber());
    }

    return value as any;
  }

  /**
   * @description The arguments passed to for the call, exposes args so it is compatible with [[Method]]
   */
  get args (): Array<Codec> {
    return this.method.args;
  }

  /**
   * @description The actual `[sectionIndex, methodIndex]` as used in the Method
   */
  get callIndex (): Uint8Array {
    return this.method.callIndex;
  }

  /**
   * @description The actual data for the Method
   */
  get data (): Uint8Array {
    return this.method.data;
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  get encodedLength (): number {
    const length = this.length;

    return length + Compact.encodeU8a(length).length;
  }

  /**
   * @description Convernience function, encodes the extrinsic and returns the actual hash
   */
  get hash (): Hash {
    return new Hash(
      blake2AsU8a(this.toU8a(), 256)
    );
  }

  /**
   * @description `true` id the extrinsic is signed
   */
  get isSigned (): boolean {
    return this.signature.isSigned;
  }

  /**
   * @description The length of the encoded value
   */
  get length (): number {
    return this.toU8a(true).length;
  }

  /**
   * @description The [[FunctionMetadata]] that describes the extrinsic
   */
  get meta (): FunctionMetadata {
    return this.method.meta;
  }

  /**
   * @description The [[Method]] this extrinsic wraps
   */
  get method (): Method {
    return this.get('method') as Method;
  }

  /**
   * @description The [[ExtrinsicSignature]]
   */
  get signature (): ExtrinsicSignature {
    return this.get('signature') as ExtrinsicSignature;
  }

  /**
   * @description Add an [[ExtrinsicSignature]] to the extrinsic (already generated)
   */
  addSignature (signer: Address | Uint8Array, signature: Uint8Array, nonce: AnyNumber, era?: Uint8Array): Extrinsic {
    this.signature.addSignature(signer, signature, nonce, era);

    return this;
  }

  /**
   * @description Sign the extrinsic with a specific keypair
   */
  sign (signerPair: KeyringPair, nonce: AnyNumber, blockHash: AnyU8a, era?: Uint8Array): Extrinsic {
    this.signature.sign(this.method, signerPair, nonce, blockHash, era);

    return this;
  }

  /**
   * @description Returns a hex string representation of the value
   */
  toHex (): string {
    return u8aToHex(this.toU8a());
  }

  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  toJSON (): any {
    return this.toHex();
  }

  /**
   * @description Encodes the value as a Uint8Array as per the parity-codec specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  toU8a (isBare?: boolean): Uint8Array {
    const encoded = super.toU8a();

    return isBare
      ? encoded
      : Compact.addLengthPrefix(encoded);
  }
}
