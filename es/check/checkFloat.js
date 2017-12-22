import { CheckResult } from "../checkResult";
import { CheckParamsBase } from "../checkParamsBase";
import { checkCanNullOrEmpty, checkRegs, checkMaxValue, checkMinValue } from "./checkCommon";
//正则
let regList = [
    /^[0-9]\.[0-9]+$/,
    /^[1-9][0-9]*\.[0-9]+$/,
    /^-[0-9]*\.[0-9]+$/,
    /^-[1-9][0-9]*\.[0-9]+$/ //负数
];
/**
 * 浮点数检查参数
 *
 * @export
 * @class CheckFloatParams
 * @extends {CheckParamsBase}
 */
export class CheckFloatParams extends CheckParamsBase {
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
export function isFloat(value, params) {
    if (typeof value === "number") {
        return new CheckResult(true);
    }
    let resultCanNullOrEmpty = checkCanNullOrEmpty(value, params);
    if (resultCanNullOrEmpty) {
        return resultCanNullOrEmpty;
    }
    if (checkRegs(regList, value)) {
        if (params) {
            let checkMinResult = checkMinValue(value, params.min);
            if (checkMinResult) {
                return checkMinResult;
            }
            let checkMaxResult = checkMaxValue(value, params.max);
            if (checkMaxResult) {
                return checkMaxResult;
            }
            // 小数位数
            let pointIndex = value.indexOf(".");
            if (value.substr(pointIndex + 1).length > params.decimals) {
                return new CheckResult(false, {
                    code: `ERROR_DECIMAL_DIGITS`,
                    en: `at most ${params.decimals} decimal`,
                    cn: `最多${params.decimals}位小数！`
                });
            }
        }
        // -0, -0.0, -00.00 等 不符合浮点数格式
        if (/^-0+(\.0+)?$/.test(value)) {
            return new CheckResult(false, {
                code: `ERROR_NOT_FLOAT`,
                en: `please enter a floating-point number`,
                cn: `请输入一个浮点数`
            });
        }
        return new CheckResult(true);
    }
    else {
        return new CheckResult(false, {
            code: `ERROR_NOT_FLOAT`,
            en: `please enter a floating-point number`,
            cn: `请输入一个浮点数`
        });
    }
}
//# sourceMappingURL=checkFloat.js.map