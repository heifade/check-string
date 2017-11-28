import { isEmail } from "../src/index";

import { doCheck, testCommon } from "./checkCommon";

export function testCheckEmail() {
  testCommon(isEmail);

  doCheck(isEmail, "heifade@126.com");

  doCheck(isEmail, "heifade.12@126.com", false); // 不通过，名字中出现"."

  doCheck(isEmail, "嗨heifade12@126.com", false); // 不通过，名字中出现汉字

  doCheck(isEmail, "heifade@12@126.com", false); // 不通过，名字中出现“@”

  doCheck(isEmail, "heifade12126.com", false); // 不通过，缺少“@”

  doCheck(isEmail, "heifade12126@.com", false); // 不通过，“@”后面没有域名

}
