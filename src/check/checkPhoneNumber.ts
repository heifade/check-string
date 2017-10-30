import { CheckResult } from "../checkResult";
import { CheckParamsBase } from "../checkParamsBase";
import { isNull } from "../util";
import { checkCommon, checkRegs } from "./checkCommon";

// 移动号码段:139、138、137、136、135、134、150、151、152、157、158、159、182、183、187、188、147
// 联通号码段:130、131、132、136、185、186、145
// 电信号码段:133、153、180、189

let regList = [
  /^1[3|4|5|7|8][0-9]{9}$/,   // 手机号码
];

export class checkPhoneNumberParams extends CheckParamsBase {}

export function isPhoneNumber(
  value: string,
  params?: checkPhoneNumberParams
): CheckResult {
  if (checkCommon(value, params).success) {
    return new CheckResult(true, "");
  }

  if (checkRegs(regList, value)) {
    if (params) {
    }
    return new CheckResult(true, "验证通过");
  } else {
    return new CheckResult(false, `请输入一个有效的手机号码！`);
  }
}
