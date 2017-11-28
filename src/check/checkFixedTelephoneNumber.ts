import { CheckResult } from "../checkResult";
import { CheckParamsBase } from "../checkParamsBase";
import { isNull } from "../util";
import { checkCanNullOrEmpty, checkRegs } from "./checkCommon";

let regList = [
  /^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$/ // 固定电话号码
];

export class CheckFixedTelephoneNumberParams extends CheckParamsBase {}

export function isFixedTelephoneNumber(
  value: string,
  params?: CheckFixedTelephoneNumberParams
): CheckResult {
  let resultCanNullOrEmpty = checkCanNullOrEmpty(value, params);
  if (resultCanNullOrEmpty) {
    return resultCanNullOrEmpty;
  }

  if (checkRegs(regList, value)) {
    return new CheckResult(true);
  } else {
    return new CheckResult(false, {
      code: `ERROR_NOT_TEL`,
      en: `please enter a valid fixed phone number`,
      cn: `请输入一个有效的固定电话号码`
    });
  }
}
