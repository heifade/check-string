import { isInteger } from "../src/index";

import { doCheck, testCommon } from "./checkCommon";

export function testCheckInteger() {
  testCommon(isInteger);

  doCheck(isInteger, "-99999");
  doCheck(isInteger, "-1000");
  doCheck(isInteger, "-1");
  doCheck(isInteger, "-0", false);
  doCheck(isInteger, "0");
  doCheck(isInteger, "1");
  doCheck(isInteger, "01", false);
  doCheck(isInteger, "10");
  doCheck(isInteger, "100");
  doCheck(isInteger, "99999");
}
