import { isFixedTelephoneNumber } from "../src/index";

import { doCheck, testCommon } from "./checkCommon";

export function testCheckFixedTelephoneNumber() {
  testCommon(isFixedTelephoneNumber);

  doCheck(isFixedTelephoneNumber, "0571-88123456", true);
  doCheck(isFixedTelephoneNumber, "010-88123456", true);

  doCheck(isFixedTelephoneNumber, "0575-88123456", true);
  doCheck(isFixedTelephoneNumber, "0575-8123456", true);

  doCheck(isFixedTelephoneNumber, "0575-88123456-012", true);

}
