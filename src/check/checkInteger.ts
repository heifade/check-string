import { CheckResult } from "../checkResult";
import { CheckParamsBase } from "../checkParamsBase";
import { isNull } from "../util";
import { checkCanNullOrEmpty, checkRegs, checkMaxValue, checkMinValue } from "./checkCommon";

//正则
let regList = [
  /^[0-9]$/, // 0至9
  /^[1-9][0-9]*$/, //10以上
  /^-[1-9][0-9]*$/ //负数
];

/**
 * 整数检查参数
 *
 * @export
 * @class CheckIntegerParams
 * @extends {CheckParamsBase}
 */
export class CheckIntegerParams extends CheckParamsBase {
  public min?: number;
  public max?: number;
}

/**
 * 检查一个字符串是否符合整数格式
 *
 * @export
 * @param {string} value - 被检查的字符串
 * @param {CheckIntegerParams} [params] - 参数
 * @returns {CheckResult}
 * @example
 * <br/><br/>
 * <pre>
 * import { isInteger } from "check-string";
 * ...
 * let str = "123"
 * let result = isInteger(str, { canNull: true, min: 10, max: 10000 }); //str可以为null，最大10000，最小10
 * if(!result.success) {
 *   console.log(result.error.code); // 输出错误编号
 *   console.log(result.error.cn); // 输出错中文错误
 *   console.log(result.error.en); // 输出错英文错误
 * }
 * </pre>
 */
export function isInteger(value: string | number, params?: CheckIntegerParams): CheckResult {

  if (typeof value === "number") {
    return new CheckResult(true);
  }

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
