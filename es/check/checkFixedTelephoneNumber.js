import { CheckResult } from "../checkResult";
import { CheckParamsBase } from "../checkParamsBase";
import { checkCanNullOrEmpty, checkRegs } from "./checkCommon";
let regList = [
    /^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$/ // 固定电话号码
];
export class checkFixedTelephoneNumberParams extends CheckParamsBase {
}
export function isFixedTelephoneNumber(value, params) {
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
            code: `ERROR_TEL_NOT_TEL`,
            en: `please enter a valid fixed phone number`,
            cn: `请输入一个有效的固定电话号码`
        });
    }
}
//# sourceMappingURL=checkFixedTelephoneNumber.js.map