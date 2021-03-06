// Copyright 2017-2018 @polkadot/storage authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Compact from '@polkadot/types/codec/Compact';
import { createType } from '@polkadot/types/codec';
import { StorageFunctionMetadata } from '@polkadot/types/Metadata/Modules';
import { StorageFunction } from '@polkadot/types/StorageKey';
import { Text } from '@polkadot/types/index';
import { assert, isNull, isUndefined, stringLowerFirst, stringToU8a, u8aConcat } from '@polkadot/util';
import { xxhashAsU8a } from '@polkadot/util-crypto';

export interface CreateItemOptions {
  isUnhashed?: boolean;
  method?: string;
}

/**
 * From the schema of a function in the module's storage, generate the function
 * that will return the correct storage key.
 *
 * @param schema - The function's definition schema to create the function from.
 * The schema is taken from state_getMetadata.
 * @param options - Additional options when creating the function. These options
 * are not known at runtime (from state_getMetadata), they need to be supplied
 * by us manually at compile time.
 */
export default function createFunction (section: Text | string, method: Text | string, meta: StorageFunctionMetadata, options: CreateItemOptions = {}): StorageFunction {
  let storageFn: any;

  // NOTE Here we assume everything in the 'Substrate' prefix is unhashed. (Despite not passing empty, i.e. '',
  // the actual "prefix + name" below won't work even when we have an empty prefix.) For now, this is a safe
  // assumption, but will break if the base substrate keys employ hashing as well
  if (options.isUnhashed) {
    storageFn = (): Uint8Array =>
      Compact.addLengthPrefix(stringToU8a(method.toString()));
  } else {
    // TODO Find better type than any
    // Can only have zero or one argument:
    // - storage.balances.freeBalance(address)
    // - storage.timestamp.blockPeriod()
    storageFn = (arg?: any): Uint8Array => {
      const key = stringToU8a(`${section.toString()} ${method.toString()}`);

      if (!meta.type.isMap) {
        return Compact.addLengthPrefix(
          xxhashAsU8a(key, 128)
        );
      }

      assert(!isUndefined(arg) && !isNull(arg), `${meta.name} expects one argument`);

      const type = meta.type.asMap.key.toString(); // Argument type, as string
      const param = createType(type, arg).toU8a(true);

      // StorageKey is a Bytes, so is length-prefixed
      return Compact.addLengthPrefix(
        xxhashAsU8a(u8aConcat(key, param), 128)
      );
    };
  }

  storageFn.meta = meta;
  storageFn.method = stringLowerFirst((options.method || method).toString());
  storageFn.section = stringLowerFirst(section.toString());
  storageFn.toJSON = (): any => meta.toJSON();

  return storageFn as StorageFunction;
}
