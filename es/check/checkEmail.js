import { CheckResult } from "../checkResult";
import { CheckParamsBase } from "../checkParamsBase";
import { checkCanNullOrEmpty, checkRegs } from "./checkCommon";
//正则
let regList = [
    /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
];
/**
 * 电子邮件检查参数
 *
 * @export
 * @class CheckEmailParams
 * @extends {CheckParamsBase}
 */
export class CheckEmailParams extends CheckParamsBase {
}
/**
 * 检查一个字符串是否符合电子邮件格式
 *
 * @export
 * @param {string} value - 被检查的字符串
 * @param {CheckEmailParams} [params] - 参数
 * @returns {CheckResult}
 * @example
 * <br/><br/>
 * <pre>
 * import { isEmail } from "check-string";
 * ...
 * let str = 'aa@126.com';
 * let result = isEmail(str, { canNull: true }); //str可以为null
 * if (!result.success) {
 *   console.log(result.error.code); // 输出错误编号
 *   console.log(result.error.cn); // 输出错中文错误
 *   console.log(result.error.en); // 输出错英文错误
 * }
 * </pre>
 */
export function isEmail(value, params) {
    let resultCanNullOrEmpty = checkCanNullOrEmpty(value, params);
    if (resultCanNullOrEmpty) {
        return resultCanNullOrEmpty;
    }
    if (checkRegs(regList, value)) {
        return new CheckResult(true);
    }
    else {
        return new CheckResult(false, {
            code: `ERROR_NOT_EMAIL`,
            en: `please enter a valid mailbox address`,
            cn: `请输入一个有效的邮箱地址`
        });
    }
}
//# sourceMappingURL=checkEmail.js.map