import { CheckParamsBase } from "../checkParamsBase";
import { CheckResult } from "../checkResult";
/**
 * <pre>
 * 内部方法。
 * 检查是否允许为空
 * </pre>
 *
 * @export
 * @param {string} value
 * @param {CheckParamsBase} [params]
 * @returns {CheckResult}
 */
export declare function checkCanNullOrEmpty(value: string, params?: CheckParamsBase): CheckResult;
/**
 * <pre>
 * 内部访法
 * 校验正则表达式数组，所有正则都通过返回true
 * </pre>
 *
 * @export
 * @param {Array<any>} regList
 * @param {string} value
 * @returns
 */
export declare function checkRegs(regList: Array<any>, value: string): boolean;
/**
 * 检查最大值是否满足要求
 *
 * @export
 * @param {string} value
 * @param {number} max
 * @returns
 */
export declare function checkMaxValue(value: string, max: number): CheckResult;
/**
 * 检查最小值是否满足要求
 *
 * @export
 * @param {string} value
 * @param {number} min
 * @returns
 */
export declare function checkMinValue(value: string, min: number): CheckResult;
