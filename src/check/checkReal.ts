import { CheckResult } from "../checkResult";
import { CheckParamsBase } from "../checkParamsBase";
import { isNull } from "../util";
import {
  checkCanNullOrEmpty,
  checkRegs,
  checkMinValue,
  checkMaxValue
} from "./checkCommon";

//正则
let regList = [
  /^[0-9](\.[0-9]+)?$/, // [0, 9.99*)
  /^[1-9][0-9]*(\.[0-9]+)?$/, // [10, 99*.99*)
  /^-[0-9](\.[0-9]+)?$/, // (-9.99*, -0]
  /^-[1-9][0-9]*(\.[0-9]+)?$/ // (-99*.99*, -10.00]
];

/**
 * 实数检查参数
 *
 * @export
 * @class CheckRealParams
 * @extends {CheckParamsBase}
 */
export class CheckRealParams extends CheckParamsBase {
  public min?: number;
  public max?: number;
  public decimals?: number; //小数位数
}

/**
 * 检查一个字符串是否符合实数格式
 *
 * @export
 * @param {string} value - 被检查的字符串
 * @param {CheckRealParams} [params] - 参数
 * @returns {CheckResult}
 * @example
 * <pre>
 * <br/><br/>
 * import { isReal } from "check-string";
 * ...
 * let str = "23.56"
 * let result = isReal(str, { canNull: true, max: 500, min: 0 }); //str可以为null，最大500，最小0
 * if(!result.success) {
 *   console.log(result.error.code); // 输出错误编号
 *   console.log(result.error.cn); // 输出错中文错误
 *   console.log(result.error.en); // 输出错英文错误
 * }
 * </pre>
 */
export function isReal(value: string, params?: CheckRealParams): CheckResult {
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
      // 小数位数
      let pointIndex = value.indexOf(".");
      if (pointIndex > -1) {
        if (value.substr(pointIndex + 1).length > params.decimals) {
          return new CheckResult(false, {
            code: `ERROR_DECIMAL_DIGITS`,
            en: `at most ${params.decimals} decimal`,
            cn: `最多${params.decimals}位小数`
          });
        }
      }
    }

    // -0, -0.0, -00.00 等 不符合浮点数格式
    if (/^-0+(\.0+)?$/.test(value)) {
      return new CheckResult(false, {
        code: `ERROR_NOT_REAL`,
        en: `please enter a floating-point number`,
        cn: `请输入一个浮点数`
      });
    }

    return new CheckResult(true);
  } else {
    return new CheckResult(false, {
      code: `ERROR_NOT_REAL`,
      en: `please enter a floating-point number`,
      cn: `请输入一个浮点数`
    });
  }
}
