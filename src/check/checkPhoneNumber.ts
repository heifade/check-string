import { CheckResult } from "../checkResult";
import { CheckParamsBase } from "../checkParamsBase";
import { isNull } from "../util";
import { checkCanNullOrEmpty, checkRegs } from "./checkCommon";

//正则
let regList = [
  /^[0-9]{11}$/ // 手机号码
];

/**
 * 手机号码检查参数
 *
 * @export
 * @class CheckPhoneNumberParams
 * @extends {CheckParamsBase}
 */
export class CheckPhoneNumberParams extends CheckParamsBase {}

/**
 * 检查一个字符串是否符合手机号码格式
 *
 * @export
 * @param {string} value - 被检查的字符串
 * @param {CheckPhoneNumberParams} [params] - 参数
 * @returns {CheckResult}
 * @description
 * <br/><br/>
 * <pre>
 * 移动号码段:139、138、137、136、135、134、150、151、152、157、158、159、182、183、187、188、147
 * 联通号码段:130、131、132、136、185、186、145、166
 * 电信号码段:133、153、180、189
 * </pre>
 * @example
 * <br/><br/>
 * <pre>
 * import { isPhoneNumber } from "check-string";
 * ...
 * let str = "15811111111"
 * let result = isPhoneNumber(str, { canNull: true }); //str可以为null
 * if(!result.success) {
 *   console.log(result.error.code); // 输出错误编号
 *   console.log(result.error.cn); // 输出错中文错误
 *   console.log(result.error.en); // 输出错英文错误
 * }
 * </pre>
 */
export function isPhoneNumber(value: string, params?: CheckPhoneNumberParams): CheckResult {
  let resultCanNullOrEmpty = checkCanNullOrEmpty(value, params);
  if (resultCanNullOrEmpty) {
    return resultCanNullOrEmpty;
  }

  if (checkRegs(regList, value)) {
    return new CheckResult(true);
  } else {
    return new CheckResult(false, {
      code: "ERROR_NOT_PHONE",
      en: `please enter a valid cell phone number`,
      cn: `请输入一个有效的手机号码`
    });
  }
}
