import { CheckResult } from "../checkResult";
import { CheckParamsBase } from "../checkParamsBase";
import { isNull } from "../util";
import { checkCommon, checkRegs } from "./checkCommon";

let regList = [
  /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/, // 18位
  /^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$/ // 15位
];

export class checkIDCardNoParams extends CheckParamsBase {}

export function isIDCardNo(
  value: string,
  params?: checkIDCardNoParams
): CheckResult {
  if (checkCommon(value, params).success) {
    return new CheckResult(true, "");
  }

  if (checkRegs(regList, value)) {
    if (params) {
    }
    return new CheckResult(true, "验证通过");
  } else {
    return new CheckResult(false, `请输入一个有效的身份证号码！`);
  }
}
