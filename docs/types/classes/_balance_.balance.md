

*__name__*: Balance

*__description__*: The Substrate Balance representation as a [U128](_u128_.u128.md).

# Hierarchy

↳  [U128](_u128_.u128.md)

**↳ Balance**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Balance**(value?: *[AnyNumber](../modules/_types_.md#anynumber)*): [Balance](_balance_.balance.md)

*Inherited from [U128](_u128_.u128.md).[constructor](_u128_.u128.md#constructor)*

*Overrides [UInt](_codec_uint_.uint.md).[constructor](_codec_uint_.uint.md#constructor)*

*Defined in [U128.ts:14](https://github.com/polkadot-js/api/blob/3c8b3d3/packages/types/src/U128.ts#L14)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | [AnyNumber](../modules/_types_.md#anynumber) |

**Returns:** [Balance](_balance_.balance.md)

___

# Accessors

<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Inherited from [UInt](_codec_uint_.uint.md).[encodedLength](_codec_uint_.uint.md#encodedlength)*

*Defined in [codec/UInt.ts:57](https://github.com/polkadot-js/api/blob/3c8b3d3/packages/types/src/codec/UInt.ts#L57)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___

# Methods

<a id="abs"></a>

##  abs

▸ **abs**(): `BN`

*Inherited from BN.abs*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:254*

*__description__*: absolute value

**Returns:** `BN`

___
<a id="add"></a>

##  add

▸ **add**(b: *`BN`*): `BN`

*Inherited from BN.add*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:264*

*__description__*: addition

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | `BN` |

**Returns:** `BN`

___
<a id="addn"></a>

##  addn

▸ **addn**(b: *`number`*): `BN`

*Inherited from BN.addn*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:274*

*__description__*: addition

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | `number` |

**Returns:** `BN`

___
<a id="and"></a>

##  and

▸ **and**(b: *`BN`*): `BN`

*Inherited from BN.and*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:395*

*__description__*: and

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | `BN` |

**Returns:** `BN`

___
<a id="andln"></a>

##  andln

▸ **andln**(b: *`number`*): `BN`

*Inherited from BN.andln*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:415*

*__description__*: and (NOTE: `andln` is going to be replaced with `andn` in future)

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | `number` |

**Returns:** `BN`

___
<a id="bincn"></a>

##  bincn

▸ **bincn**(b: *`number`*): `BN`

*Inherited from BN.bincn*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:499*

*__description__*: add `1 << b` to the number

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | `number` |

**Returns:** `BN`

___
<a id="bitlength"></a>

##  bitLength

▸ **bitLength**(): [UIntBitLength](../modules/_codec_uint_.md#uintbitlength)

*Inherited from [UInt](_codec_uint_.uint.md).[bitLength](_codec_uint_.uint.md#bitlength)*

*Overrides BN.bitLength*

*Defined in [codec/UInt.ts:64](https://github.com/polkadot-js/api/blob/3c8b3d3/packages/types/src/codec/UInt.ts#L64)*

*__description__*: Returns the number of bits in the value

**Returns:** [UIntBitLength](../modules/_codec_uint_.md#uintbitlength)

___
<a id="bytelength"></a>

##  byteLength

▸ **byteLength**(): `number`

*Inherited from BN.byteLength*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:144*

*__description__*: return number of bytes occupied

**Returns:** `number`

___
<a id="clone"></a>

##  clone

▸ **clone**(): `BN`

*Inherited from BN.clone*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:89*

*__description__*: clone number

**Returns:** `BN`

___
<a id="cmp"></a>

##  cmp

▸ **cmp**(b: *`BN`*):  `-1` &#124; `0` &#124; `1`

*Inherited from BN.cmp*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:169*

*__description__*: compare numbers and return `-1 (a < b)`, `0 (a == b)`, or `1 (a > b)` depending on the comparison result

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | `BN` |

**Returns:**  `-1` &#124; `0` &#124; `1`

___
<a id="cmpn"></a>

##  cmpn

▸ **cmpn**(b: *`number`*):  `-1` &#124; `0` &#124; `1`

*Inherited from BN.cmpn*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:179*

*__description__*: compare numbers and return `-1 (a < b)`, `0 (a == b)`, or `1 (a > b)` depending on the comparison result

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | `number` |

**Returns:**  `-1` &#124; `0` &#124; `1`

___
<a id="div"></a>

##  div

▸ **div**(b: *`BN`*): `BN`

*Inherited from BN.div*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:339*

*__description__*: divide

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | `BN` |

**Returns:** `BN`

___
<a id="divround"></a>

##  divRound

▸ **divRound**(b: *`BN`*): `BN`

*Inherited from BN.divRound*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:370*

*__description__*: rounded division

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | `BN` |

**Returns:** `BN`

___
<a id="divn"></a>

##  divn

▸ **divn**(b: *`number`*): `BN`

*Inherited from BN.divn*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:344*

*__description__*: divide

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | `number` |

**Returns:** `BN`

___
<a id="egcd"></a>

##  egcd

▸ **egcd**(b: *`BN`*): `object`

*Inherited from BN.egcd*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:519*

*__description__*: Extended GCD results `({ a: ..., b: ..., gcd: ... })`

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | `BN` |

**Returns:** `object`

___
<a id="eq"></a>

##  eq

▸ **eq**(b: *`BN`*): `boolean`

*Inherited from BN.eq*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:224*

*__description__*: a equals b

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | `BN` |

**Returns:** `boolean`

___
<a id="eqn"></a>

##  eqn

▸ **eqn**(b: *`number`*): `boolean`

*Inherited from BN.eqn*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:229*

*__description__*: a equals b

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | `number` |

**Returns:** `boolean`

___
<a id="fromtwos"></a>

##  fromTwos

▸ **fromTwos**(width: *`number`*): `BN`

*Inherited from BN.fromTwos*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:239*

*__description__*: convert from two's complement representation, where width is the bit width

**Parameters:**

| Name | Type |
| ------ | ------ |
| width | `number` |

**Returns:** `BN`

___
<a id="gcd"></a>

##  gcd

▸ **gcd**(b: *`BN`*): `BN`

*Inherited from BN.gcd*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:514*

*__description__*: GCD

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | `BN` |

**Returns:** `BN`

___
<a id="gt"></a>

##  gt

▸ **gt**(b: *`BN`*): `boolean`

*Inherited from BN.gt*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:204*

*__description__*: a greater than b

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | `BN` |

**Returns:** `boolean`

___
<a id="gte"></a>

##  gte

▸ **gte**(b: *`BN`*): `boolean`

*Inherited from BN.gte*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:214*

*__description__*: a greater than or equals b

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | `BN` |

**Returns:** `boolean`

___
<a id="gten"></a>

##  gten

▸ **gten**(b: *`number`*): `boolean`

*Inherited from BN.gten*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:219*

*__description__*: a greater than or equals b

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | `number` |

**Returns:** `boolean`

___
<a id="gtn"></a>

##  gtn

▸ **gtn**(b: *`number`*): `boolean`

*Inherited from BN.gtn*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:209*

*__description__*: a greater than b

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | `number` |

**Returns:** `boolean`

___
<a id="iabs"></a>

##  iabs

▸ **iabs**(): `BN`

*Inherited from BN.iabs*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:259*

*__description__*: absolute value

**Returns:** `BN`

___
<a id="iadd"></a>

##  iadd

▸ **iadd**(b: *`BN`*): `BN`

*Inherited from BN.iadd*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:269*

*__description__*: addition

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | `BN` |

**Returns:** `BN`

___
<a id="iaddn"></a>

##  iaddn

▸ **iaddn**(b: *`number`*): `BN`

*Inherited from BN.iaddn*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:279*

*__description__*: addition

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | `number` |

**Returns:** `BN`

___
<a id="iand"></a>

##  iand

▸ **iand**(b: *`BN`*): `BN`

*Inherited from BN.iand*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:400*

*__description__*: and

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | `BN` |

**Returns:** `BN`

___
<a id="idivn"></a>

##  idivn

▸ **idivn**(b: *`number`*): `BN`

*Inherited from BN.idivn*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:349*

*__description__*: divide

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | `number` |

**Returns:** `BN`

___
<a id="imaskn"></a>

##  imaskn

▸ **imaskn**(b: *`number`*): `BN`

*Inherited from BN.imaskn*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:495*

*__description__*: clear bits with indexes higher or equal to `b`

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | `number` |

**Returns:** `BN`

___
<a id="imul"></a>

##  imul

▸ **imul**(b: *`BN`*): `BN`

*Inherited from BN.imul*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:309*

*__description__*: multiply

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | `BN` |

**Returns:** `BN`

___
<a id="imuln"></a>

##  imuln

▸ **imuln**(b: *`number`*): `BN`

*Inherited from BN.imuln*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:319*

*__description__*: multiply

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | `number` |

**Returns:** `BN`

___
<a id="ineg"></a>

##  ineg

▸ **ineg**(): `BN`

*Inherited from BN.ineg*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:249*

*__description__*: negate sign

**Returns:** `BN`

___
<a id="inotn"></a>

##  inotn

▸ **inotn**(w: *`number`*): `BN`

*Inherited from BN.inotn*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:509*

*__description__*: not (for the width specified by `w`)

**Parameters:**

| Name | Type |
| ------ | ------ |
| w | `number` |

**Returns:** `BN`

___
<a id="invm"></a>

##  invm

▸ **invm**(b: *`BN`*): `BN`

*Inherited from BN.invm*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:524*

*__description__*: inverse `a` modulo `b`

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | `BN` |

**Returns:** `BN`

___
<a id="ior"></a>

##  ior

▸ **ior**(b: *`BN`*): `BN`

*Inherited from BN.ior*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:380*

*__description__*: or

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | `BN` |

**Returns:** `BN`

___
<a id="iseven"></a>

##  isEven

▸ **isEven**(): `boolean`

*Inherited from BN.isEven*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:154*

*__description__*: check if value is even

**Returns:** `boolean`

___
<a id="isneg"></a>

##  isNeg

▸ **isNeg**(): `boolean`

*Inherited from BN.isNeg*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:149*

*__description__*: true if the number is negative

**Returns:** `boolean`

___
<a id="isodd"></a>

##  isOdd

▸ **isOdd**(): `boolean`

*Inherited from BN.isOdd*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:159*

*__description__*: check if value is odd

**Returns:** `boolean`

___
<a id="iszero"></a>

##  isZero

▸ **isZero**(): `boolean`

*Inherited from BN.isZero*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:164*

*__description__*: check if value is zero

**Returns:** `boolean`

___
<a id="ishln"></a>

##  ishln

▸ **ishln**(b: *`number`*): `BN`

*Inherited from BN.ishln*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:450*

*__description__*: shift left

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | `number` |

**Returns:** `BN`

___
<a id="ishrn"></a>

##  ishrn

▸ **ishrn**(b: *`number`*): `BN`

*Inherited from BN.ishrn*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:470*

*__description__*: shift right (unimplemented [https://github.com/indutny/bn.js/blob/master/lib/bn.js#L2086](https://github.com/indutny/bn.js/blob/master/lib/bn.js#L2086))

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | `number` |

**Returns:** `BN`

___
<a id="isqr"></a>

##  isqr

▸ **isqr**(): `BN`

*Inherited from BN.isqr*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:329*

*__description__*: square

**Returns:** `BN`

___
<a id="isub"></a>

##  isub

▸ **isub**(b: *`BN`*): `BN`

*Inherited from BN.isub*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:289*

*__description__*: subtraction

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | `BN` |

**Returns:** `BN`

___
<a id="isubn"></a>

##  isubn

▸ **isubn**(b: *`number`*): `BN`

*Inherited from BN.isubn*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:299*

*__description__*: subtraction

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | `number` |

**Returns:** `BN`

___
<a id="iuand"></a>

##  iuand

▸ **iuand**(b: *`BN`*): `BN`

*Inherited from BN.iuand*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:410*

*__description__*: and

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | `BN` |

**Returns:** `BN`

___
<a id="iuor"></a>

##  iuor

▸ **iuor**(b: *`BN`*): `BN`

*Inherited from BN.iuor*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:390*

*__description__*: or

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | `BN` |

**Returns:** `BN`

___
<a id="iushln"></a>

##  iushln

▸ **iushln**(b: *`number`*): `BN`

*Inherited from BN.iushln*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:460*

*__description__*: shift left

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | `number` |

**Returns:** `BN`

___
<a id="iushrn"></a>

##  iushrn

▸ **iushrn**(b: *`number`*): `BN`

*Inherited from BN.iushrn*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:480*

*__description__*: shift right

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | `number` |

**Returns:** `BN`

___
<a id="iuxor"></a>

##  iuxor

▸ **iuxor**(b: *`BN`*): `BN`

*Inherited from BN.iuxor*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:435*

*__description__*: xor

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | `BN` |

**Returns:** `BN`

___
<a id="ixor"></a>

##  ixor

▸ **ixor**(b: *`BN`*): `BN`

*Inherited from BN.ixor*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:425*

*__description__*: xor

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | `BN` |

**Returns:** `BN`

___
<a id="lt"></a>

##  lt

▸ **lt**(b: *`BN`*): `boolean`

*Inherited from BN.lt*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:184*

*__description__*: a less than b

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | `BN` |

**Returns:** `boolean`

___
<a id="lte"></a>

##  lte

▸ **lte**(b: *`BN`*): `boolean`

*Inherited from BN.lte*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:194*

*__description__*: a less than or equals b

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | `BN` |

**Returns:** `boolean`

___
<a id="lten"></a>

##  lten

▸ **lten**(b: *`number`*): `boolean`

*Inherited from BN.lten*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:199*

*__description__*: a less than or equals b

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | `number` |

**Returns:** `boolean`

___
<a id="ltn"></a>

##  ltn

▸ **ltn**(b: *`number`*): `boolean`

*Inherited from BN.ltn*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:189*

*__description__*: a less than b

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | `number` |

**Returns:** `boolean`

___
<a id="maskn"></a>

##  maskn

▸ **maskn**(b: *`number`*): `BN`

*Inherited from BN.maskn*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:490*

*__description__*: clear bits with indexes higher or equal to `b`

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | `number` |

**Returns:** `BN`

___
<a id="mod"></a>

##  mod

▸ **mod**(b: *`BN`*): `BN`

*Inherited from BN.mod*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:354*

*__description__*: reduct

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | `BN` |

**Returns:** `BN`

___
<a id="modn"></a>

##  modn

▸ **modn**(b: *`number`*): `number`

*Inherited from BN.modn*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:365*

*__see__*: API consistency [https://github.com/indutny/bn.js/pull/130](https://github.com/indutny/bn.js/pull/130)

*__description__*: reduct

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | `number` |

**Returns:** `number`

___
<a id="mul"></a>

##  mul

▸ **mul**(b: *`BN`*): `BN`

*Inherited from BN.mul*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:304*

*__description__*: multiply

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | `BN` |

**Returns:** `BN`

___
<a id="muln"></a>

##  muln

▸ **muln**(b: *`number`*): `BN`

*Inherited from BN.muln*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:314*

*__description__*: multiply

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | `number` |

**Returns:** `BN`

___
<a id="neg"></a>

##  neg

▸ **neg**(): `BN`

*Inherited from BN.neg*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:244*

*__description__*: negate sign

**Returns:** `BN`

___
<a id="notn"></a>

##  notn

▸ **notn**(w: *`number`*): `BN`

*Inherited from BN.notn*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:504*

*__description__*: not (for the width specified by `w`)

**Parameters:**

| Name | Type |
| ------ | ------ |
| w | `number` |

**Returns:** `BN`

___
<a id="or"></a>

##  or

▸ **or**(b: *`BN`*): `BN`

*Inherited from BN.or*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:375*

*__description__*: or

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | `BN` |

**Returns:** `BN`

___
<a id="pow"></a>

##  pow

▸ **pow**(b: *`BN`*): `BN`

*Inherited from BN.pow*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:334*

*__description__*: raise `a` to the power of `b`

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | `BN` |

**Returns:** `BN`

___
<a id="setn"></a>

##  setn

▸ **setn**(b: *`number`*): `BN`

*Inherited from BN.setn*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:440*

*__description__*: set specified bit to 1

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | `number` |

**Returns:** `BN`

___
<a id="shln"></a>

##  shln

▸ **shln**(b: *`number`*): `BN`

*Inherited from BN.shln*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:445*

*__description__*: shift left

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | `number` |

**Returns:** `BN`

___
<a id="shrn"></a>

##  shrn

▸ **shrn**(b: *`number`*): `BN`

*Inherited from BN.shrn*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:465*

*__description__*: shift right

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | `number` |

**Returns:** `BN`

___
<a id="sqr"></a>

##  sqr

▸ **sqr**(): `BN`

*Inherited from BN.sqr*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:324*

*__description__*: square

**Returns:** `BN`

___
<a id="sub"></a>

##  sub

▸ **sub**(b: *`BN`*): `BN`

*Inherited from BN.sub*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:284*

*__description__*: subtraction

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | `BN` |

**Returns:** `BN`

___
<a id="subn"></a>

##  subn

▸ **subn**(b: *`number`*): `BN`

*Inherited from BN.subn*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:294*

*__description__*: subtraction

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | `number` |

**Returns:** `BN`

___
<a id="testn"></a>

##  testn

▸ **testn**(b: *`number`*): `boolean`

*Inherited from BN.testn*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:485*

*__description__*: test if specified bit is set

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | `number` |

**Returns:** `boolean`

___
<a id="toarray"></a>

##  toArray

▸ **toArray**(endian?: *`Endianness`*, length?: * `undefined` &#124; `number`*): `number`[]

*Inherited from BN.toArray*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:109*

*__description__*: convert to byte Array, and optionally zero pad to length, throwing if already exceeding

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` endian | `Endianness` |
| `Optional` length |  `undefined` &#124; `number`|

**Returns:** `number`[]

___
<a id="toarraylike"></a>

##  toArrayLike

▸ **toArrayLike**(ArrayType: *`object`*, endian?: *`Endianness`*, length?: * `undefined` &#124; `number`*): `Buffer`

▸ **toArrayLike**(ArrayType: *`any`[]*, endian?: *`Endianness`*, length?: * `undefined` &#124; `number`*): `any`[]

*Inherited from BN.toArrayLike*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:114*

*__description__*: convert to an instance of `type`, which must behave like an Array

**Parameters:**

| Name | Type |
| ------ | ------ |
| ArrayType | `object` |
| `Optional` endian | `Endianness` |
| `Optional` length |  `undefined` &#124; `number`|

**Returns:** `Buffer`

*Inherited from BN.toArrayLike*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:120*

**Parameters:**

| Name | Type |
| ------ | ------ |
| ArrayType | `any`[] |
| `Optional` endian | `Endianness` |
| `Optional` length |  `undefined` &#124; `number`|

**Returns:** `any`[]

___
<a id="tobn"></a>

##  toBn

▸ **toBn**(): `BN`

*Inherited from [UInt](_codec_uint_.uint.md).[toBn](_codec_uint_.uint.md#tobn)*

*Defined in [codec/UInt.ts:71](https://github.com/polkadot-js/api/blob/3c8b3d3/packages/types/src/codec/UInt.ts#L71)*

*__description__*: Returns the BN representation of the number. (Compatibility)

**Returns:** `BN`

___
<a id="tobuffer"></a>

##  toBuffer

▸ **toBuffer**(endian?: *`Endianness`*, length?: * `undefined` &#124; `number`*): `Buffer`

*Inherited from BN.toBuffer*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:129*

*__description__*: convert to Node.js Buffer (if available). For compatibility with browserify and similar tools, use this instead: a.toArrayLike(Buffer, endian, length)

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` endian | `Endianness` |
| `Optional` length |  `undefined` &#124; `number`|

**Returns:** `Buffer`

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toHex](../interfaces/_types_.codec.md#tohex)*

*Inherited from [UInt](_codec_uint_.uint.md).[toHex](_codec_uint_.uint.md#tohex)*

*Defined in [codec/UInt.ts:78](https://github.com/polkadot-js/api/blob/3c8b3d3/packages/types/src/codec/UInt.ts#L78)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Inherited from [UInt](_codec_uint_.uint.md).[toJSON](_codec_uint_.uint.md#tojson)*

*Overrides BN.toJSON*

*Defined in [codec/UInt.ts:85](https://github.com/polkadot-js/api/blob/3c8b3d3/packages/types/src/codec/UInt.ts#L85)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tonumber"></a>

##  toNumber

▸ **toNumber**(): `number`

*Inherited from BN.toNumber*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:99*

*__description__*: convert to Javascript Number (limited to 53 bits)

**Returns:** `number`

___
<a id="tored"></a>

##  toRed

▸ **toRed**(reductionContext: *`ReductionContext`*): `RedBN`

*Inherited from BN.toRed*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:84*

*__description__*: Convert number to red

**Parameters:**

| Name | Type |
| ------ | ------ |
| reductionContext | `ReductionContext` |

**Returns:** `RedBN`

___
<a id="tostring"></a>

##  toString

▸ **toString**(base?: * `undefined` &#124; `number`*): `string`

*Inherited from [UInt](_codec_uint_.uint.md).[toString](_codec_uint_.uint.md#tostring)*

*Overrides BN.toString*

*Defined in [codec/UInt.ts:95](https://github.com/polkadot-js/api/blob/3c8b3d3/packages/types/src/codec/UInt.ts#L95)*

*__description__*: Returns the string representation of the value

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` base |  `undefined` &#124; `number`|  The base to use for the conversion |

**Returns:** `string`

___
<a id="totwos"></a>

##  toTwos

▸ **toTwos**(width: *`number`*): `BN`

*Inherited from BN.toTwos*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:234*

*__description__*: convert to two's complement representation, where width is bit width

**Parameters:**

| Name | Type |
| ------ | ------ |
| width | `number` |

**Returns:** `BN`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Inherited from [UInt](_codec_uint_.uint.md).[toU8a](_codec_uint_.uint.md#tou8a)*

*Defined in [codec/UInt.ts:104](https://github.com/polkadot-js/api/blob/3c8b3d3/packages/types/src/codec/UInt.ts#L104)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="uand"></a>

##  uand

▸ **uand**(b: *`BN`*): `BN`

*Inherited from BN.uand*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:405*

*__description__*: and

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | `BN` |

**Returns:** `BN`

___
<a id="ucmp"></a>

##  ucmp

▸ **ucmp**(b: *`BN`*):  `-1` &#124; `0` &#124; `1`

*Inherited from BN.ucmp*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:174*

*__description__*: compare numbers and return `-1 (a < b)`, `0 (a == b)`, or `1 (a > b)` depending on the comparison result

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | `BN` |

**Returns:**  `-1` &#124; `0` &#124; `1`

___
<a id="umod"></a>

##  umod

▸ **umod**(b: *`BN`*): `BN`

*Inherited from BN.umod*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:359*

*__description__*: reduct

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | `BN` |

**Returns:** `BN`

___
<a id="uor"></a>

##  uor

▸ **uor**(b: *`BN`*): `BN`

*Inherited from BN.uor*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:385*

*__description__*: or

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | `BN` |

**Returns:** `BN`

___
<a id="ushln"></a>

##  ushln

▸ **ushln**(b: *`number`*): `BN`

*Inherited from BN.ushln*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:455*

*__description__*: shift left

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | `number` |

**Returns:** `BN`

___
<a id="ushrn"></a>

##  ushrn

▸ **ushrn**(b: *`number`*): `BN`

*Inherited from BN.ushrn*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:475*

*__description__*: shift right

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | `number` |

**Returns:** `BN`

___
<a id="uxor"></a>

##  uxor

▸ **uxor**(b: *`BN`*): `BN`

*Inherited from BN.uxor*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:430*

*__description__*: xor

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | `BN` |

**Returns:** `BN`

___
<a id="xor"></a>

##  xor

▸ **xor**(b: *`BN`*): `BN`

*Inherited from BN.xor*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:420*

*__description__*: xor

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | `BN` |

**Returns:** `BN`

___
<a id="zerobits"></a>

##  zeroBits

▸ **zeroBits**(): `number`

*Inherited from BN.zeroBits*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:139*

*__description__*: return number of less-significant consequent zero bits (example: 1010000 has 4 zero bits)

**Returns:** `number`

___
<a id="decodeuint"></a>

## `<Static>` decodeUInt

▸ **decodeUInt**(value: *[AnyNumber](../modules/_types_.md#anynumber)*, bitLength: *[UIntBitLength](../modules/_codec_uint_.md#uintbitlength)*): `string`

*Inherited from [UInt](_codec_uint_.uint.md).[decodeUInt](_codec_uint_.uint.md#decodeuint)*

*Defined in [codec/UInt.ts:38](https://github.com/polkadot-js/api/blob/3c8b3d3/packages/types/src/codec/UInt.ts#L38)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | [AnyNumber](../modules/_types_.md#anynumber) |
| bitLength | [UIntBitLength](../modules/_codec_uint_.md#uintbitlength) |

**Returns:** `string`

___
<a id="isbn"></a>

## `<Static>` isBN

▸ **isBN**(b: *`any`*): `boolean`

*Inherited from BN.isBN*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:69*

*__description__*: returns true if the supplied object is a BN.js instance

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | `any` |

**Returns:** `boolean`

___
<a id="max"></a>

## `<Static>` max

▸ **max**(left: *`BN`*, right: *`BN`*): `BN`

*Inherited from BN.max*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:74*

*__description__*: returns the maximum of 2 BN instances.

**Parameters:**

| Name | Type |
| ------ | ------ |
| left | `BN` |
| right | `BN` |

**Returns:** `BN`

___
<a id="min"></a>

## `<Static>` min

▸ **min**(left: *`BN`*, right: *`BN`*): `BN`

*Inherited from BN.min*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:79*

*__description__*: returns the minimum of 2 BN instances.

**Parameters:**

| Name | Type |
| ------ | ------ |
| left | `BN` |
| right | `BN` |

**Returns:** `BN`

___
<a id="mont"></a>

## `<Static>` mont

▸ **mont**(num: *`BN`*): `ReductionContext`

*Inherited from BN.mont*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:64*

*__description__*: create a reduction context with the Montgomery trick.

**Parameters:**

| Name | Type |
| ------ | ------ |
| num | `BN` |

**Returns:** `ReductionContext`

___
<a id="red"></a>

## `<Static>` red

▸ **red**(reductionContext: * `BN` &#124; `IPrimeName`*): `ReductionContext`

*Inherited from BN.red*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/bn.js/index.d.ts:59*

*__description__*: create a reduction context

**Parameters:**

| Name | Type |
| ------ | ------ |
| reductionContext |  `BN` &#124; `IPrimeName`|

**Returns:** `ReductionContext`

___

