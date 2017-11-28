import { CheckResult } from "../checkResult";
import { CheckParamsBase } from "../checkParamsBase";
import { isNull } from "../util";
import { checkCanNullOrEmpty, checkRegs } from "./checkCommon";

let regList = [
  /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/ // 不允许汉字
];

export class CheckEmailParams extends CheckParamsBase {}

export function isEmail(value: string, params?: CheckEmailParams): CheckResult {
  let resultCanNullOrEmpty = checkCanNullOrEmpty(value, params);
  if (resultCanNullOrEmpty) {
    return resultCanNullOrEmpty;
  }

  if (checkRegs(regList, value)) {
    return new CheckResult(true);
  } else {
    return new CheckResult(false, {
      code: `ERROR_NOT_EMAIL`,
      en: `please enter a valid mailbox address`,
      cn: `请输入一个有效的邮箱地址`
    });
  }
}
