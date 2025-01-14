import { SchemaType } from "@latticexyz/schema-type";

export const schemaTypesToRecsTypeStrings: Record<SchemaType, string> = {
  [SchemaType.UINT8]: "RecsType.Number",
  [SchemaType.UINT16]: "RecsType.Number",
  [SchemaType.UINT24]: "RecsType.Number",
  [SchemaType.UINT32]: "RecsType.Number",
  [SchemaType.UINT40]: "RecsType.Number",
  [SchemaType.UINT48]: "RecsType.Number",
  [SchemaType.UINT56]: "RecsType.Number",
  [SchemaType.UINT64]: "RecsType.Number",
  [SchemaType.UINT72]: "RecsType.Number",
  [SchemaType.UINT80]: "RecsType.Number",
  [SchemaType.UINT88]: "RecsType.Number",
  [SchemaType.UINT96]: "RecsType.Number",
  [SchemaType.UINT104]: "RecsType.Number",
  [SchemaType.UINT112]: "RecsType.Number",
  [SchemaType.UINT120]: "RecsType.Number",
  [SchemaType.UINT128]: "RecsType.Number",
  [SchemaType.UINT136]: "RecsType.Number",
  [SchemaType.UINT144]: "RecsType.Number",
  [SchemaType.UINT152]: "RecsType.Number",
  [SchemaType.UINT160]: "RecsType.Number",
  [SchemaType.UINT168]: "RecsType.Number",
  [SchemaType.UINT176]: "RecsType.Number",
  [SchemaType.UINT184]: "RecsType.Number",
  [SchemaType.UINT192]: "RecsType.Number",
  [SchemaType.UINT200]: "RecsType.Number",
  [SchemaType.UINT208]: "RecsType.Number",
  [SchemaType.UINT216]: "RecsType.Number",
  [SchemaType.UINT224]: "RecsType.Number",
  [SchemaType.UINT232]: "RecsType.Number",
  [SchemaType.UINT240]: "RecsType.Number",
  [SchemaType.UINT248]: "RecsType.Number",
  [SchemaType.UINT256]: "RecsType.Number",
  [SchemaType.INT8]: "RecsType.Number",
  [SchemaType.INT16]: "RecsType.Number",
  [SchemaType.INT24]: "RecsType.Number",
  [SchemaType.INT32]: "RecsType.Number",
  [SchemaType.INT40]: "RecsType.Number",
  [SchemaType.INT48]: "RecsType.Number",
  [SchemaType.INT56]: "RecsType.Number",
  [SchemaType.INT64]: "RecsType.Number",
  [SchemaType.INT72]: "RecsType.Number",
  [SchemaType.INT80]: "RecsType.Number",
  [SchemaType.INT88]: "RecsType.Number",
  [SchemaType.INT96]: "RecsType.Number",
  [SchemaType.INT104]: "RecsType.Number",
  [SchemaType.INT112]: "RecsType.Number",
  [SchemaType.INT120]: "RecsType.Number",
  [SchemaType.INT128]: "RecsType.Number",
  [SchemaType.INT136]: "RecsType.Number",
  [SchemaType.INT144]: "RecsType.Number",
  [SchemaType.INT152]: "RecsType.Number",
  [SchemaType.INT160]: "RecsType.Number",
  [SchemaType.INT168]: "RecsType.Number",
  [SchemaType.INT176]: "RecsType.Number",
  [SchemaType.INT184]: "RecsType.Number",
  [SchemaType.INT192]: "RecsType.Number",
  [SchemaType.INT200]: "RecsType.Number",
  [SchemaType.INT208]: "RecsType.Number",
  [SchemaType.INT216]: "RecsType.Number",
  [SchemaType.INT224]: "RecsType.Number",
  [SchemaType.INT232]: "RecsType.Number",
  [SchemaType.INT240]: "RecsType.Number",
  [SchemaType.INT248]: "RecsType.Number",
  [SchemaType.INT256]: "RecsType.Number",
  [SchemaType.BYTES1]: "RecsType.String",
  [SchemaType.BYTES2]: "RecsType.String",
  [SchemaType.BYTES3]: "RecsType.String",
  [SchemaType.BYTES4]: "RecsType.String",
  [SchemaType.BYTES5]: "RecsType.String",
  [SchemaType.BYTES6]: "RecsType.String",
  [SchemaType.BYTES7]: "RecsType.String",
  [SchemaType.BYTES8]: "RecsType.String",
  [SchemaType.BYTES9]: "RecsType.String",
  [SchemaType.BYTES10]: "RecsType.String",
  [SchemaType.BYTES11]: "RecsType.String",
  [SchemaType.BYTES12]: "RecsType.String",
  [SchemaType.BYTES13]: "RecsType.String",
  [SchemaType.BYTES14]: "RecsType.String",
  [SchemaType.BYTES15]: "RecsType.String",
  [SchemaType.BYTES16]: "RecsType.String",
  [SchemaType.BYTES17]: "RecsType.String",
  [SchemaType.BYTES18]: "RecsType.String",
  [SchemaType.BYTES19]: "RecsType.String",
  [SchemaType.BYTES20]: "RecsType.String",
  [SchemaType.BYTES21]: "RecsType.String",
  [SchemaType.BYTES22]: "RecsType.String",
  [SchemaType.BYTES23]: "RecsType.String",
  [SchemaType.BYTES24]: "RecsType.String",
  [SchemaType.BYTES25]: "RecsType.String",
  [SchemaType.BYTES26]: "RecsType.String",
  [SchemaType.BYTES27]: "RecsType.String",
  [SchemaType.BYTES28]: "RecsType.String",
  [SchemaType.BYTES29]: "RecsType.String",
  [SchemaType.BYTES30]: "RecsType.String",
  [SchemaType.BYTES31]: "RecsType.String",
  [SchemaType.BYTES32]: "RecsType.String",
  [SchemaType.BOOL]: "RecsType.Boolean",
  [SchemaType.ADDRESS]: "RecsType.String",
  [SchemaType.UINT8_ARRAY]: "RecsType.NumberArray",
  [SchemaType.UINT16_ARRAY]: "RecsType.NumberArray",
  [SchemaType.UINT24_ARRAY]: "RecsType.NumberArray",
  [SchemaType.UINT32_ARRAY]: "RecsType.NumberArray",
  [SchemaType.UINT40_ARRAY]: "RecsType.NumberArray",
  [SchemaType.UINT48_ARRAY]: "RecsType.NumberArray",
  [SchemaType.UINT56_ARRAY]: "RecsType.NumberArray",
  [SchemaType.UINT64_ARRAY]: "RecsType.NumberArray",
  [SchemaType.UINT72_ARRAY]: "RecsType.NumberArray",
  [SchemaType.UINT80_ARRAY]: "RecsType.NumberArray",
  [SchemaType.UINT88_ARRAY]: "RecsType.NumberArray",
  [SchemaType.UINT96_ARRAY]: "RecsType.NumberArray",
  [SchemaType.UINT104_ARRAY]: "RecsType.NumberArray",
  [SchemaType.UINT112_ARRAY]: "RecsType.NumberArray",
  [SchemaType.UINT120_ARRAY]: "RecsType.NumberArray",
  [SchemaType.UINT128_ARRAY]: "RecsType.NumberArray",
  [SchemaType.UINT136_ARRAY]: "RecsType.NumberArray",
  [SchemaType.UINT144_ARRAY]: "RecsType.NumberArray",
  [SchemaType.UINT152_ARRAY]: "RecsType.NumberArray",
  [SchemaType.UINT160_ARRAY]: "RecsType.NumberArray",
  [SchemaType.UINT168_ARRAY]: "RecsType.NumberArray",
  [SchemaType.UINT176_ARRAY]: "RecsType.NumberArray",
  [SchemaType.UINT184_ARRAY]: "RecsType.NumberArray",
  [SchemaType.UINT192_ARRAY]: "RecsType.NumberArray",
  [SchemaType.UINT200_ARRAY]: "RecsType.NumberArray",
  [SchemaType.UINT208_ARRAY]: "RecsType.NumberArray",
  [SchemaType.UINT216_ARRAY]: "RecsType.NumberArray",
  [SchemaType.UINT224_ARRAY]: "RecsType.NumberArray",
  [SchemaType.UINT232_ARRAY]: "RecsType.NumberArray",
  [SchemaType.UINT240_ARRAY]: "RecsType.NumberArray",
  [SchemaType.UINT248_ARRAY]: "RecsType.NumberArray",
  [SchemaType.UINT256_ARRAY]: "RecsType.NumberArray",
  [SchemaType.INT8_ARRAY]: "RecsType.NumberArray",
  [SchemaType.INT16_ARRAY]: "RecsType.NumberArray",
  [SchemaType.INT24_ARRAY]: "RecsType.NumberArray",
  [SchemaType.INT32_ARRAY]: "RecsType.NumberArray",
  [SchemaType.INT40_ARRAY]: "RecsType.NumberArray",
  [SchemaType.INT48_ARRAY]: "RecsType.NumberArray",
  [SchemaType.INT56_ARRAY]: "RecsType.NumberArray",
  [SchemaType.INT64_ARRAY]: "RecsType.NumberArray",
  [SchemaType.INT72_ARRAY]: "RecsType.NumberArray",
  [SchemaType.INT80_ARRAY]: "RecsType.NumberArray",
  [SchemaType.INT88_ARRAY]: "RecsType.NumberArray",
  [SchemaType.INT96_ARRAY]: "RecsType.NumberArray",
  [SchemaType.INT104_ARRAY]: "RecsType.NumberArray",
  [SchemaType.INT112_ARRAY]: "RecsType.NumberArray",
  [SchemaType.INT120_ARRAY]: "RecsType.NumberArray",
  [SchemaType.INT128_ARRAY]: "RecsType.NumberArray",
  [SchemaType.INT136_ARRAY]: "RecsType.NumberArray",
  [SchemaType.INT144_ARRAY]: "RecsType.NumberArray",
  [SchemaType.INT152_ARRAY]: "RecsType.NumberArray",
  [SchemaType.INT160_ARRAY]: "RecsType.NumberArray",
  [SchemaType.INT168_ARRAY]: "RecsType.NumberArray",
  [SchemaType.INT176_ARRAY]: "RecsType.NumberArray",
  [SchemaType.INT184_ARRAY]: "RecsType.NumberArray",
  [SchemaType.INT192_ARRAY]: "RecsType.NumberArray",
  [SchemaType.INT200_ARRAY]: "RecsType.NumberArray",
  [SchemaType.INT208_ARRAY]: "RecsType.NumberArray",
  [SchemaType.INT216_ARRAY]: "RecsType.NumberArray",
  [SchemaType.INT224_ARRAY]: "RecsType.NumberArray",
  [SchemaType.INT232_ARRAY]: "RecsType.NumberArray",
  [SchemaType.INT240_ARRAY]: "RecsType.NumberArray",
  [SchemaType.INT248_ARRAY]: "RecsType.NumberArray",
  [SchemaType.INT256_ARRAY]: "RecsType.NumberArray",
  [SchemaType.BYTES1_ARRAY]: "RecsType.StringArray",
  [SchemaType.BYTES2_ARRAY]: "RecsType.StringArray",
  [SchemaType.BYTES3_ARRAY]: "RecsType.StringArray",
  [SchemaType.BYTES4_ARRAY]: "RecsType.StringArray",
  [SchemaType.BYTES5_ARRAY]: "RecsType.StringArray",
  [SchemaType.BYTES6_ARRAY]: "RecsType.StringArray",
  [SchemaType.BYTES7_ARRAY]: "RecsType.StringArray",
  [SchemaType.BYTES8_ARRAY]: "RecsType.StringArray",
  [SchemaType.BYTES9_ARRAY]: "RecsType.StringArray",
  [SchemaType.BYTES10_ARRAY]: "RecsType.StringArray",
  [SchemaType.BYTES11_ARRAY]: "RecsType.StringArray",
  [SchemaType.BYTES12_ARRAY]: "RecsType.StringArray",
  [SchemaType.BYTES13_ARRAY]: "RecsType.StringArray",
  [SchemaType.BYTES14_ARRAY]: "RecsType.StringArray",
  [SchemaType.BYTES15_ARRAY]: "RecsType.StringArray",
  [SchemaType.BYTES16_ARRAY]: "RecsType.StringArray",
  [SchemaType.BYTES17_ARRAY]: "RecsType.StringArray",
  [SchemaType.BYTES18_ARRAY]: "RecsType.StringArray",
  [SchemaType.BYTES19_ARRAY]: "RecsType.StringArray",
  [SchemaType.BYTES20_ARRAY]: "RecsType.StringArray",
  [SchemaType.BYTES21_ARRAY]: "RecsType.StringArray",
  [SchemaType.BYTES22_ARRAY]: "RecsType.StringArray",
  [SchemaType.BYTES23_ARRAY]: "RecsType.StringArray",
  [SchemaType.BYTES24_ARRAY]: "RecsType.StringArray",
  [SchemaType.BYTES25_ARRAY]: "RecsType.StringArray",
  [SchemaType.BYTES26_ARRAY]: "RecsType.StringArray",
  [SchemaType.BYTES27_ARRAY]: "RecsType.StringArray",
  [SchemaType.BYTES28_ARRAY]: "RecsType.StringArray",
  [SchemaType.BYTES29_ARRAY]: "RecsType.StringArray",
  [SchemaType.BYTES30_ARRAY]: "RecsType.StringArray",
  [SchemaType.BYTES31_ARRAY]: "RecsType.StringArray",
  [SchemaType.BYTES32_ARRAY]: "RecsType.StringArray",
  [SchemaType.BOOL_ARRAY]: "RecsType.T", // no boolean array
  [SchemaType.ADDRESS_ARRAY]: "RecsType.StringArray",
  [SchemaType.BYTES]: "RecsType.String",
  [SchemaType.STRING]: "RecsType.String",
};
