import { isFloat } from "../src/index";

import { doCheck, testCommon } from "./checkCommon";

export function testCheckFloat() {
  testCommon(isFloat);

  doCheck(isFloat, "-99999.0");
  doCheck(isFloat, "-1000.0");
  doCheck(isFloat, "-1.0");
  doCheck(isFloat, "-0.00", false);
  doCheck(isFloat, "-0.0", false);
  doCheck(isFloat, "0.0");
  doCheck(isFloat, "1.0");
  doCheck(isFloat, "01.0", false);
  doCheck(isFloat, "10.0");
  doCheck(isFloat, "100.0");
  doCheck(isFloat, "99999.0");

  doCheck(isFloat, "99999.00", true, { decimals: 2 });
  doCheck(isFloat, "99999.000", false, { decimals: 2 }); // 不通过， 小数位小超过2位

  doCheck(isFloat, "100.99", true, { min: 10, max: 1000 });
  doCheck(isFloat, "1000.01", false, { min: 10, max: 1000 }); // 不通过， 最大值超出
  doCheck(isFloat, "9.01", false, { min: 10, max: 1000 }); // 不通过， 最小值超出
}
