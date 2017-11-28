import { isIDCardNo } from "../src/index";

import { doCheck, testCommon } from "./checkCommon";

export function testCheckIDCardNo() {
  testCommon(isIDCardNo);

  doCheck(isIDCardNo, "330765196207232123", true);
  doCheck(isIDCardNo, "330765196207232124", true);

}
