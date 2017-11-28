import { CheckResult } from "../checkResult";
import { CheckParamsBase } from "../checkParamsBase";
import { isNull } from "../util";
import { checkCanNullOrEmpty, checkRegs } from "./checkCommon";

//正则
let regList = [
  /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/, // 18位
  /^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$/ // 15位
];

/**
 * 身份证号码检查参数
 *
 * @export
 * @class CheckIDCardNoParams
 * @extends {CheckParamsBase}
 */
export class CheckIDCardNoParams extends CheckParamsBase {}

/**
 * 检查一个字符串是否符合身份证号码格式
 *
 * @export
 * @param {string} value - 被检查的字符串
 * @param {CheckIDCardNoParams} [params] - 参数
 * @returns {CheckResult}
 * @example
 * <br/><br/>
 * <pre>
 * import { isIDCardNo } from "check-string";
 * ...
 * let str = "330683180001017218"
 * let result = isIDCardNo(str, { canNull: true }); //str可以为null
 * if(!result.success) {
 *   console.log(result.error.code); // 输出错误编号
 *   console.log(result.error.cn); // 输出错中文错误
 *   console.log(result.error.en); // 输出错英文错误
 * }
 * </pre>
 */
export function isIDCardNo(
  value: string,
  params?: CheckIDCardNoParams
): CheckResult {
  let resultCanNullOrEmpty = checkCanNullOrEmpty(value, params);
  if (resultCanNullOrEmpty) {
    return resultCanNullOrEmpty;
  }

  if (checkRegs(regList, value)) {
    return new CheckResult(true);
  } else {
    return new CheckResult(false, {
      code: `ERROR_NOT_IDCARD`,
      en: `please enter a valid ID number`,
      cn: `请输入一个有效的身份证号码`
    });
  }
}
