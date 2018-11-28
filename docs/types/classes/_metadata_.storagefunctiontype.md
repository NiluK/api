

# Hierarchy

↳  [EnumType](_codec_enumtype_.enumtype.md)< [Type](_type_.type.md) &#124; [StorageFunctionType$Map](_metadata_.storagefunctiontype_map.md)>

**↳ StorageFunctionType**

# Implements

* `Codec`

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new StorageFunctionType**(value?: *`any`*, index?: * `undefined` &#124; `number`*): [StorageFunctionType](_metadata_.storagefunctiontype.md)

*Overrides [EnumType](_codec_enumtype_.enumtype.md).[constructor](_codec_enumtype_.enumtype.md#constructor)*

*Defined in [Metadata.ts:237](https://github.com/polkadot-js/api/blob/ecdd53e/packages/types/src/Metadata.ts#L237)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `any` |
| `Optional` index |  `undefined` &#124; `number`|

**Returns:** [StorageFunctionType](_metadata_.storagefunctiontype.md)

___

# Accessors

<a id="asmap"></a>

##  asMap

getasMap(): [StorageFunctionType$Map](_metadata_.storagefunctiontype_map.md)

*Defined in [Metadata.ts:249](https://github.com/polkadot-js/api/blob/ecdd53e/packages/types/src/Metadata.ts#L249)*

**Returns:** [StorageFunctionType$Map](_metadata_.storagefunctiontype_map.md)

___
<a id="astype"></a>

##  asType

getasType(): [Type](_type_.type.md)

*Defined in [Metadata.ts:253](https://github.com/polkadot-js/api/blob/ecdd53e/packages/types/src/Metadata.ts#L253)*

**Returns:** [Type](_type_.type.md)

___
<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[encodedLength](_codec_enumtype_.enumtype.md#encodedlength)*

*Defined in [codec/EnumType.ts:93](https://github.com/polkadot-js/api/blob/ecdd53e/packages/types/src/codec/EnumType.ts#L93)*

**Returns:** `number`

___
<a id="ismap"></a>

##  isMap

getisMap(): `boolean`

*Defined in [Metadata.ts:245](https://github.com/polkadot-js/api/blob/ecdd53e/packages/types/src/Metadata.ts#L245)*

**Returns:** `boolean`

___
<a id="isnull"></a>

##  isNull

getisNull(): `boolean`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[isNull](_codec_enumtype_.enumtype.md#isnull)*

*Defined in [codec/EnumType.ts:81](https://github.com/polkadot-js/api/blob/ecdd53e/packages/types/src/codec/EnumType.ts#L81)*

**Returns:** `boolean`

___
<a id="type"></a>

##  type

gettype(): `string`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[type](_codec_enumtype_.enumtype.md#type)*

*Defined in [codec/EnumType.ts:85](https://github.com/polkadot-js/api/blob/ecdd53e/packages/types/src/codec/EnumType.ts#L85)*

**Returns:** `string`

___
<a id="value"></a>

##  value

getvalue(): `Codec`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[value](_codec_enumtype_.enumtype.md#value)*

*Defined in [codec/EnumType.ts:89](https://github.com/polkadot-js/api/blob/ecdd53e/packages/types/src/codec/EnumType.ts#L89)*

**Returns:** `Codec`

___

# Methods

<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[toHex](_codec_enumtype_.enumtype.md#tohex)*

*Defined in [codec/EnumType.ts:97](https://github.com/polkadot-js/api/blob/ecdd53e/packages/types/src/codec/EnumType.ts#L97)*

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[toJSON](_codec_enumtype_.enumtype.md#tojson)*

*Defined in [codec/EnumType.ts:101](https://github.com/polkadot-js/api/blob/ecdd53e/packages/types/src/codec/EnumType.ts#L101)*

**Returns:** `any`

___
<a id="tonumber"></a>

##  toNumber

▸ **toNumber**(): `number`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[toNumber](_codec_enumtype_.enumtype.md#tonumber)*

*Defined in [codec/EnumType.ts:105](https://github.com/polkadot-js/api/blob/ecdd53e/packages/types/src/codec/EnumType.ts#L105)*

**Returns:** `number`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Overrides [EnumType](_codec_enumtype_.enumtype.md).[toString](_codec_enumtype_.enumtype.md#tostring)*

*Defined in [Metadata.ts:257](https://github.com/polkadot-js/api/blob/ecdd53e/packages/types/src/Metadata.ts#L257)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[toU8a](_codec_enumtype_.enumtype.md#tou8a)*

*Defined in [codec/EnumType.ts:113](https://github.com/polkadot-js/api/blob/ecdd53e/packages/types/src/codec/EnumType.ts#L113)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___
<a id="decodeenumtype"></a>

## `<Static>` decodeEnumType

▸ **decodeEnumType**<`T`>(def: *`TypesDef`*, value?: *`any`*, index?: * `number` &#124; [EnumType](_codec_enumtype_.enumtype.md)<`T`>*): `object`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[decodeEnumType](_codec_enumtype_.enumtype.md#decodeenumtype)*

*Defined in [codec/EnumType.ts:44](https://github.com/polkadot-js/api/blob/ecdd53e/packages/types/src/codec/EnumType.ts#L44)*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| def | `TypesDef` |
| `Optional` value | `any` |
| `Optional` index |  `number` &#124; [EnumType](_codec_enumtype_.enumtype.md)<`T`>|

**Returns:** `object`

___

