import { CheckResult } from "../checkResult";
import { CheckParamsBase } from "../checkParamsBase";
/**
 * 身份证号码检查参数
 *
 * @export
 * @class CheckIDCardNoParams
 * @extends {CheckParamsBase}
 */
export declare class CheckIDCardNoParams extends CheckParamsBase {
}
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
export declare function isIDCardNo(value: string, params?: CheckIDCardNoParams): CheckResult;
