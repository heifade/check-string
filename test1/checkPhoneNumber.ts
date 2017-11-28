import { isPhoneNumber } from "../src/index";

import { doCheck, testCommon } from "./checkCommon";

export function testCheckPhoneNumber() {
  testCommon(isPhoneNumber);

  doCheck(isPhoneNumber, "12345678901", false);

  doCheck(isPhoneNumber, "123456789011", false); // 多了1位

  doCheck(isPhoneNumber, "1381212343", false); // 少了1位


  doCheck(isPhoneNumber, "13812123432", true);



}
