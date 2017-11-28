import { CheckResult } from "../checkResult";
import { CheckParamsBase } from "../checkParamsBase";
import { isNull } from "../util";
import { checkCanNullOrEmpty, checkRegs } from "./checkCommon";
let regList = [
    /^[0-9]$/,
    /^[1-9][0-9]*$/,
    /^-[1-9][0-9]*$/ //负数
];
export class CheckIntegerParams extends CheckParamsBase {
}
export function isInteger(value, params) {
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
                        code: "ERROR_INT_MAX",
                        en: `can not be more than ${params.max}`,
                        cn: `不能大于${params.max}`
                    });
                }
            }
            if (!isNull(params.min)) {
                if (valueOfInt < params.min) {
                    return new CheckResult(false, {
                        code: "ERROR_INT_MIN",
                        en: `can not be less than ${params.max}`,
                        cn: `不能小于${params.max}`
                    });
                }
            }
        }
        return new CheckResult(true);
    }
    else {
        return new CheckResult(false, {
            code: "ERROR_INT_NOT_INT",
            en: `please enter an integer`,
            cn: `请输入一个整数`
        });
    }
}
//# sourceMappingURL=checkInteger.js.map