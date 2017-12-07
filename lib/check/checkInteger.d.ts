import { CheckResult } from "../checkResult";
import { CheckParamsBase } from "../checkParamsBase";
/**
 * 整数检查参数
 *
 * @export
 * @class CheckIntegerParams
 * @extends {CheckParamsBase}
 */
export declare class CheckIntegerParams extends CheckParamsBase {
    min?: number;
    max?: number;
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
export declare function isInteger(value: string, params?: CheckIntegerParams): CheckResult;
