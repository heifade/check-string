import { CheckResult } from "../checkResult";
import { CheckParamsBase } from "../checkParamsBase";
/**
 * 浮点数检查参数
 *
 * @export
 * @class CheckFloatParams
 * @extends {CheckParamsBase}
 */
export declare class CheckFloatParams extends CheckParamsBase {
    min?: number;
    max?: number;
    decimals?: number;
}
/**
 * <pre>
 * 检查一个字符串是否符合浮点数格式
 * 请注意，整型不属于浮点数。若要包含整型，请使用实数{@link isReal}
 * </pre>
 *
 * @export
 * @param {string} value - 被检查的字符串
 * @param {CheckFloatParams} [params] - 参数
 * @returns {CheckResult}
 * @example
 * <br/><br/>
 * <pre>
 * import { isFloat } from "check-string";
 * ...
 * let str = '12.53';
 * let result = isFloat(str, { canNull: true, max: 500, min: 0, decimals: 2 }); //str可以为null，最大500，最小0，小数点后最多2位小数
 * if (!result.success) {
 *   console.log(result.error.code); // 输出错误编号
 *   console.log(result.error.cn); // 输出错中文错误
 *   console.log(result.error.en); // 输出错英文错误
 * }
 * </pre>
 */
export declare function isFloat(value: string | number, params?: CheckFloatParams): CheckResult;
