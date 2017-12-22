import { CheckResult } from "../checkResult";
import { CheckParamsBase } from "../checkParamsBase";
/**
 * 固定电话检查参数
 *
 * @export
 * @class CheckFixedTelephoneNumberParams
 * @extends {CheckParamsBase}
 */
export declare class CheckFixedTelephoneNumberParams extends CheckParamsBase {
}
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
export declare function isFixedTelephoneNumber(value: string, params?: CheckFixedTelephoneNumberParams): CheckResult;
