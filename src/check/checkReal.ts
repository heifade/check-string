import { CheckResult } from "../checkResult";
import { CheckParamsBase } from "../checkParamsBase";
import { isNull } from "../util";
import { checkCommon, checkRegs } from "./checkCommon";

let regList = [
  /^[0-9](\.[0-9]+)?$/, // [0, 9.99*)
  /^[1-9][0-9]*(\.[0-9]+)?$/, // [10, 99*.99*)
  /^-[0-9](\.[0-9]+)?$/, // (-9.99*, -0]
  /^-[1-9][0-9]*(\.[0-9]+)?$/ // (-99*.99*, -10.00]
];

export class CheckRealParams extends CheckParamsBase {
  public min?: number;
  public max?: number;
  public decimals?: number; //小数位数
}

export function isReal(value: string, params?: CheckRealParams): CheckResult {
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
      // 小数位数
      let pointIndex = value.indexOf(".");
      if (pointIndex > -1) {
        if (value.substr(pointIndex + 1).length > params.decimals) {
          return new CheckResult(false, `请输入一个浮点数，最多${params.decimals}位小数！`);
        }
      }
    }

    // -0, -0.0, -00.00 等 不符合浮点数格式
    if (/^-0+(\.0+)?$/.test(value)) {
      return new CheckResult(false, `请输入一个浮点数！`);
    }

    return new CheckResult(true, "验证通过");
  } else {
    return new CheckResult(false, `请输入一个浮点数！`);
  }
}
