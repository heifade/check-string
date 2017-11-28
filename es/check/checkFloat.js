import { CheckResult } from "../checkResult";
import { CheckParamsBase } from "../checkParamsBase";
import { isNull } from "../util";
import { checkCanNullOrEmpty, checkRegs } from "./checkCommon";
let regList = [
    /^[0-9]\.[0-9]+$/,
    /^[1-9][0-9]*\.[0-9]+$/,
    /^-[0-9]*\.[0-9]+$/,
    /^-[1-9][0-9]*\.[0-9]+$/ //负数
];
export class CheckFloatParams extends CheckParamsBase {
}
export function isFloat(value, params) {
    let resultCanNullOrEmpty = checkCanNullOrEmpty(value, params);
    if (resultCanNullOrEmpty) {
        return resultCanNullOrEmpty;
    }
    if (checkRegs(regList, value)) {
        if (params) {
            let valueOfInt = Number(value);
            if (!isNull(params.max)) {
                if (valueOfInt > params.max) {
                    return new CheckResult(false, {
                        code: `ERROR_FLOAT_MAX`,
                        en: `can not be more than ${params.max}`,
                        cn: `不能大于${params.max}`
                    });
                }
            }
            if (!isNull(params.min)) {
                if (valueOfInt < params.min) {
                    return new CheckResult(false, {
                        code: `ERROR_FLOAT_MIN`,
                        en: `can not be less than ${params.max}`,
                        cn: `不能小于${params.max}`
                    });
                }
            }
            // 小数位数
            let pointIndex = value.indexOf(".");
            if (value.substr(pointIndex + 1).length > params.decimals) {
                return new CheckResult(false, {
                    code: `ERROR_REAL_DECIMAL_DIGITS`,
                    en: `at most ${params.decimals} decimal`,
                    cn: `最多${params.decimals}位小数！`
                });
            }
        }
        // -0, -0.0, -00.00 等 不符合浮点数格式
        if (/^-0+(\.0+)?$/.test(value)) {
            return new CheckResult(false, {
                code: `ERROR_FLOAT_NOT_FLOAT`,
                en: `please enter a floating-point number`,
                cn: `请输入一个浮点数`
            });
        }
        return new CheckResult(true);
    }
    else {
        return new CheckResult(false, {
            code: `ERROR_FLOAT_NOT_FLOAT`,
            en: `please enter a floating-point number`,
            cn: `请输入一个浮点数`
        });
    }
}
//# sourceMappingURL=checkFloat.js.map