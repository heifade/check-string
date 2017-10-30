import { CheckResult } from "../checkResult";
import { CheckParamsBase } from "../checkParamsBase";
import { isNull } from "../util";
import { checkCommon, checkRegs } from "./checkCommon";

let regList = [
  /^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$/ // 固定电话号码
];

export class checkFixedTelephoneNumberParams extends CheckParamsBase {}

export function isFixedTelephoneNumber(
  value: string,
  params?: checkFixedTelephoneNumberParams
): CheckResult {
  if (checkCommon(value, params).success) {
    return new CheckResult(true, "");
  }

  if (checkRegs(regList, value)) {
    if (params) {
    }
    return new CheckResult(true, "验证通过");
  } else {
    return new CheckResult(false, `请输入一个有效的固定电话号码！`);
  }
}
