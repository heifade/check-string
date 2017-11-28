import { isReal } from "../src/index";

import { doCheck, testCommon } from "./checkCommon";

export function testCheckReal() {
  testCommon(isReal);

  doCheck(isReal, `-123456789`);
  doCheck(isReal, `-123456789.0`);
  doCheck(isReal, `-123456789.1234567890`);
  doCheck(isReal, `-1.9`);
  doCheck(isReal, `-1.0`);
  doCheck(isReal, `-2`);
  doCheck(isReal, `-1`);
  doCheck(isReal, `-0.1234567890`);

  doCheck(isReal, `0`);
  doCheck(isReal, `-0`, false);
  doCheck(isReal, `-00.00`, false);
  doCheck(isReal, `-0.00`, false);
  doCheck(isReal, `-00.0`, false);

  doCheck(isReal, `0.1`);
  doCheck(isReal, `0.11`);
  doCheck(isReal, `0.101`);
  doCheck(isReal, `1`);
  doCheck(isReal, `1.0`);
  doCheck(isReal, `1.1`);
  doCheck(isReal, `1.01234567890`);
  doCheck(isReal, `1234567890.01234567890`);
  doCheck(isReal, `01234567890.1234567890`, false);

  doCheck(isReal, `123a.55c`, false); // 不通过：包含字非数字
  doCheck(isReal, `123 .55c`, false); // 不通过：包含空格

  doCheck(isReal, `100`, true, { min: 1, max: 100 });
  doCheck(isReal, `0`, false, { min: 1, max: 100 }); // 不通过，小于最小值
  doCheck(isReal, `101`, false, { min: 1, max: 100 }); // 不通过，超过最大值

  doCheck(isReal, `100.1234`, true, { decimals:4 });
  doCheck(isReal, `100.12345`, false, { decimals:4 }); // 不通过，小数位数超过4

}
