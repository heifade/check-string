import { CheckResult } from "../checkResult";
import { CheckParamsBase } from "../checkParamsBase";
/**
 * 实数检查参数
 *
 * @export
 * @class CheckRealParams
 * @extends {CheckParamsBase}
 */
export declare class CheckRealParams extends CheckParamsBase {
    min?: number;
    max?: number;
    decimals?: number;
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
 * let result = isReal(str, { canNull: true, max: 500, min: 0, decimals: 2 }); //str可以为null，最大500，最小0, 小数点后最多2位小数
 * if(!result.success) {
 *   console.log(result.error.code); // 输出错误编号
 *   console.log(result.error.cn); // 输出错中文错误
 *   console.log(result.error.en); // 输出错英文错误
 * }
 * </pre>
 */
export declare function isReal(value: string | number, params?: CheckRealParams): CheckResult;
