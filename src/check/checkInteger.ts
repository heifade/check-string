import { CheckResult } from "../checkResult";
import { CheckParamsBase } from "../checkParamsBase";
import { isNull } from "../util";
import {
  checkCanNullOrEmpty,
  checkRegs,
  checkMaxValue,
  checkMinValue
} from "./checkCommon";

let regList = [
  /^[0-9]$/, // 0至9
  /^[1-9][0-9]*$/, //10以上
  /^-[1-9][0-9]*$/ //负数
];

export class CheckIntegerParams extends CheckParamsBase {
  public min?: number;
  public max?: number;
}

export function isInteger(
  value: string,
  params?: CheckIntegerParams
): CheckResult {
  let resultCanNullOrEmpty = checkCanNullOrEmpty(value, params);
  if (resultCanNullOrEmpty) {
    return resultCanNullOrEmpty;
  }

  if (checkRegs(regList, value)) {
    if (params) {
      let checkMinResult = checkMinValue(value, params.min);
      if (checkMinResult) {
        return checkMinResult;
      }

      let checkMaxResult = checkMaxValue(value, params.max);
      if (checkMaxResult) {
        return checkMaxResult;
      }
    }

    return new CheckResult(true);
  } else {
    return new CheckResult(false, {
      code: "ERROR_NOT_INT",
      en: `please enter an integer`,
      cn: `请输入一个整数`
    });
  }
}
