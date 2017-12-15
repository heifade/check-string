import { CheckResult } from "../checkResult";
import { CheckParamsBase } from "../checkParamsBase";
import { isNull } from "../util";
import { checkCanNullOrEmpty, checkRegs } from "./checkCommon";

//正则
let regList = [
  // /^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$/ // 固定电话号码
  /^(0[0-9]{2,3}\-{0,1})?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$/ // 固定电话号码
];

/**
 * 固定电话检查参数
 *
 * @export
 * @class CheckFixedTelephoneNumberParams
 * @extends {CheckParamsBase}
 */
export class CheckFixedTelephoneNumberParams extends CheckParamsBase {}

/**
 * 检查一个字符串是否符合固定电话格式
 *
 * @export
 * @param {string} value - 被检查的字符串
 * @param {CheckFixedTelephoneNumberParams} [params] - 参数
 * @returns {CheckResult}
 * @example
 * <br/><br/>
 * <pre>
 * import { isFixedTelephoneNumber } from "check-string";
 * ...
 * let str = "010-22345678"
 * let result = isFixedTelephoneNumber(str, { canNull: true }); //str可以为null
 * if(!result.success) {
 *   console.log(result.error.code); // 输出错误编号
 *   console.log(result.error.cn); // 输出错中文错误
 *   console.log(result.error.en); // 输出错英文错误
 * }
 * </pre>
 */
export function isFixedTelephoneNumber(value: string, params?: CheckFixedTelephoneNumberParams): CheckResult {
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
