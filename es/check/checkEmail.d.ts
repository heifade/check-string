import { CheckResult } from "../checkResult";
import { CheckParamsBase } from "../checkParamsBase";
/**
 * 电子邮件检查参数
 *
 * @export
 * @class CheckEmailParams
 * @extends {CheckParamsBase}
 */
export declare class CheckEmailParams extends CheckParamsBase {
}
/**
 * 检查一个字符串是否符合电子邮件格式
 *
 * @export
 * @param {string} value - 被检查的字符串
 * @param {CheckEmailParams} [params] - 参数
 * @returns {CheckResult}
 * @example
 * <br/><br/>
 * <pre>
 * import { isEmail } from "check-string";
 * ...
 * let str = 'aa@126.com';
 * let result = isEmail(str, { canNull: true }); //str可以为null
 * if (!result.success) {
 *   console.log(result.error.code); // 输出错误编号
 *   console.log(result.error.cn); // 输出错中文错误
 *   console.log(result.error.en); // 输出错英文错误
 * }
 * </pre>
 */
export declare function isEmail(value: string, params?: CheckEmailParams): CheckResult;
