import { CheckResult } from "../checkResult";
export function checkCanNullOrEmpty(value, params) {
    if (params) {
        if (value === null || value === undefined) {
            // 值为空时
            if (params.canNull || params.canNullOrEmpty) {
                // 验证要求可以为空
                return new CheckResult(true);
            }
            else {
                //验证要求不可以为空
                return new CheckResult(false, {
                    code: `ERROR_CANNOT_NULL`,
                    en: `can not be empty`,
                    cn: `不能为空`
                });
            }
        }
        else if (value === "") {
            // 值为空字符串时
            if (params.canEmpty || params.canNullOrEmpty) {
                return new CheckResult(true);
            }
            else {
                return new CheckResult(false, {
                    code: `ERROR_CANNOT_EMPTY`,
                    en: `can not be empty`,
                    cn: `不能为空`
                });
            }
        }
    }
    return null;
}
// 校验正则表达式数组，所有正则都通过返回true
export function checkRegs(regList, value) {
    for (let reg of regList) {
        if (reg.test(value)) {
            return true;
        }
    }
    return false;
}
//# sourceMappingURL=checkCommon.js.map