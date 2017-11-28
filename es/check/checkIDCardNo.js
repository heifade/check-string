import { CheckResult } from "../checkResult";
import { CheckParamsBase } from "../checkParamsBase";
import { checkCanNullOrEmpty, checkRegs } from "./checkCommon";
let regList = [
    /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
    /^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$/ // 15位
];
export class checkIDCardNoParams extends CheckParamsBase {
}
export function isIDCardNo(value, params) {
    let resultCanNullOrEmpty = checkCanNullOrEmpty(value, params);
    if (resultCanNullOrEmpty) {
        return resultCanNullOrEmpty;
    }
    if (checkRegs(regList, value)) {
        if (params) {
        }
        return new CheckResult(true);
    }
    else {
        return new CheckResult(false, {
            code: `ERROR_IDCARD_NOT_IDCARD`,
            en: `please enter a valid ID number`,
            cn: `请输入一个有效的身份证号码`
        });
    }
}
//# sourceMappingURL=checkIDCardNo.js.map