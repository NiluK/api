

# Hierarchy

↳  [EnumType](_codec_enumtype_.enumtype.md)< [Type](_type_.type.md) &#124; [StorageFunctionType$Map](_metadata_modules_.storagefunctiontype_map.md)>

**↳ StorageFunctionType**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new StorageFunctionType**(value?: *`any`*, index?: * `undefined` &#124; `number`*): [StorageFunctionType](_metadata_modules_.storagefunctiontype.md)

*Overrides [EnumType](_codec_enumtype_.enumtype.md).[constructor](_codec_enumtype_.enumtype.md#constructor)*

*Defined in [Metadata/Modules.ts:153](https://github.com/polkadot-js/api/blob/3c8b3d3/packages/types/src/Metadata/Modules.ts#L153)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `any` |
| `Optional` index |  `undefined` &#124; `number`|

**Returns:** [StorageFunctionType](_metadata_modules_.storagefunctiontype.md)

___

# Accessors

<a id="asmap"></a>

##  asMap

getasMap(): [StorageFunctionType$Map](_metadata_modules_.storagefunctiontype_map.md)

*Defined in [Metadata/Modules.ts:171](https://github.com/polkadot-js/api/blob/3c8b3d3/packages/types/src/Metadata/Modules.ts#L171)*

*__description__*: The value as a mapped value

**Returns:** [StorageFunctionType$Map](_metadata_modules_.storagefunctiontype_map.md)

___
<a id="astype"></a>

##  asType

getasType(): [Type](_type_.type.md)

*Defined in [Metadata/Modules.ts:178](https://github.com/polkadot-js/api/blob/3c8b3d3/packages/types/src/Metadata/Modules.ts#L178)*

*__description__*: The value as a [Type](_codec_struct_.struct.md#type) value

**Returns:** [Type](_type_.type.md)

___
<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[encodedLength](_codec_enumtype_.enumtype.md#encodedlength)*

*Defined in [codec/EnumType.ts:87](https://github.com/polkadot-js/api/blob/3c8b3d3/packages/types/src/codec/EnumType.ts#L87)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="ismap"></a>

##  isMap

getisMap(): `boolean`

*Defined in [Metadata/Modules.ts:164](https://github.com/polkadot-js/api/blob/3c8b3d3/packages/types/src/Metadata/Modules.ts#L164)*

*__description__*: `true` if the storage entry is a map

**Returns:** `boolean`

___
<a id="isnone"></a>

##  isNone

getisNone(): `boolean`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[isNone](_codec_enumtype_.enumtype.md#isnone)*

*Defined in [codec/EnumType.ts:94](https://github.com/polkadot-js/api/blob/3c8b3d3/packages/types/src/codec/EnumType.ts#L94)*

*__description__*: Checks if the Enum points to a [Null](_null_.null.md) type

**Returns:** `boolean`

___
<a id="isnull"></a>

##  isNull

getisNull(): `boolean`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[isNull](_codec_enumtype_.enumtype.md#isnull)*

*Defined in [codec/EnumType.ts:101](https://github.com/polkadot-js/api/blob/3c8b3d3/packages/types/src/codec/EnumType.ts#L101)*

*__description__*: Checks if the Enum points to a [Null](_null_.null.md) type (deprecated, use isNone)

**Returns:** `boolean`

___
<a id="type"></a>

##  type

gettype(): `string`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[type](_codec_enumtype_.enumtype.md#type)*

*Defined in [codec/EnumType.ts:108](https://github.com/polkadot-js/api/blob/3c8b3d3/packages/types/src/codec/EnumType.ts#L108)*

*__description__*: The name of the type this enum value represents

**Returns:** `string`

___
<a id="value"></a>

##  value

getvalue(): [Codec](../interfaces/_types_.codec.md)

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[value](_codec_enumtype_.enumtype.md#value)*

*Defined in [codec/EnumType.ts:115](https://github.com/polkadot-js/api/blob/3c8b3d3/packages/types/src/codec/EnumType.ts#L115)*

*__description__*: The value of the enum

**Returns:** [Codec](../interfaces/_types_.codec.md)

___

# Methods

<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toHex](../interfaces/_types_.codec.md#tohex)*

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[toHex](_codec_enumtype_.enumtype.md#tohex)*

*Defined in [codec/EnumType.ts:122](https://github.com/polkadot-js/api/blob/3c8b3d3/packages/types/src/codec/EnumType.ts#L122)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[toJSON](_codec_enumtype_.enumtype.md#tojson)*

*Defined in [codec/EnumType.ts:129](https://github.com/polkadot-js/api/blob/3c8b3d3/packages/types/src/codec/EnumType.ts#L129)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tonumber"></a>

##  toNumber

▸ **toNumber**(): `number`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[toNumber](_codec_enumtype_.enumtype.md#tonumber)*

*Defined in [codec/EnumType.ts:136](https://github.com/polkadot-js/api/blob/3c8b3d3/packages/types/src/codec/EnumType.ts#L136)*

*__description__*: Returns the number representation for the value

**Returns:** `number`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Overrides [EnumType](_codec_enumtype_.enumtype.md).[toString](_codec_enumtype_.enumtype.md#tostring)*

*Defined in [Metadata/Modules.ts:185](https://github.com/polkadot-js/api/blob/3c8b3d3/packages/types/src/Metadata/Modules.ts#L185)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[toU8a](_codec_enumtype_.enumtype.md#tou8a)*

*Defined in [codec/EnumType.ts:151](https://github.com/polkadot-js/api/blob/3c8b3d3/packages/types/src/codec/EnumType.ts#L151)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="decodeenumtype"></a>

## `<Static>` decodeEnumType

▸ **decodeEnumType**<`T`>(def: *`TypesDef`*, value?: *`any`*, index?: * `number` &#124; [EnumType](_codec_enumtype_.enumtype.md)<`T`>*): `object`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[decodeEnumType](_codec_enumtype_.enumtype.md#decodeenumtype)*

*Defined in [codec/EnumType.ts:47](https://github.com/polkadot-js/api/blob/3c8b3d3/packages/types/src/codec/EnumType.ts#L47)*

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

