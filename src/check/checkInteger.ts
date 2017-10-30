import { CheckResult } from "../checkResult";
import { CheckParamsBase } from "../checkParamsBase";
import { isNull } from "../util";
import { checkCommon, checkRegs } from "./checkCommon";

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
  if (checkCommon(value, params).success) {
    return new CheckResult(true, "");
  }

  if (checkRegs(regList, value)) {
    if (params) {
      let valueOfInt = Number(value);
      if (!isNull(params.max)) {
        if (valueOfInt > params.max) {
          return new CheckResult(false, `最大值不能大于${params.max}`);
        }
      }
      if (!isNull(params.min)) {
        if (valueOfInt < params.min) {
          return new CheckResult(false, `最小值不能小于${params.max}`);
        }
      }
    }

    return new CheckResult(true, "验证通过");
  } else {
    return new CheckResult(false, `请输入一个整数！`);
  }
}
