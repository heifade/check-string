import { CheckResult } from "../checkResult";
import { CheckParamsBase } from "../checkParamsBase";
import { isNull } from "../util";
import { checkCommon, checkRegs } from "./checkCommon";

let regList = [
  /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/ // 不允许汉字
];

export class CheckEmailParams extends CheckParamsBase {}

export function isEmail(value: string, params?: CheckEmailParams): CheckResult {
  if (checkCommon(value, params).success) {
    return new CheckResult(true, "");
  }

  if (checkRegs(regList, value)) {
    if (params) {
    }

    return new CheckResult(true, "验证通过");
  } else {
    return new CheckResult(false, `请输入一个正确的邮箱地址！`);
  }
}
