var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "../checkResult", "../checkParamsBase", "./checkCommon"], function (require, exports, checkResult_1, checkParamsBase_1, checkCommon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    //正则
    var regList = [/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/];
    /**
     * 电子邮件检查参数
     *
     * @export
     * @class CheckEmailParams
     * @extends {CheckParamsBase}
     */
    var CheckEmailParams = /** @class */ (function (_super) {
        __extends(CheckEmailParams, _super);
        function CheckEmailParams() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return CheckEmailParams;
    }(checkParamsBase_1.CheckParamsBase));
    exports.CheckEmailParams = CheckEmailParams;
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
    function isEmail(value, params) {
        var resultCanNullOrEmpty = checkCommon_1.checkCanNullOrEmpty(value, params);
        if (resultCanNullOrEmpty) {
            return resultCanNullOrEmpty;
        }
        if (checkCommon_1.checkRegs(regList, value)) {
            return new checkResult_1.CheckResult(true);
        }
        else {
            return new checkResult_1.CheckResult(false, {
                code: "ERROR_NOT_EMAIL",
                en: "please enter a valid mailbox address",
                cn: "\u8BF7\u8F93\u5165\u4E00\u4E2A\u6709\u6548\u7684\u90AE\u7BB1\u5730\u5740"
            });
        }
    }
    exports.isEmail = isEmail;
});
//# sourceMappingURL=checkEmail.js.map